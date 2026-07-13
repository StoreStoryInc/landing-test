'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard } from 'lucide-react';

import UTMLink from '@/components/UTMLink';

const SIGNIN_URL = 'https://www.saleslab.co.kr/auth/signin?&redirectUrl=/dashboard';

// ① Hero — 월세 훅 + 7월 0% 오퍼를 첫 화면에서 완결(결정 A: ② 흡수).
// 세일즈랩 언급 없음. CTA 목적지는 기존 로그인(결정: 재사용).
export default function HeroB() {
    return (
        <section className="relative pt-28 pb-20 md:pt-44 md:pb-36 lg:pt-52 lg:pb-44 px-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* 배지 — 7월 한정 오퍼(조건 명시, 표시광고법) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="badge mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                        </span>
                        7월 한정 · 카드 수수료 0%
                    </motion.div>

                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
                        이번 달 월세,
                        <br />
                        <span className="gradient-text">카드로</span> 내세요.
                    </h1>

                    {/* 서브 — 모바일 */}
                    <p className="md:hidden text-base text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed break-keep">
                        목돈 나가는 월세, 이제 카드로.
                        <br />
                        <span className="font-bold text-gray-900">7월 한 달은 카드 수수료도 0%</span>입니다.
                        <br />
                        <span className="text-sm text-gray-400">(2026년 7월 31일까지)</span>
                    </p>
                    {/* 서브 — 데스크탑 */}
                    <p className="hidden md:block text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed break-keep">
                        목돈 나가는 월세, 이제 카드로 내세요.{' '}
                        <span className="font-bold text-gray-900">7월 한 달은 카드 수수료도 0%</span>입니다.
                        <br />
                        <span className="text-base text-gray-400">(2026년 7월 31일까지)</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <UTMLink href={SIGNIN_URL}>
                            {(href) => (
                                <motion.a
                                    href={href}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary text-lg w-full sm:w-auto"
                                >
                                    <CreditCard size={20} />
                                    월세 카드로 결제하기
                                    <ArrowRight size={20} />
                                </motion.a>
                            )}
                        </UTMLink>
                    </div>

                    {/* 신뢰 요소 — '완료'를 과약속하지 않음(낚임 방어) */}
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-10 mt-10 md:mt-12 text-sm md:text-lg font-medium text-gray-500">
                        <TrustItem>카드만 있으면 시작</TrustItem>
                        <TrustItem>7월 31일까지 수수료 0%</TrustItem>
                        <TrustItem>3분이면 신청</TrustItem>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TrustItem({ children }: { children: ReactNode }) {
    return (
        <span className="flex items-center gap-2 md:gap-2.5">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
            {children}
        </span>
    );
}
