'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import UTMLink from '../UTMLink';

export default function HeroA() {
    return (
        <section className="relative pt-28 pb-20 md:pt-44 md:pb-36 lg:pt-52 lg:pb-44 px-5 overflow-hidden">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* 배지 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="badge mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        배달앱 통합 운영 솔루션
                    </motion.div>

                    {/* 메인 카피 */}
                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
                        내 가게 운영, 이제
                        <br />
                        <span className="gradient-text">세일즈랩 하나</span>로
                        <br />
                        끝내세요.
                    </h1>

                    {/* 서브 카피 - 모바일 */}
                    <p className="md:hidden text-base text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed break-keep">
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 align-middle" />
                            리뷰 관리 자동화
                        </span>
                        ,
                        <br />
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500 mr-1.5 align-middle" />
                            광고 관리 자동화
                        </span>
                        ,
                        <br />
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle" />
                            매출 분석 대시보드
                        </span>
                        까지.
                        <br />
                        <br />
                        흩어진 배달앱 업무를 한 번에 관리하세요.
                    </p>
                    {/* 서브 카피 - 데스크탑 */}
                    <p className="hidden md:block text-xl md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed break-keep">
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2 align-middle" />
                            리뷰 관리 자동화
                        </span>
                        ,{' '}
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-2 h-2 rounded-full bg-violet-500 mr-2 align-middle" />
                            광고 관리 자동화
                        </span>
                        ,{' '}
                        <span className="font-bold text-gray-900 whitespace-nowrap">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 align-middle" />
                            매출 분석 대시보드
                        </span>
                        까지.
                        <br />
                        흩어진 배달앱 업무를 한 번에 관리하세요.
                    </p>

                    {/* CTA 버튼 */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <UTMLink href="https://www.saleslab.co.kr/auth/signin?&redirectUrl=/dashboard">
                            {(href) => (
                                <motion.a
                                    href={href}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary text-lg w-full sm:w-auto"
                                >
                                    <Sparkles size={20} />
                                    지금 무료 체험하기
                                    <ArrowRight size={20} />
                                </motion.a>
                            )}
                        </UTMLink>
                    </div>

                    {/* 신뢰 요소 */}
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-10 mt-10 md:mt-12 text-sm md:text-lg font-medium text-gray-500">
                        <span className="flex items-center gap-2 md:gap-2.5">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            전국 13,000+ 사장님 사용 중
                        </span>
                        <span className="flex items-center gap-2 md:gap-2.5">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            카드 등록 없이 시작
                        </span>
                        <span className="flex items-center gap-2 md:gap-2.5">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            3분 연동
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
