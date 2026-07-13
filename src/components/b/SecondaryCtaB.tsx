'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import UTMLink from '@/components/UTMLink';

// 약한 2차 CTA — 전환 강요 없이 '둘러보기' 수준. 홍보/각인이 목표.
// (섹션 도달·CTA 클릭 집계는 전역 Analytics가 data-track 기반으로 처리한다.)
export default function SecondaryCtaB() {
    return (
        <section className="section-padding bg-white">
            <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
            >
                <h2 className="text-2xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4 break-keep">
                    세일즈랩이 궁금하다면
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-8 max-w-xl mx-auto break-keep">
                    월세 카드결제부터 매장 자금 관리까지. 사장님 매장에 뭐가 도움이 될지 편하게 둘러보세요.
                </p>
                <UTMLink href="https://www.saleslab.co.kr">
                    {(href) => (
                        <motion.a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary text-base md:text-lg w-full sm:w-auto"
                        >
                            세일즈랩 둘러보기
                            <ArrowRight size={20} />
                        </motion.a>
                    )}
                </UTMLink>
            </motion.div>
        </section>
    );
}
