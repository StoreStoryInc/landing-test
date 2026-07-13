'use client';

import { motion } from 'framer-motion';
import { MessageSquareText, Megaphone, BarChart3 } from 'lucide-react';

// 세일즈랩 요약 각인 — 리뷰·광고·BI 세 축을 3카드로 한눈에.
// (/a SolutionOverview 포크: /b엔 상세 섹션이 없으므로 '자세히 보기' 링크 제거 → 정보형 카드)
const categories = [
    {
        icon: MessageSquareText,
        badge: '리뷰 관리 자동화',
        title: 'AI가 리뷰 답글을 대신 씁니다',
        description: '문맥 맞춤 답글, 악성 리뷰 알림, 단골 만들기까지.',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Megaphone,
        badge: '광고 관리 자동화',
        title: '광고비 낭비, 스케줄로 잡으세요',
        description: '시간대별 광고 자동 운영, 정산 출금까지 자동으로.',
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
    },
    {
        icon: BarChart3,
        badge: '매출 분석 대시보드',
        title: '진짜 문제를 데이터로 찾으세요',
        description: '매출·수수료·광고·랭킹·리뷰까지 한 곳에서.',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
    },
];

export default function SolutionOverviewB() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="badge mb-5">세일즈랩은</span>
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        배달앱 관리, <br className="md:hidden" />
                        <span className="gradient-text">한 곳에서 다</span> 됩니다
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto break-keep">
                        세일즈랩이 사장님의 배달앱 운영 전반을 자동화하고,
                        <br className="hidden md:block" />
                        매출 인사이트까지 제공합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.badge}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card p-6 md:p-8"
                        >
                            <div className={`w-14 h-14 md:w-16 md:h-16 ${cat.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-5`}>
                                <cat.icon size={28} className="text-white" />
                            </div>
                            <span className={`inline-block text-sm md:text-base font-bold px-3 py-1 md:py-1.5 rounded-full bg-gradient-to-r ${cat.bgGradient} text-gray-700 mb-3`}>
                                {cat.badge}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug break-keep">
                                {cat.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed break-keep">
                                {cat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
