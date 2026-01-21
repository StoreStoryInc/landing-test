'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
    src: string;
    alt: string;
}

export default function SocialProof() {
    const [logos, setLogos] = useState<Logo[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        fetch('/api/logos')
            .then(res => res.json())
            .then(data => setLogos(data))
            .catch(() => setLogos([]));
    }, []);

    useEffect(() => {
        if (containerRef.current && logos.length > 0) {
            // 한 세트의 로고 너비 계산
            const singleSetWidth = containerRef.current.scrollWidth / 2;
            setContentWidth(singleSetWidth);
        }
    }, [logos]);

    // 로고가 없으면 섹션 숨김
    if (logos.length === 0) {
        return null;
    }

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* 좌우 페이드 */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-5 mb-10 md:mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* 크게 강조된 문구 */}
                    <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-extrabold text-gray-900 leading-tight tracking-tight">
                        전국 <span className="gradient-text">10,000+</span> 사장님이
                        <br className="md:hidden" />
                        <span className="hidden md:inline"> </span>매일 사용합니다
                    </h2>
                </motion.div>
            </div>

            {/* 티커 컨테이너 */}
            <div className="overflow-hidden">
                <motion.div
                    ref={containerRef}
                    className="flex"
                    animate={contentWidth > 0 ? {
                        x: [0, -contentWidth],
                    } : {}}
                    transition={{
                        x: {
                            duration: 80,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        },
                    }}
                >
                    {/* 로고 2번 반복 */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 -mx-[130px] md:-mx-20"
                        >
                            <div className="relative w-[460px] md:w-[28rem] h-[134px] md:h-36">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
