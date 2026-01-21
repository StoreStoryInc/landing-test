'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquareText, Bell, Users, Zap } from 'lucide-react';

const features = [
    {
        icon: MessageSquareText,
        badge: 'AI 자동화',
        title: "'감사합니다' 복붙은 끝!",
        subtitle: 'AI가 문맥에 맞는 답글을 씁니다.',
        description: '단순 매크로가 아닙니다. 고객 리뷰 내용(맛, 배달 상태 등)을 인식하여 자연스럽게 작성합니다.',
        gradient: 'from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        stat: { value: '98%', label: '만족도' },
        image: '/Features/feature1.webp',
    },
    {
        icon: Bell,
        badge: '실시간 알림',
        title: '악성 리뷰? 골든타임을 잡으세요.',
        subtitle: '카카오톡 알림톡으로 즉시 알려드려요.',
        description: '별점 3점 이하 리뷰 등록 시 카카오톡 알림톡으로 즉시 발송. 골든타임 안에 대응하세요.',
        gradient: 'from-orange-500 to-rose-500',
        bgGradient: 'from-orange-50 to-rose-50',
        iconBg: 'bg-gradient-to-br from-orange-500 to-rose-500',
        stat: { value: '1분', label: '평균 대응' },
        image: '/Features/feature2.webp',
    },
    {
        icon: Users,
        badge: '단골 만들기',
        title: "'잊은 고객'을 '단골'로 만듭니다.",
        subtitle: '재주문 타이밍 맞춤 답글',
        description: '각기 다른 고객들의 식사시간을 추정해 답글을 달아 재주문을 유도합니다.',
        gradient: 'from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        stat: { value: '+32%', label: '재주문율' },
        image: '/Features/feature3.webp',
    },
];

export default function Features() {
    return (
        <section id="features" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform duration-300 cursor-default">
                        <Zap size={20} className="text-yellow-300 fill-yellow-300" />
                        핵심 기능
                    </div>
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        사장님의 <span className="gradient-text">시간</span>을 되찾아드려요
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        리뷰닥터가 반복 업무를 대신하고, 악성 리뷰에 빠르게 대응하고, 단골을 만들어드립니다.
                    </p>
                </motion.div>

                {/* 기능 카드 */}
                <div className="flex flex-col gap-5 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card p-0 overflow-hidden" // 패딩 제거하고 overflow-hidden 추가
                        >
                            <div className="p-6 md:p-8 lg:p-10 pb-0 md:pb-0 lg:pb-0"> {/* 상단 텍스트 영역 패딩 */}
                                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-8">
                                    {/* 아이콘 */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-14 h-14 md:w-16 md:h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <feature.icon size={28} className="text-white" />
                                        </div>
                                    </div>

                                    {/* 콘텐츠 */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`text-base font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.bgGradient} text-gray-700`}>
                                                {feature.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-blue-600 font-semibold mb-4 text-lg md:text-xl">
                                            {feature.subtitle}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl break-keep">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* 통계 (모바일에서는 숨기거나 위치 조정 고려, 일단 유지) */}
                                    <div className="flex-shrink-0 md:text-right hidden md:block">
                                        <div className={`inline-flex flex-col items-center md:items-end bg-gradient-to-br ${feature.bgGradient} rounded-2xl px-6 py-5`}>
                                            <span className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                                {feature.stat.value}
                                            </span>
                                            <span className="text-sm text-gray-500 font-medium">{feature.stat.label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 이미지 영역 - 크기 60% 축소 및 디자인 고도화 */}
                            <div className="relative w-full mt-8 bg-gray-50/50 group overflow-hidden border-t border-gray-100 flex justify-center pt-10">
                                <div className="w-[65%] md:w-[45%] lg:w-[40%] -mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto rounded-t-2xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
