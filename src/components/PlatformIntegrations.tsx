'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const platforms = [
    { name: '배달의민족', logo: '/platform_logos/baemin-icon.png' },
    { name: '쿠팡이츠', logo: '/platform_logos/coupangeats-icon.png' },
    { name: '요기요', logo: '/platform_logos/yogiyo-icon.png' },
    { name: '땡겨요', logo: '/platform_logos/ddangyo-icon.png' },
    { name: '네이버플레이스', logo: '/platform_logos/naver-icon.png' },
    { name: '먹깨비', logo: '/platform_logos/mukkaebi-icon.png' },
    { name: '대구로', logo: '/platform_logos/daeguro-icon.png' },
];

const posPlatforms = [
    { name: 'OKPOS', logo: '/platform_logos/okpos-icon.png' },
    { name: 'UNION POS', logo: '/platform_logos/unionpos-icon.png' },
];

type Platform = { name: string; logo: string };

function LogoIcon({ platform, size = 'default' }: { platform: Platform; size?: 'default' | 'large' }) {
    const sizeClass =
        size === 'large'
            ? 'w-20 h-20 md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]'
            : 'w-16 h-16 md:w-[96px] md:h-[96px] lg:w-[112px] lg:h-[112px]';
    return (
        <div className={`relative ${sizeClass} flex-shrink-0`}>
            <Image
                src={platform.logo}
                alt={platform.name}
                width={160}
                height={160}
                className="w-full h-full object-contain"
            />
        </div>
    );
}

export default function PlatformIntegrations() {
    return (
        <section id="integrations" className="py-16 md:py-24 px-5 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-2xl md:text-[34px] lg:text-[40px] font-extrabold text-gray-900 leading-tight tracking-tight break-keep mb-3">
                        한 번 연결하면, <br className="md:hidden" />
                        <span className="gradient-text">모든 채널이 한곳에</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
                        7개 플랫폼에 POS 매출 연동까지,<br className="md:hidden" />
                        흩어진 데이터를 세일즈랩에서 한눈에.
                    </p>
                </motion.div>

                {/* 7개 플랫폼 */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 md:mb-14"
                >
                    {/* 모바일: 4 + 3 */}
                    <div className="md:hidden flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center gap-5">
                            {platforms.slice(0, 4).map((p) => (
                                <LogoIcon key={p.name} platform={p} />
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            {platforms.slice(4).map((p) => (
                                <LogoIcon key={p.name} platform={p} />
                            ))}
                        </div>
                    </div>
                    {/* 데스크탑: 한 줄 */}
                    <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-10">
                        {platforms.map((p) => (
                            <LogoIcon key={p.name} platform={p} />
                        ))}
                    </div>
                </motion.div>

                {/* 구분선 */}
                <div className="flex items-center gap-4 max-w-md mx-auto mb-10 md:mb-14">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="inline-flex items-center text-xs md:text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        + POS 매출 연동 · 가게 수 미포함 · 무료
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* POS */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
                >
                    {posPlatforms.map((p) => (
                        <LogoIcon key={p.name} platform={p} size="large" />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
