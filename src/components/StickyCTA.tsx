'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import UTMLink from './UTMLink';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 히어로 섹션 높이(약 600px)를 벗어나면 표시
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* 메인 CTA 섹션 */}
            <section id="cta" className="relative section-padding overflow-hidden">
                {/* 배경 그라데이션 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

                {/* 빛나는 효과 */}
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-3xl" />

                <div className="relative max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[28px] md:text-[38px] lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-5">
                            지금 바로 시작하세요
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
                            3분 만에 매장 연결하고, 바로 효과를 경험해보세요.
                        </p>

                        {/* 혜택 리스트 */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
                            {['월 300건 답글 생성 무료', '대시보드 평생 무료', '카드 등록 없이 시작'].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2 text-white/90">
                                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                        <Check size={12} className="text-white" />
                                    </div>
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <UTMLink href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard">
                            {(href) => (
                                <motion.a
                                    href={href}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold text-lg py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl shadow-black/20"
                                >
                                    <Sparkles size={20} />
                                    지금 무료체험하기
                                    <ArrowRight size={20} />
                                </motion.a>
                            )}
                        </UTMLink>

                        <p className="mt-6 text-blue-200 text-sm">
                            카드등록 없이 무료체험해보세요!<br />No 약정, No 자동결제
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 스티키 CTA (모바일) - 스크롤 시 등장 */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="sticky-cta"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                            willChange: 'transform',
                        }}
                        className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pt-3 pb-2 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]"
                    >
                        <UTMLink href="https://www.reviewdoctor.kr/auth/signin?&redirectUrl=/dashboard">
                            {(href) => (
                                <a
                                    href={href}
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 active:from-blue-700 active:to-blue-800 transition-all text-[17px]"
                                >
                                    <Sparkles size={18} />
                                    무료로 시작하기
                                    <ArrowRight size={18} />
                                </a>
                            )}
                        </UTMLink>
                        <p className="text-center text-[11px] text-gray-400 mt-2 font-medium pb-1">
                            카드등록 없이 무료체험 해보세요! No 약정 No 자동결제
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
