import { NextResponse } from 'next/server';

/**
 * 방문 요약 1건을 받아서 구글시트(Apps Script 웹앱)로 전달.
 * sendBeacon은 text/plain 으로 JSON 문자열을 보냄.
 *
 * 환경변수 TRACK_URL: Apps Script 웹앱의 /exec URL.
 * 없으면 조용히 204 (배포 전/미설정 시 에러 안 나게).
 */
export const runtime = 'nodejs';

export async function POST(req: Request) {
    const url = process.env.TRACK_URL;
    if (!url) return new NextResponse(null, { status: 204 });

    let body: unknown;
    try {
        const text = await req.text();
        body = JSON.parse(text);
    } catch {
        return new NextResponse(null, { status: 204 });
    }

    // 서버에서 본 정보 보강 (스푸핑 어려운 값)
    const enriched = {
        ...(body as Record<string, unknown>),
        ua: req.headers.get('user-agent') || '',
        ts: new Date().toISOString(),
    };

    try {
        // Apps Script /exec 는 POST 처리 후 302로 결과 페이지를 가리킴.
        // doPost 실행(=시트 append)은 첫 POST에서 끝나므로 결과는 무시해도 됨.
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: JSON.stringify(enriched),
        });
    } catch {
        /* 시트 전송 실패는 사용자에게 영향 없음 */
    }

    return new NextResponse(null, { status: 204 });
}
