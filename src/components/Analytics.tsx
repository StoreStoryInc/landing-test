'use client';

/**
 * 자체 제작 경량 애널리틱스.
 *
 * "1 방문 = 1 행" 원칙: 페이지뷰/스크롤/클릭마다 따로 쏘지 않고,
 * 사용자가 페이지를 떠날 때 요약 1건을 navigator.sendBeacon으로 /api/track 에 보냅니다.
 * /api/track 이 구글시트(Apps Script 웹앱)로 전달합니다.
 *
 * 수집 항목:
 *  - page / variant : '/' (main) vs '/a'
 *  - utm_*          : 유입 UTM
 *  - dur            : 체류시간(초)
 *  - depth          : 최대 스크롤 깊이(0~100%)
 *  - sections       : 화면에 실제로 노출된 섹션 목록
 *  - cta            : 클릭한 CTA 위치 목록 (가입 링크 클릭)
 */

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// 가입 CTA 판별: 모든 CTA가 이 URL로 향함
const CTA_URL_MATCH = '/auth/signin';

function uuid(): string {
    try {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    } catch {
        /* noop */
    }
    return 'sid-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e9).toString(36);
}

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const start = Date.now();
        // 탭이 보이는 동안만 누적(백그라운드 시간 제외)
        let activeMs = 0;
        let lastResume = Date.now();
        let maxDepth = 0;
        const sections = new Set<string>();
        const ctas = new Set<string>();
        const navs = new Set<string>(); // 헤더 내 버튼/내비 클릭
        let sent = false;

        // PC vs 모바일 (user-agent 기준)
        const device = /Mobi|Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ? 'mobile'
            : 'pc';

        // UTM 파싱
        const params = new URLSearchParams(window.location.search);
        const utm = {
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || '',
        };

        // 1) 최대 스크롤 깊이(%)
        let rafPending = false;
        const measureDepth = () => {
            rafPending = false;
            const doc = document.documentElement;
            const scrollable = doc.scrollHeight - window.innerHeight;
            const pct = scrollable <= 0 ? 100 : Math.round(((window.scrollY || 0) / scrollable) * 100);
            if (pct > maxDepth) maxDepth = Math.min(100, Math.max(0, pct));
        };
        const onScroll = () => {
            if (rafPending) return;
            rafPending = true;
            requestAnimationFrame(measureDepth);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        measureDepth();

        // 2) 섹션 도달 (IntersectionObserver)
        const observed: Element[] = Array.from(document.querySelectorAll('[data-track]'));
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        const name = (e.target as HTMLElement).dataset.track;
                        if (name) sections.add(name);
                    }
                }
            },
            { threshold: 0.4 } // 섹션의 40% 이상 보이면 "확인"으로 간주
        );
        observed.forEach((el) => io.observe(el));

        // 3) 클릭 추적 (전역 위임): 가입 CTA + 헤더 내비 버튼
        const onClick = (ev: MouseEvent) => {
            const target = ev.target as HTMLElement | null;
            const anchor = target?.closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href') || '';
            const section = anchor.closest('[data-track]') as HTMLElement | null;
            const loc = section?.dataset.track || 'unknown';

            // 가입 CTA 클릭 → 클릭이 일어난 섹션으로 위치 라벨링
            if (href.includes(CTA_URL_MATCH)) {
                ctas.add(loc);
                return;
            }
            // 헤더 내비 버튼 클릭 → 버튼 "라벨"로 기록 (기능소개/리뷰관리/광고관리/대시보드/요금제)
            if (loc === 'header' && href.startsWith('#') && href.length > 1) {
                const label = (anchor.textContent || '').replace(/\s+/g, '');
                if (label) navs.add(label);
            }
        };
        document.addEventListener('click', onClick, true);

        // 헤더에 "실제로 보이는" 내비 버튼 목록 (반응형: pc/mobile, / vs /a 자동 반영)
        const visibleHeaderButtons = (): string[] => {
            const set = new Set<string>();
            document.querySelectorAll('[data-track="header"] a[href^="#"]').forEach((a) => {
                const el = a as HTMLElement;
                const href = el.getAttribute('href') || '';
                if (href.length <= 1) return; // 로고(#) 제외
                if (el.getClientRects().length === 0) return; // CSS로 숨겨진 버튼 제외
                const label = (el.textContent || '').replace(/\s+/g, '');
                if (label) set.add(label);
            });
            return Array.from(set);
        };

        // 4) 가시성 누적 + 전송
        const flush = () => {
            if (sent) return;
            sent = true;
            if (document.visibilityState !== 'hidden') {
                activeMs += Date.now() - lastResume;
            }
            const payload = {
                sid: uuid(),
                page: pathname || window.location.pathname,
                variant: (pathname || window.location.pathname).startsWith('/a') ? 'a' : 'main',
                device,
                dur: Math.round((activeMs || Date.now() - start) / 1000),
                depth: maxDepth,
                sections: Array.from(sections),
                cta: Array.from(ctas),
                nav: Array.from(navs),
                navAvail: visibleHeaderButtons(),
                ref: document.referrer || '',
                ...utm,
            };
            try {
                const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=UTF-8' });
                navigator.sendBeacon('/api/track', blob);
            } catch {
                /* 전송 실패는 조용히 무시 */
            }
        };

        const onVisibility = () => {
            if (document.visibilityState === 'hidden') {
                activeMs += Date.now() - lastResume;
                flush(); // 모바일에서 가장 신뢰도 높은 종료 신호
            } else {
                lastResume = Date.now();
            }
        };
        document.addEventListener('visibilitychange', onVisibility);
        window.addEventListener('pagehide', flush);

        return () => {
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('click', onClick, true);
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('pagehide', flush);
            io.disconnect();
        };
    }, [pathname]);

    return null;
}
