'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import UTMLink from './UTMLink';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: '기능 소개', href: '#features' },
        { label: '대시보드', href: '#dashboard' },
        { label: '요금제', href: '#pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100/50">
            {/* 리브랜딩 안내 띠 배너 */}
            <div className="bg-[#112D4E] text-white shadow-lg border-b border-white/10">
                <div className="max-w-6xl mx-auto px-5 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-base sm:text-lg lg:text-xl font-medium">
                    <span className="inline-flex items-center justify-center bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm">
                        <div className="relative flex items-center justify-center w-[120px] sm:w-[150px] h-[30px] sm:h-[36px] overflow-hidden">
                            <img
                                src="/service_logo/PNG (3).png"
                                alt="리뷰닥터"
                                className="absolute max-w-none w-[170px] sm:w-[200px]"
                            />
                        </div>
                    </span>
                    <span className="text-blue-50 tracking-wide drop-shadow-sm">
                        가 <span className="font-bold text-white">새로운 이름</span>으로 태어났어요! ✨
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* 로고 */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <Image
                            src="/service_logo/saleslab_logo.svg"
                            alt="세일즈랩"
                            width={200}
                            height={55}
                            className="h-10 md:h-11 w-auto object-contain"
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
                        <UTMLink href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard">
                            {(href) => (
                                <a
                                    href={href}
                                    className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
                                >
                                    <Sparkles size={16} />
                                    무료 시작하기
                                </a>
                            )}
                        </UTMLink>
                    </nav>

                    {/* 모바일 - 무료체험 버튼만 노출 */}
                    <UTMLink href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard">
                        {(href) => (
                            <a
                                href={href}
                                className="md:hidden inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-blue-600/20 active:scale-95 transition-transform"
                            >
                                <Sparkles size={14} />
                                무료체험하기
                            </a>
                        )}
                    </UTMLink>
                </div>
            </div>
        </header>
    );
}
