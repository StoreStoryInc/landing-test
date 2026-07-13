import type { Metadata } from 'next';

import HeaderB from '@/components/b/HeaderB';
import HeroB from '@/components/b/HeroB';
import BenefitsB from '@/components/b/BenefitsB';
import SolutionOverviewB from '@/components/b/SolutionOverviewB';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import SecondaryCtaB from '@/components/b/SecondaryCtaB';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: '월세 카드결제 | 7월 한 달 카드 수수료 0% 이벤트',
    description:
        '이번 달 월세, 카드로 내세요. 7월 한 달 카드 수수료 0%. 정산 엇박자·할부·카드 혜택까지 — 매장 자금 흐름을 한눈에.',
    // 광고 전용 유입 랜딩 — 검색 노출 제외(훅-only 페이지의 SEO 혼선 방지)
    robots: { index: false, follow: false },
    openGraph: {
        title: '월세 카드결제 | 7월 카드 수수료 0%',
        description: '이번 달 월세, 카드로. 7월 한정 카드 수수료 0%.',
        type: 'website',
        locale: 'ko_KR',
    },
};

export default function VariantB() {
    return (
        <main className="min-h-screen">
            {/* 섹션 도달·CTA·체류·스크롤은 전역 Analytics가 data-track으로 집계 (variant='b') */}
            <div data-track="header"><HeaderB /></div>
            <div data-track="hero"><HeroB /></div>
            <div data-track="benefits"><BenefitsB /></div>
            <div data-track="solution"><SolutionOverviewB /></div>
            <div data-track="social-proof"><SocialProof /></div>
            <div data-track="pricing"><Pricing showCardFeeEvent /></div>
            <div data-track="bottom-cta"><SecondaryCtaB /></div>
            <div data-track="footer"><Footer /></div>
        </main>
    );
}
