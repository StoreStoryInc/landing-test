'use client';

import { motion } from 'framer-motion';
import { Wallet, CalendarClock, Gift } from 'lucide-react';

// 세일즈랩 카드결제 기능 소개 (메인 / 광고 variant 공용).
// /b의 "왜 카드로?" 3카드를 차용하되, 광고 훅이 아니라 '기능' 톤으로 제시한다.
const benefits = [
    {
        icon: Wallet,
        badge: '현금흐름',
        title: '정산은 아직인데, 월세 날짜가 먼저 올 때',
        description:
            '배달앱 정산은 며칠씩 밀리는데 월세 납부일은 기다려주지 않죠. 카드로 먼저 내면, 정산이 들어올 때까지 현금 흐름이 끊기지 않습니다.',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
        icon: CalendarClock,
        badge: '할부',
        title: '목돈을 한 번에 내기 부담스러울 때',
        description: '매달 큰돈 나가는 월세, 카드 할부로 나눠 내면 이번 달 부담이 훨씬 가벼워집니다.',
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
    },
    {
        icon: Gift,
        badge: '카드 혜택',
        title: '어차피 나갈 돈, 혜택은 챙기고 싶을 때',
        description: '매달 고정으로 나가는 가장 큰 지출. 카드로 내면 포인트·실적·할인 혜택까지 함께 따라옵니다.',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
    },
];

export default function CardPayment() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="badge mb-5">월세 카드결제</span>
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        <span className="gradient-text">월세 카드결제</span>도, <br className="md:hidden" />
                        세일즈랩에서 하세요
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto break-keep">
                        매달 나가는 가장 큰 고정비, 카드로 바꾸면 이런 게 달라집니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {benefits.map((b, index) => (
                        <motion.div
                            key={b.badge}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card p-6 md:p-8"
                        >
                            <div
                                className={`w-14 h-14 md:w-16 md:h-16 ${b.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-5`}
                            >
                                <b.icon size={28} className="text-white" />
                            </div>
                            <span
                                className={`inline-block text-sm md:text-base font-bold px-3 py-1 md:py-1.5 rounded-full bg-gradient-to-r ${b.bgGradient} text-gray-700 mb-3`}
                            >
                                {b.badge}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug break-keep">
                                {b.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed break-keep">
                                {b.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
