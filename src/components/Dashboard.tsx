'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, BarChart3, Target, Trophy, Star, ClipboardList, ChevronLeft, ChevronRight } from 'lucide-react';

const dashboards = [
    {
        icon: Wallet,
        title: '통합 매출·정산',
        tagline: '연결된 모든 가게의 매출을 한 눈에',
        description:
            '배달의민족, 쿠팡이츠, 요기요 등 각 플랫폼에 따로 접속하지 않아도\n오늘 매출과 정산 예정금을 앱 하나로 통합 조회하세요.',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
        gradient: 'from-blue-500 to-indigo-600',
        dotColor: 'bg-blue-500',
        mockImages: ['/Dashboard/dashboard_sales_1.png', '/Dashboard/dashboard_sales_2.png'],
    },
    {
        icon: BarChart3,
        title: '수수료 분석',
        tagline: '복잡한 수수료 구조, 한 눈에 정리',
        description:
            '중개수수료, 배달비, 광고비 항목별 비율을 한눈에 보여줍니다.\n현재 수수료 구조 하에서의 BEP(손익분기점)까지 바로 확인하세요.',
        iconBg: 'bg-gradient-to-br from-orange-500 to-rose-500',
        bgGradient: 'from-orange-50 to-rose-50',
        gradient: 'from-orange-500 to-rose-500',
        dotColor: 'bg-orange-500',
        mockImages: ['/Dashboard/dashboard_fee.png'],
    },
    {
        icon: Target,
        title: '우가클 광고 분석',
        tagline: '광고비 대비 효율을 정확하게',
        description:
            '노출·클릭·주문 전환율 단위로 우가클 광고 성과를 분석합니다.\nCPC 조정이나 운영 시간대 변경 같은 구체적인 액션 아이템을 도출해드립니다.',
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
        gradient: 'from-violet-500 to-purple-600',
        dotColor: 'bg-violet-500',
        mockImages: ['/Dashboard/dashboard_ads_1.png', '/Dashboard/dashboard_ads_2.png'],
        platform: '배달의민족',
    },
    {
        icon: Trophy,
        title: '가게 노출 랭킹',
        tagline: '내 가게가 몇 위에 노출되는지 실시간 확인',
        description:
            '배달의민족·쿠팡이츠 검색 결과에서 내 가게가 몇 위에 노출되는지 확인할 수 있습니다.',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
        gradient: 'from-emerald-500 to-teal-600',
        dotColor: 'bg-emerald-500',
        mockImages: ['/Dashboard/dashboard_ranking_1.png', '/Dashboard/dashboard_ranking_2.png'],
        isPro: true,
    },
    {
        icon: Star,
        title: '리뷰 통계',
        tagline: '리뷰 데이터로 메뉴를 개선하세요',
        description:
            '기간별 리뷰 수, 부정 리뷰 비율 추이를 한눈에 확인합니다.\n고객이 자주 언급하는 키워드를 분석해 메뉴 개선과 서비스 보완에 활용하세요.',
        iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
        bgGradient: 'from-yellow-50 to-orange-50',
        gradient: 'from-yellow-400 to-orange-500',
        dotColor: 'bg-yellow-400',
        mockImages: ['/Dashboard/dashboard_review_1.png', '/Dashboard/dashboard_review_2.png'],
    },
    {
        icon: ClipboardList,
        title: '주문 내역',
        tagline: '모든 플랫폼 주문을 한 곳에서',
        description:
            '배달 플랫폼별 주문내역을 통합 조회합니다.\n날짜·가게·플랫폼 기준으로 필터링해 각 앱에 따로 접속하지 않아도 됩니다.',
        iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
        bgGradient: 'from-teal-50 to-cyan-50',
        gradient: 'from-teal-500 to-cyan-600',
        dotColor: 'bg-teal-500',
        mockImages: ['/Dashboard/dashboard_orders_1.png', '/Dashboard/dashboard_orders_2.png'],
    },
];

const INTERVAL = 4000;

export default function Dashboard() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((index: number, dir?: number, manual = false) => {
        if (manual) setPaused(true);
        setDirection(dir ?? (index > current ? 1 : -1));
        setCurrent(index);
    }, [current]);

    const next = useCallback((manual = false) => {
        const nextIndex = (current + 1) % dashboards.length;
        goTo(nextIndex, 1, manual);
    }, [current, goTo]);

    const prev = useCallback(() => {
        const prevIndex = (current - 1 + dashboards.length) % dashboards.length;
        goTo(prevIndex, -1, true);
    }, [current, goTo]);

    useEffect(() => {
        if (paused) return;
        timerRef.current = setInterval(() => next(false), INTERVAL);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [next, paused]);

    const item = dashboards[current];

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
    };

    return (
        <section id="dashboard" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-50 to-transparent rounded-full blur-3xl opacity-60" />

            <div className="relative max-w-6xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 md:mb-16"
                >
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold mb-8 shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform duration-300 cursor-default">
                        <span className="text-2xl">🎁</span>
                        가입만 하면 평생 무료!
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                        <span className="gradient-text">매출 성장 대시보드</span>로
                        <br />
                        진짜 문제를 해결하세요
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed break-keep">
                        매출·정산·수수료·광고·랭킹·리뷰까지,<br />
                        가게 운영에 필요한 모든 인사이트를 무료로 드려요.
                    </p>
                </motion.div>

                {/* 캐러셀 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card overflow-hidden relative"
                >
                    {/* 데스크탑 좌우 화살표 */}
                    <button
                        onClick={prev}
                        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center text-gray-500 hover:text-gray-900 hover:shadow-lg transition-all duration-200"
                        aria-label="이전"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => next(true)}
                        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center text-gray-500 hover:text-gray-900 hover:shadow-lg transition-all duration-200"
                        aria-label="다음"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* 슬라이드 */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.08}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -50) next(true);
                                    else if (info.offset.x > 50) prev();
                                }}
                                className="flex flex-col md:flex-row cursor-grab active:cursor-grabbing"
                            >
                                {/* 텍스트 영역 */}
                                <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                                    {/* 배지 */}
                                    <div className="flex items-center gap-2 mb-4">
                                        {item.isPro ? (
                                            <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-blue-600 text-white">Pro</span>
                                        ) : (
                                            <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700">무료</span>
                                        )}
                                        {item.platform && (
                                            <span className="text-sm font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-600">{item.platform}</span>
                                        )}
                                    </div>

                                    {/* 아이콘 + 제목 */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-11 h-11 md:w-14 md:h-14 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
                                            <item.icon size={22} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className={`font-semibold text-base md:text-xl mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                        {item.tagline}
                                    </p>
                                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed whitespace-pre-line break-keep">
                                        {item.description}
                                    </p>
                                </div>

                                {/* 이미지 영역 */}
                                <div className={`w-full md:w-[350px] lg:w-[420px] h-[360px] sm:h-[420px] md:h-auto md:min-h-[460px] flex-shrink-0 bg-gradient-to-br ${item.bgGradient} relative flex items-center justify-center overflow-hidden`}>
                                    {item.mockImages?.length === 2 ? (
                                        <div className="relative w-full h-full flex items-center justify-center group">
                                            {/* 뒤쪽 이미지 (우측 상단) */}
                                            <motion.div 
                                                className="absolute w-[50%] sm:w-[45%] md:w-[55%] right-[8%] md:right-[10%] top-[12%] md:top-[15%] drop-shadow-xl rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-gray-900/5 z-10"
                                                initial={{ opacity: 0, x: 20, y: -20 }}
                                                animate={{ opacity: 1, x: 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                                            >
                                                <div className="group-hover:-translate-y-2 group-hover:-translate-x-1 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                                                    <Image src={item.mockImages[1]} alt={item.title} width={300} height={600} priority className="w-full h-auto" />
                                                </div>
                                            </motion.div>
                                            
                                            {/* 앞쪽 이미지 (좌측 하단) */}
                                            <motion.div 
                                                className="absolute w-[55%] sm:w-[50%] md:w-[60%] left-[8%] md:left-[10%] bottom-[12%] md:bottom-[15%] drop-shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-gray-900/10 z-20"
                                                initial={{ opacity: 0, x: -20, y: 20 }}
                                                animate={{ opacity: 1, x: 0, y: 0 }}
                                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                            >
                                                <div className="group-hover:-translate-y-3 group-hover:translate-x-1 group-hover:scale-[1.03] transition-all duration-500 ease-out">
                                                    <Image src={item.mockImages[0]} alt={item.title} width={300} height={600} priority className="w-full h-auto" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    ) : (
                                        <motion.div 
                                            className="w-[55%] sm:w-[45%] md:w-[60%] drop-shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-gray-900/10 my-8"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                            whileHover={{ y: -10 }}
                                        >
                                            <Image src={item.mockImages?.[0] || ''} alt={item.title} width={300} height={600} priority className="w-full h-auto block" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 하단 네비게이션 */}
                    <div className="flex items-center justify-center gap-3 py-4 border-t border-gray-100">
                        {/* 모바일 화살표 */}
                        <button
                            onClick={prev}
                            className="md:hidden w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                            aria-label="이전"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {/* 닷 */}
                        <div className="flex items-center gap-2">
                            {dashboards.map((d, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i, undefined, true)}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === current
                                            ? `w-6 h-2.5 ${d.dotColor}`
                                            : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                                    }`}
                                    aria-label={dashboards[i].title}
                                />
                            ))}
                        </div>

                        {/* 모바일 화살표 */}
                        <button
                            onClick={() => next(true)}
                            className="md:hidden w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                            aria-label="다음"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </motion.div>

                {/* Pro 안내 */}
                <p className="text-sm text-gray-400 text-right mt-3">
                    *랭킹 정보는 프로 요금제에서만 제공됩니다
                </p>
            </div>
        </section>
    );
}
