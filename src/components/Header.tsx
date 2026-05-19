'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';

import UTMLink from './UTMLink';

export default function Header() {
    const navItems = [
        { label: '기능 소개', href: '#features' },
        { label: '대시보드', href: '#dashboard' },
        { label: '요금제', href: '#pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100/50">
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
                        <UTMLink href="https://www.saleslab.co.kr/auth/signin?&redirectUrl=/dashboard">
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

                    {/* 모바일 - 요금제 바로가기 (데스크탑 nav 링크와 동일 스타일) */}
                    <a
                        href="#pricing"
                        className="md:hidden text-gray-500 hover:text-gray-900 active:text-gray-900 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 text-sm"
                    >
                        요금제
                    </a>
                </div>
            </div>
        </header>
    );
}
