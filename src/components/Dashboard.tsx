'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, Wallet, Target } from 'lucide-react';

const dashboards = [
    {
        icon: Wallet,
        title: '통합 매출 대시보드',
        tagline: '연동한 가게의 매출/정산을 한 눈에.',
        description: '앱별로 로그인할 필요 없이 오늘 매출과 정산 예정금을 통합 조회하세요.',
        images: ['/Dashboard/dashboard1-1.png', '/Dashboard/dashboard1-2.png'],
    },
    {
        icon: BarChart3,
        title: '수수료 분석',
        tagline: '복잡한 수수료 파악을 한 눈에.',
        description: '배달앱별 수수료, 배달비, 부가세를 한눈에 비교하고 절감 포인트를 찾아보세요.',
        images: ['/Dashboard/dashboard2.png'],
    },
    {
        icon: Target,
        title: '광고/랭킹 분석',
        tagline: '광고비 낭비 막아드립니다.',
        description: '내 가게의 앱 노출 순위를 파악 및 우가클 광고 분석',
        images: ['/Dashboard/dashboard3-1.png', '/Dashboard/dashboard3-2.png'],
    },
];

export default function Dashboard() {
    return (
        <section id="dashboard" className="section-padding bg-white relative overflow-hidden">
            {/* 배경 데코 */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-50 to-transparent rounded-full blur-3xl opacity-60" />

            <div className="relative max-w-6xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 md:mb-20"
                >
                    {/* 무료 배지 - 강조 스타일 적용 */}
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
                        배달앱 매출 통합 조회, 단골 분석, 광고 진단까지.<br className="md:hidden" />
                        <br className="hidden md:block" />
                        사장님의 매출을 올려줄 인사이트를 무료로 드려요.
                    </p>
                </motion.div>

                {/* 대시보드 카드 */}
                <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                    {dashboards.map((dashboard, index) => (
                        <motion.div
                            key={dashboard.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card p-6 md:p-7 flex flex-col relative"
                        >
                            {/* 무료 칩 - 좌측 상단 카드 경계 */}
                            <div className="absolute -top-2 -left-2 bg-blue-600 text-white px-5 py-2 rounded-xl text-base font-bold shadow-lg z-10">
                                무 료
                            </div>

                            {/* 타이틀 */}
                            <div className="mb-6 pt-5">
                                <h3 className="text-3xl font-bold text-gray-900 leading-snug mb-2">
                                    {dashboard.title}
                                </h3>
                                <p className="text-blue-600 font-semibold text-lg md:text-xl">
                                    {dashboard.tagline}
                                </p>
                            </div>

                            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed break-keep">
                                {dashboard.description}
                            </p>

                            {/* 비주얼 */}
                            <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 p-4 space-y-4">
                                {dashboard.images.map((img, i) => (
                                    <div key={i} className="relative w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                        <Image
                                            src={img}
                                            alt={`${dashboard.title} ${i + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* 랭킹 정보 면책 조항 (3번째 카드만) */}
                            {index === 2 && (
                                <p className="text-xs text-gray-400 mt-3 text-right">
                                    *랭킹 정보는 프로 요금제에서만 제공됩니다
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
