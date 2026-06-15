'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const platforms = [
    { name: '배달의민족', logo: '/platform_logos/baemin-icon.svg' },
    { name: '쿠팡이츠', logo: '/platform_logos/coupangeats-icon.svg' },
    { name: '요기요', logo: '/platform_logos/yogiyo-icon.svg' },
    { name: '땡겨요', logo: '/platform_logos/ddangyo-icon.svg' },
    { name: '네이버플레이스', logo: '/platform_logos/naver-icon.svg' },
    { name: '먹깨비', logo: '/platform_logos/mukkaebi-icon.svg' },
    { name: '대구로', logo: '/platform_logos/daeguro-icon.svg' },
];

const posPlatforms = [
    { name: 'OKPOS', logo: '/platform_logos/okpos-icon.svg' },
    { name: 'UNION POS', logo: '/platform_logos/unionpos-icon.svg' },
    { name: 'Easy POS', logo: '/platform_logos/easypos-icon.svg', compact: true },
];

// 여신금융협회(카드입금) — 정산 연동. 워드마크 원본(180×44)이라 가로형으로 렌더
const settlementPlatforms = [
    { name: '여신금융협회', logo: '/platform_logos/crefia-black.svg' },
];

// 전체 아이콘 개수 — 파도(웨이브) 주기 계산에 사용 (모든 아이콘이 동일 주기를 공유해야 동기화 유지)
const TOTAL_ICONS = platforms.length + posPlatforms.length + settlementPlatforms.length;
const WAVE_STEP = 0.16; // 아이콘 사이 시차 (작을수록 파도가 빠르게 흐름)
const WAVE_PULSE = 0.55; // 한 아이콘이 커졌다 작아지는 시간
const WAVE_PAUSE = 1.6; // 파도가 다 지나간 뒤 쉬는 시간
// 첫 iteration의 delay만 인덱스별로 다르게 주고, 이후 반복 간격(repeatDelay)은 모두 동일하게 두어 시차를 유지
const WAVE_REPEAT_DELAY = (TOTAL_ICONS - 1) * WAVE_STEP + WAVE_PAUSE;

type Platform = { name: string; logo: string; compact?: boolean };

function LogoIcon({
    platform,
    size = 'default',
    index = 0,
}: {
    platform: Platform;
    size?: 'default' | 'large' | 'wordmark';
    index?: number;
}) {
    const prefersReducedMotion = useReducedMotion();
    const sizeClass =
        size === 'large'
            ? 'w-20 h-20 md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]'
            : size === 'wordmark'
            ? 'w-[162px] h-[40px] md:w-[186px] md:h-[45px] lg:w-[198px] lg:h-[48px]'
            : 'w-16 h-16 md:w-[96px] md:h-[96px] lg:w-[112px] lg:h-[112px]';
    return (
        <motion.div
            className={`relative ${sizeClass} flex-shrink-0`}
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.12, 1] }}
            transition={{
                duration: WAVE_PULSE,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: WAVE_REPEAT_DELAY,
                delay: index * WAVE_STEP,
            }}
        >
            <Image
                src={platform.logo}
                alt={platform.name}
                width={160}
                height={160}
                unoptimized
                className="w-full h-full object-contain"
            />
        </motion.div>
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
                        7개 플랫폼에 홀 매출·정산 연동까지,<br className="md:hidden" />
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
                            {platforms.slice(0, 4).map((p, i) => (
                                <LogoIcon key={p.name} platform={p} index={i} />
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            {platforms.slice(4).map((p, i) => (
                                <LogoIcon key={p.name} platform={p} index={i + 4} />
                            ))}
                        </div>
                    </div>
                    {/* 데스크탑: 한 줄 */}
                    <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-10">
                        {platforms.map((p, i) => (
                            <LogoIcon key={p.name} platform={p} index={i} />
                        ))}
                    </div>
                </motion.div>

                {/* 구분선 */}
                <div className="flex items-center gap-4 max-w-md mx-auto mb-10 md:mb-14">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="inline-flex items-center text-xs md:text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        + 홀 매출·정산 연동 · 가게 수 미포함 · 무료
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
                    {posPlatforms.map((p, i) => (
                        <LogoIcon
                            key={p.name}
                            platform={p}
                            size={p.compact ? 'default' : 'large'}
                            index={platforms.length + i}
                        />
                    ))}
                </motion.div>

                {/* 여신금융협회 (카드입금·정산) — POS 아래 별도 줄. 워드마크 원본 해상도가 낮아 크게 키우지 않음 */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                    className="flex items-center justify-center mt-6 md:mt-8"
                >
                    {settlementPlatforms.map((p, i) => (
                        <LogoIcon
                            key={p.name}
                            platform={p}
                            size="wordmark"
                            index={platforms.length + posPlatforms.length + i}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
