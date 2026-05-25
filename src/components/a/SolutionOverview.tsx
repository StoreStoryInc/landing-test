'use client';

import { motion } from 'framer-motion';
import { MessageSquareText, Megaphone, BarChart3, ArrowRight } from 'lucide-react';

const categories = [
    {
        icon: MessageSquareText,
        badge: '리뷰 관리 자동화',
        title: 'AI가 리뷰 답글을 대신 씁니다',
        description: '문맥 맞춤 답글, 악성 리뷰 알림, 단골 만들기까지.',
        anchor: '#features',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        icon: Megaphone,
        badge: '광고 관리 자동화',
        title: '광고비 낭비, 스케줄로 잡으세요',
        description: '시간대별 광고 자동 운영, 정산 출금까지 자동으로.',
        anchor: '#automation',
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        icon: BarChart3,
        badge: '매출 분석 대시보드',
        title: '진짜 문제를 데이터로 찾으세요',
        description: '매출·수수료·광고·랭킹·리뷰까지 한 곳에서.',
        anchor: '#dashboard',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
        gradient: 'from-emerald-500 to-teal-600',
    },
];

export default function SolutionOverview() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        배달앱 관리, <br className="md:hidden" />
                        <span className="gradient-text">한 곳에서 다</span> 됩니다
                    </h2>
                    {/* 모바일: 짧은 카피 */}
                    <p className="md:hidden text-gray-500 text-base max-w-2xl mx-auto break-keep">
                        사장님의 배달앱 운영을 자동화하고,
                        <br />
                        매출 인사이트까지 제공합니다.
                    </p>
                    {/* 데스크탑 */}
                    <p className="hidden md:block text-gray-500 md:text-lg max-w-2xl mx-auto break-keep">
                        세일즈랩이 사장님의 배달앱 운영 전반을 자동화하고,
                        <br />
                        매출 인사이트까지 제공합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {categories.map((cat, index) => (
                        <motion.a
                            key={cat.badge}
                            href={cat.anchor}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className="card p-6 md:p-8 group cursor-pointer block"
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
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed break-keep mb-5">
                                {cat.description}
                            </p>
                            <span className={`inline-flex items-center gap-1 text-sm md:text-base font-semibold bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                                자세히 보기
                                <ArrowRight size={16} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
