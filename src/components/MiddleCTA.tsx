'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import UTMLink from './UTMLink';

export default function MiddleCTA() {
    return (
        <section className="py-20 md:py-28 px-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 relative overflow-hidden">
            {/* 배경 은은한 빛 효과 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white mb-6 tracking-tight word-keep break-keep" style={{ lineHeight: 1.5 }}>
                        매출 올리는 진짜 리뷰 관리,<br className="hidden md:block" />
                        지금 바로 경험해 보세요.
                    </h2>
                    
                    <p className="text-blue-200 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                        복잡한 절차 없이 3분 만에 내 매장을 연동하고<br className="hidden md:block" />
                        자동화된 리뷰 관리의 편리함을 직접 느껴보세요.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <UTMLink href="https://www.saleslab.co.kr/auth/signin?&redirectUrl=/dashboard">
                            {(href) => (
                                <motion.a
                                    href={href}
                                    whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg md:text-xl shadow-xl transition-all w-full sm:w-auto hover:bg-blue-50"
                                >
                                    <Sparkles size={22} className="text-blue-500" />
                                    지금 무료 체험하기
                                    <ArrowRight size={22} />
                                </motion.a>
                            )}
                        </UTMLink>

                        {/* 요금 안심 카피 (Pricing Anxiety Relief) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
                            <div className="flex items-center gap-2 text-blue-100/90 text-sm md:text-base bg-white/5 py-1.5 px-5 rounded-full border border-white/10 backdrop-blur-sm shadow-sm">
                                <ShieldCheck size={18} className="text-green-400" />
                                <span>신용카드 등록 스킵!</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-100/90 text-sm md:text-base bg-white/5 py-1.5 px-5 rounded-full border border-white/10 backdrop-blur-sm shadow-sm">
                                <ShieldCheck size={18} className="text-green-400" />
                                <span>무료 체험 후 자동 결제 없음</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
