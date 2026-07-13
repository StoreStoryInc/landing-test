import Header from '@/components/Header';
import Hero from '@/components/Hero';
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
import CardPayment from '@/components/CardPayment';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <div data-track="header"><Header /></div>
            <div data-track="hero"><Hero /></div>
            <div data-track="social-proof"><SocialProof /></div>
            <div data-track="features"><Features /></div>
            <div data-track="automation"><Automation /></div>
            <div data-track="dashboard"><Dashboard /></div>
            <div data-track="card-payment"><CardPayment /></div>
            <div data-track="platforms"><PlatformIntegrations /></div>
            <div data-track="middle-cta"><MiddleCTA /></div>
            <div data-track="testimonials"><Testimonials /></div>
            <div data-track="pricing"><Pricing /></div>
            <div data-track="faq"><FAQ /></div>
            <div data-track="bottom-cta"><StickyCTA /></div>
            <div data-track="footer"><Footer /></div>
        </main>
    );
}
