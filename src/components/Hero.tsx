'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 lg:pt-52 lg:pb-44 px-5 overflow-hidden">
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
                        전국 10,000+ 사장님이 사용 중
                    </motion.div>

                    {/* 메인 카피 - 크게! */}
                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
                        리뷰 관리에 쓰던 시간,
                        <br />
                        <span className="gradient-text">매출 올리는 시간</span>으로
                        <br />
                        바꾸세요.
                    </h1>

                    {/* 서브 카피 */}
                    <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                        리뷰닥터가 답글부터 관리까지 자동으로.
                        <br />
                        남는 시간엔 <span className="text-gray-800 font-semibold">'매출 분석 대시보드'</span>로 진짜 문제를 해결하세요.
                    </p>

                    {/* CTA 버튼 */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <motion.a
                            href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary text-lg w-full sm:w-auto"
                        >
                            <Sparkles size={20} />
                            지금 무료 체험하기
                            <ArrowRight size={20} />
                        </motion.a>
                    </div>

                    {/* 신뢰 요소 */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            카드 등록 없이 시작
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            3분 연동
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            최다 플랫폼
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
