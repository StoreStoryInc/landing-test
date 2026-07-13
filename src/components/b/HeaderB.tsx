'use client';

import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';

import UTMLink from '@/components/UTMLink';

const SIGNIN_URL = 'https://www.saleslab.co.kr/auth/signin?&redirectUrl=/dashboard';

// ① 영역 헤더: 세일즈랩 브랜드 노출 없이 캠페인 라벨만.
// (브랜드는 ③ 브릿지에서 처음 등장시킨다.)
export default function HeaderB() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100/50">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-16 md:h-18">
                    <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base md:text-lg">
                        <CalendarClock size={18} className="text-blue-600" />
                        월세 카드결제
                        <span className="hidden sm:inline text-blue-600 font-semibold">· 7월 31일까지 수수료 0%</span>
                    </span>

                    <UTMLink href={SIGNIN_URL}>
                        {(href) => (
                            <motion.a
                                href={href}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-semibold text-sm md:text-base shadow-md shadow-blue-600/20 hover:from-blue-700 hover:to-blue-800 transition-all"
                            >
                                카드로 결제하기
                            </motion.a>
                        )}
                    </UTMLink>
                </div>
            </div>
        </header>
    );
}
