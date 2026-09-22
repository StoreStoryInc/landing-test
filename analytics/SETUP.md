# 자체 애널리틱스 설정 (구글시트 기반)

GA·Amplitude 없이, 구글시트 1개에 "1 방문 = 1 행"으로 데이터를 쌓고 평균을 봅니다.

## 수집 항목
- **방문일시 (`ts`)**: 방문 날짜+시각을 **한국시간(KST)으로 바로 저장** (`yyyy-MM-dd HH:mm:ss`). 시트 시간대 설정과 무관
- **landing 종류**: `/` (main) vs `/a` (광고 variant)
- **device**: PC vs 모바일 (user-agent 기준)
- **UTM**: source / medium / campaign / term / content
- **CTA 클릭**: 가입 버튼 클릭 여부 + 클릭이 일어난 위치(hero / header / middle-cta / bottom-cta 등)
- **헤더 버튼 클릭**: 버튼 **라벨 기준** 컬럼 — `hd_기능소개` / `hd_리뷰관리` / `hd_광고관리` / `hd_대시보드` / `hd_요금제`.
  그 방문자에게 **안 보인 버튼은 `-`**, 보였으면 클릭여부를 **`TRUE`/`FALSE`** 로 표기.
  (`/` 헤더 = 기능소개·대시보드·요금제 / `/a` 헤더 = 리뷰관리·광고관리·대시보드·요금제 / 모바일은 보통 요금제만 노출)
- **체류시간**: 탭이 실제로 보인 시간(초). 백그라운드 시간 제외
- **View depth**: 최대 스크롤 깊이(0~100%) + 노출된 섹션 목록(섹션 상단이 화면 상위 80%에 들어오면 도달로 집계 — 긴 섹션·바닥 섹션 모두 정확)

> 전송 방식: 방문당 `sid` 1개를 고정하고, 떠날 때마다(탭 숨김/이탈) 현재 스냅샷을 같은 sid로 전송.
> 같은 sid가 여러 행이 될 수 있으나 통계(doGet)는 sid별 가장 완전한 1건만 집계(중복 제거).
> 덕분에 모바일에서 탭 전환 후 복귀해 누른 CTA도 누락 없이 잡힘.

## 동작 구조
```
방문자 → (떠날 때 sendBeacon 1건) → /api/track (Vercel) → Apps Script 웹앱 → 구글시트(events 시트)
통계: 웹앱 ?stats=1&token=... GET → 평균/비율 JSON
```

## 설치 (약 10분)

### 1. 구글시트 + Apps Script 배포
1. 구글시트 새로 생성
2. [확장 프로그램] → [Apps Script]
3. `analytics/AppsScript.gs` 내용 전체 붙여넣기 → 저장
4. `STATS_TOKEN` 값을 원하는 비밀값으로 변경
5. [배포] → [새 배포] → 유형 **웹 앱**
   - 실행 주체: **나**
   - 액세스 권한: **모든 사용자**
6. 나온 `https://script.google.com/macros/s/XXXX/exec` URL 복사

### 2. Vercel 환경변수 등록
- Vercel 프로젝트 → Settings → Environment Variables
- `TRACK_URL` = 위 `/exec` URL
- 저장 후 **재배포**(Redeploy) 해야 적용됨

### 3. 통계 보기
브라우저나 curl로:
```
https://script.google.com/macros/s/XXXX/exec?stats=1&token=<STATS_TOKEN>
```
→ all / main / a / b 별로 방문수·평균체류·평균스크롤·CTA클릭률·섹션도달률·유입출처(UTM/리퍼러) JSON 반환.

Claude에게 "이 URL 읽고 평균 정리해줘"라고 하면 표로 정리해 줍니다.

#### 필터 (노이즈 제거 / 광고 트래픽만 보기)
URL 뒤에 파라미터를 붙이면 조건에 맞는 방문만 집계합니다 (없으면 전체):
- `&utmOnly=1` — **UTM이 붙은 방문만 = 광고 유입.** organic/direct/내부 테스트 제외 (랜딩은 광고 링크 전용이라 이게 "진짜 트래픽"). 가장 깨끗한 `/` vs `/a` 비교.
- `&utm_source=meta` — 특정 소스만
- `&device=mobile` — 디바이스 한정 (`pc` | `mobile`)
- `&since=2026-06-08` — 해당 날짜(KST) 이후 방문만 (예: 측정 버그수정 후 데이터만)
- `&raw=1` — **요약 대신 방문별 "원본 행"을 그대로 반환** (방문당 1행, 헤더 키). 중앙값·교차분석·이상치 제거 등 요약으로 못 하는 분석용. 위 필터와 조합 가능 (`&raw=1&utmOnly=1`).

예) `...?stats=1&token=<STATS_TOKEN>&utmOnly=1`
응답의 `utmSourceBreakdown` / `referrerBreakdown` 으로 실제 유입 구성(광고 링크에 UTM이 붙는지)을 먼저 확인할 수 있습니다.

## 참고/한계
- `TRACK_URL` 미설정 시 `/api/track`은 조용히 204 (에러 없음). 설정 후부터 수집 시작.
- 모바일에서 OS가 탭을 강제 종료하면 일부 방문은 누락될 수 있음(분석엔 영향 미미).
- 봇 트래픽은 user-agent(`ua` 열)로 사후 필터 가능.
