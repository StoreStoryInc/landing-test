import { NextResponse } from 'next/server';
import { waitUntil } from '@vercel/functions';

/**
 * 방문 요약 1건을 받아서 구글시트(Apps Script 웹앱)로 전달.
 * sendBeacon은 text/plain 으로 JSON 문자열을 보냄.
 *
 * 환경변수 TRACK_URL: Apps Script 웹앱의 /exec URL.
 * 없으면 조용히 204 (배포 전/미설정 시 에러 안 나게).
 *
 * Apps Script 호출(2~4초)을 기다리지 않고 즉시 204 반환 → 함수 블로킹/타임아웃 방지.
 * waitUntil로 응답 후에도 전송이 끝까지 진행되게 보장.
 */
export const runtime = 'nodejs';

export async function POST(req: Request) {
    const url = process.env.TRACK_URL;
    if (!url) return new NextResponse(null, { status: 204 });

    let body: unknown;
    try {
        body = JSON.parse(await req.text());
    } catch {
        return new NextResponse(null, { status: 204 });
    }

    // 평범한 객체가 아니면(배열/문자열/null 등) 버림 — spread로 쓰레기 행 생기는 것 방지
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        return new NextResponse(null, { status: 204 });
    }

    // 서버에서 본 정보 보강 (스푸핑 어려운 값). spread 뒤에 둬서 클라이언트가 덮어쓰지 못하게.
    const enriched = {
        ...(body as Record<string, unknown>),
        ua: req.headers.get('user-agent') || '',
        ts: new Date().toISOString(),
    };

    // Apps Script /exec 는 POST 처리(=시트 append) 후 302로 결과 페이지를 가리킴 → 결과는 무시.
    const forward = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(enriched),
    })
        .then(() => undefined)
        .catch(() => undefined); // 전송 실패는 사용자에게 영향 없음

    // Vercel: 응답을 막지 않고 백그라운드로 끝까지 전송. 로컬 등 미지원 환경이면 그냥 await.
    try {
        waitUntil(forward);
    } catch {
        await forward;
    }

    return new NextResponse(null, { status: 204 });
}
