'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wallet, CalendarClock, Zap } from 'lucide-react';

const automations = [
    {
        icon: CalendarClock,
        badge: '광고 자동화',
        badgeColor: 'from-violet-50 to-purple-50',
        badgeTextColor: 'text-violet-700',
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
        gradient: 'from-violet-500 to-purple-600',
        title: '광고비 낭비, 스케줄로 잡으세요',
        mobileTitle: '광고비 낭비,\n스케줄로 잡으세요',
        subtitle: '직접 켜고 끄지 않아도, 설정한 스케줄대로 돌아갑니다',
        description:
            '예약해둔 시간에 맞춰 클릭당 비용을 자동으로 변경해드립니다.\n배달의민족에 직접 들어가지 않아도, 예약만 해두면 지정된 시간에 설정이 변경돼요.\n요일별·시간대별로 광고를 유연하게 자동 운영해보세요.',
        stat: { value: '0원', label: '불필요한 광고비' },
        platform: '배달의민족 우가클',
        platformColor: 'bg-blue-50 text-blue-600',
        mockImage: '/Automation/automation_ads.png',
    },
    {
        icon: Wallet,
        badge: '운영 자동화',
        badgeColor: 'from-emerald-50 to-teal-50',
        badgeTextColor: 'text-emerald-700',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        gradient: 'from-emerald-500 to-teal-600',
        title: '출금 신청, 이제 잊어도 됩니다',
        mobileTitle: '출금 신청,\n이제 잊어도 됩니다',
        subtitle: '매일 아침 자동으로 처리됩니다',
        description:
            '쿠팡이츠 출금하러 들어가기 귀찮지 않으셨나요?\n매일 아침 자동으로 출금 신청을 처리해드립니다.',
        stat: { value: '매일', label: '자동 출금' },
        platform: '쿠팡이츠',
        platformColor: 'bg-red-50 text-red-600',
        mockImage: '/Automation/automation_withdraw.png',
    },
];

export default function Automation() {
    return (
        <section id="automation" className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 shadow-xl shadow-violet-500/30 hover:scale-105 transition-transform duration-300 cursor-default">
                        <Zap size={20} className="text-yellow-300 fill-yellow-300" />
                        운영 자동화
                    </div>
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        반복 클릭도 <span className="gradient-text">자동</span>으로
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto break-keep">
                        리뷰 답글 외에도, 매일 반복되는 운영 업무를 세일즈랩이 대신합니다.
                    </p>
                </motion.div>

                {/* 자동화 카드 */}
                <div className="flex flex-col gap-5 md:gap-6">
                    {automations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card p-0 overflow-hidden"
                        >
                            <div className="p-6 md:p-8 lg:p-10 pb-0 md:pb-0 lg:pb-0">
                                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-8">
                                    {/* 아이콘 */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-14 h-14 md:w-16 md:h-16 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <item.icon size={28} className="text-white" />
                                        </div>
                                    </div>

                                    {/* 콘텐츠 */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                                            <span className={`text-base font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${item.badgeColor} ${item.badgeTextColor}`}>
                                                {item.badge}
                                            </span>
                                            <span className={`text-sm font-semibold px-3 py-1.5 rounded-full ${item.platformColor}`}>
                                                {item.platform}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug">
                                            {item.mobileTitle ? (
                                                <>
                                                    <span className="md:hidden whitespace-pre-line">{item.mobileTitle}</span>
                                                    <span className="hidden md:inline">{item.title}</span>
                                                </>
                                            ) : item.title}
                                        </h3>
                                        <p className="text-blue-600 font-semibold mb-4 text-lg md:text-xl">
                                            {item.subtitle}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl break-keep whitespace-pre-line">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* 통계 */}
                                    <div className="flex-shrink-0 md:text-right hidden md:block">
                                        <div className={`inline-flex flex-col items-center bg-gradient-to-br ${item.badgeColor} rounded-2xl px-6 py-5`}>
                                            <span className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                                {item.stat.value}
                                            </span>
                                            <span className="text-sm text-gray-500 font-medium">{item.stat.label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 실제 이미지 영역 */}
                            <div className="relative w-full mt-6 bg-gray-50/50 border-t border-gray-100 flex justify-center pt-8 md:pt-10 group">
                                <div className="w-[60%] md:w-[35%] lg:w-[30%] -mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                    <Image
                                        src={item.mockImage}
                                        alt={item.title}
                                        width={400}
                                        height={800}
                                        className="w-full h-auto rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group-hover:shadow-[0_-15px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500"
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
