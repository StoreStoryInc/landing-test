import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
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
            <Dashboard />
            <Testimonials />
            <Pricing />
            <FAQ />
            <StickyCTA />
            <Footer />
        </main>
    );
}
