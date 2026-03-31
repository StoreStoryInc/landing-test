import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Automation from '@/components/Automation';
import Dashboard from '@/components/Dashboard';
import MiddleCTA from '@/components/MiddleCTA';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <SocialProof />
            <Features />
            <Automation />
            <Dashboard />
            <MiddleCTA />
            <Testimonials />
            <Pricing />
            <FAQ />
            <StickyCTA />
            <Footer />
        </main>
    );
}
