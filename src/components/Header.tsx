'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: '기능 소개', href: '#features' },
        { label: '대시보드', href: '#dashboard' },
        { label: '고객 후기', href: '#testimonials' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100/50">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* 로고 */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <Image
                            src="/service_logo/PNG (3).png"
                            alt="리뷰닥터"
                            width={1260}
                            height={360}
                            className="h-52 md:h-64 w-auto object-contain"
                        />
                    </a>

                    {/* 데스크탑 내비게이션 */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard"
                            className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
                        >
                            <Sparkles size={16} />
                            무료 시작하기
                        </a>
                    </nav>

                    {/* 모바일 - 무료체험 버튼만 노출 */}
                    <a
                        href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard"
                        className="md:hidden inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-blue-600/20 active:scale-95 transition-transform"
                    >
                        <Sparkles size={14} />
                        무료체험하기
                    </a>
                </div>
            </div>
        </header>
    );
}
