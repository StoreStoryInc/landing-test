/**
 * 세일즈랩 랜딩 애널리틱스 - Google Apps Script 웹앱
 *
 * 설치:
 *  1) 구글시트 새로 생성 → 상단 메뉴 [확장 프로그램] → [Apps Script]
 *  2) 이 파일 내용 전체를 붙여넣고 저장
 *  3) 우측 상단 [배포] → [새 배포] → 유형 "웹 앱"
 *       - 실행 주체: 나
 *       - 액세스 권한: "모든 사용자"
 *     → 배포하면 나오는 https://script.google.com/macros/s/XXXX/exec URL 복사
 *  4) 그 URL을 Vercel 환경변수 TRACK_URL 에 등록 (재배포 필요)
 *
 * 통계 확인: 웹앱 URL 뒤에 ?stats=1&token=비밀값 을 붙여 GET
 *   예) https://script.google.com/macros/s/XXXX/exec?stats=1&token=changeme
 */

// 통계 조회를 보호하는 간단한 토큰 (원하는 값으로 바꾸세요)
var STATS_TOKEN = 'changeme';

// 데이터가 쌓일 탭 이름. 기존 스프레드시트에 붙일 때 이름 바꾸고 싶으면 여기만 수정.
var SHEET_NAME = '랜딩트래킹';

// 헤더 내비 버튼 라벨 (각각 hd_* 컬럼으로 저장)
//  - 안 보인 버튼 = '-',  보였으면 TRUE/FALSE
//  - / : 기능소개·대시보드·요금제   |   /a : 리뷰관리·광고관리·대시보드·요금제
//  ※ 헤더 버튼 이름을 바꾸면 이 배열도 같이 수정하세요.
var HEADER_BUTTONS = ['기능소개', '리뷰관리', '광고관리', '대시보드', '요금제'];

var HEADERS = ['ts', 'sid', 'page', 'variant', 'device', 'dur', 'depth', 'sections', 'cta']
  .concat(HEADER_BUTTONS.map(function (k) { return 'hd_' + k; }))
  .concat(['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'ua']);

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS); // 비어있으면(미리 만든 빈 탭 포함) 헤더 깔기
  return sh;
}

// 방문 1건 수신 → 1행 append
function doPost(e) {
  // 동시 쓰기로 행이 덮어써지지 않도록 잠금 (광고 스파이크 대비)
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (lockErr) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, err: 'busy' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  try {
    var d = JSON.parse(e.postData.contents);
    var nav = d.nav || [];          // 클릭한 헤더 버튼
    var avail = d.navAvail || [];   // 그 방문자에게 실제로 보인 헤더 버튼
    var when = d.ts ? new Date(d.ts) : new Date();
    var row = [
      Utilities.formatDate(when, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss'), // 한국시간(KST)으로 바로 저장
      d.sid || '',
      d.page || '',
      d.variant || '',
      d.device || '',
      Number(d.dur) || 0,
      Number(d.depth) || 0,
      (d.sections || []).join('|'),
      (d.cta || []).join('|')
    ];
    // 안 보인 버튼 = '-', 보였으면 클릭여부를 TRUE/FALSE 로
    HEADER_BUTTONS.forEach(function (k) {
      row.push(avail.indexOf(k) < 0 ? '-' : (nav.indexOf(k) >= 0));
    });
    row.push(
      d.utm_source || '', d.utm_medium || '', d.utm_campaign || '',
      d.utm_term || '', d.utm_content || '', d.ref || '', d.ua || ''
    );
    sheet_().appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, err: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// 통계 조회 (?stats=1&token=...) — 사람이 보거나 Claude가 읽어서 평균 제시할 때 사용
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (!p.stats) return ContentService.createTextOutput('OK');
  if (p.token !== STATS_TOKEN) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, err: 'bad token' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var sh = sheet_();
  var values = sh.getDataRange().getValues();
  var head = values.shift(); // 헤더
  var col = {};
  head.forEach(function (h, i) { col[h] = i; });

  // 같은 sid는 여러 번 전송될 수 있음(백그라운드 복귀 등) → 가장 완전한(dur 최대) 1건만 사용
  var bySid = {};
  values.forEach(function (r, i) {
    var sid = r[col.sid] || ('__norow' + i); // sid 없으면 각각 고유 처리
    var prev = bySid[sid];
    if (!prev || (Number(r[col.dur]) || 0) >= (Number(prev[col.dur]) || 0)) bySid[sid] = r;
  });
  var rows = Object.keys(bySid).map(function (k) { return bySid[k]; });

  var groups = { all: bucket_(), main: bucket_(), a: bucket_() };
  rows.forEach(function (r) {
    var variant = r[col.variant] === 'a' ? 'a' : 'main';
    add_(groups.all, r, col);
    add_(groups[variant], r, col);
  });

  var out = {
    ok: true,
    generatedAt: new Date().toISOString(),
    all: summarize_(groups.all),
    main: summarize_(groups.main),
    a: summarize_(groups.a)
  };
  return ContentService.createTextOutput(JSON.stringify(out, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

function bucket_() {
  return {
    n: 0, durSum: 0, depthSum: 0, ctaVisits: 0,
    ctaBy: {}, sectionBy: {}, navBy: {}, navShownBy: {}, deviceBy: {}
  };
}

function add_(b, r, col) {
  b.n++;
  b.durSum += Number(r[col.dur]) || 0;
  b.depthSum += Number(r[col.depth]) || 0;

  var device = r[col.device] || 'unknown';
  b.deviceBy[device] = (b.deviceBy[device] || 0) + 1;

  var sections = String(r[col.sections] || '').split('|').filter(Boolean);
  sections.forEach(function (s) { b.sectionBy[s] = (b.sectionBy[s] || 0) + 1; });

  var ctas = String(r[col.cta] || '').split('|').filter(Boolean);
  if (ctas.length) b.ctaVisits++;
  ctas.forEach(function (c) { b.ctaBy[c] = (b.ctaBy[c] || 0) + 1; });

  HEADER_BUTTONS.forEach(function (k) {
    var v = r[col['hd_' + k]];
    if (v === '-' || v === '') return; // 미노출은 분모에서 제외
    b.navShownBy[k] = (b.navShownBy[k] || 0) + 1; // 노출(보인) 횟수
    if (v === true || v === 'TRUE') b.navBy[k] = (b.navBy[k] || 0) + 1; // 클릭
  });
}

// 헤더 버튼: 클릭률 = 클릭 / "보인 횟수"
function navRate_(clickMap, shownMap) {
  var out = {};
  Object.keys(shownMap).forEach(function (k) {
    var shown = shownMap[k], clicks = clickMap[k] || 0;
    out[k] = { clicks: clicks, shown: shown, rate: shown ? +(clicks / shown * 100).toFixed(1) : 0 };
  });
  return out;
}

function rate_(map, n) {
  var out = {};
  Object.keys(map).forEach(function (k) {
    out[k] = { count: map[k], rate: n ? +(map[k] / n * 100).toFixed(1) : 0 };
  });
  return out;
}

function summarize_(b) {
  return {
    visits: b.n,
    avgDurationSec: b.n ? +(b.durSum / b.n).toFixed(1) : 0,
    avgScrollDepthPct: b.n ? +(b.depthSum / b.n).toFixed(1) : 0,
    deviceBreakdown: rate_(b.deviceBy, b.n),     // pc / mobile 비중
    ctaClickRatePct: b.n ? +(b.ctaVisits / b.n * 100).toFixed(1) : 0,
    ctaByLocation: rate_(b.ctaBy, b.n),          // CTA 위치별 클릭률
    headerButtonClickRate: navRate_(b.navBy, b.navShownBy), // 헤더 버튼별: 보인 사람 중 클릭률
    sectionReachRate: rate_(b.sectionBy, b.n)    // 섹션(피처)별 도달률
  };
}
