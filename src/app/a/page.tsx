import Header from '@/components/Header';
import HeroA from '@/components/a/HeroA';
import SolutionOverview from '@/components/a/SolutionOverview';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Automation from '@/components/Automation';
import Dashboard from '@/components/Dashboard';
import PlatformIntegrations from '@/components/PlatformIntegrations';
import MiddleCTA from '@/components/MiddleCTA';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

export default function VariantA() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroA />
            <PlatformIntegrations />
            <SocialProof />
            <SolutionOverview />
            <Features badgeText="리뷰 관리 자동화" />
            <Automation badgeText="광고 관리 자동화" />
            <Dashboard />
            <MiddleCTA
                title={
                    <>
                        매출 올리는 진짜 배달앱 운영,
                        <br />
                        지금 바로 경험해 보세요.
                    </>
                }
                description={
                    <>
                        {/* 모바일: 짧고 강한 카피 */}
                        <span className="md:hidden">
                            리뷰·광고·매출 분석까지,
                            <br />
                            3분 연동으로 자동화하세요.
                        </span>
                        {/* 데스크탑 */}
                        <span className="hidden md:inline">
                            리뷰 답글부터 광고 운영, 매출 분석까지.
                            <br />
                            3분 연동으로 흩어진 배달앱 업무를 한 번에 자동화하세요.
                        </span>
                    </>
                }
            />
            <Testimonials />
            <Pricing />
            <FAQ />
            <StickyCTA />
            <Footer />
        </main>
    );
}
