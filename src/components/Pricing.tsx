'use client';

import { motion } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';

// 요금제 데이터
const plans = {
    basic: {
        name: '베이직',
        price: '평생 무료',
        priceNote: '',
        stores: '최대 10개',
        storesNote: '(추가 불가능)',
    },
    pro: {
        name: '프로',
        price: '33,000원',
        priceNote: '/월 (VAT 포함)',
        stores: '기본 10개',
        storesNote: '(+추가 가능)',
    },
};

// 기능 비교 데이터
const features = [
    {
        category: '리뷰 관리 기능',
        items: [
            { name: '리뷰 답변\n자동 등록', basic: false, pro: true },
            { name: '리뷰 답변\n예약 설정', basic: false, pro: true },
            { name: '개별 답변 생성', basic: '하루 10개', pro: '무제한' },
        ],
    },
    {
        category: '운영 관리 기능',
        items: [
            { name: '부정 리뷰\n실시간 알림', basic: false, pro: true },
            { name: '생성 말투\n옵션 설정', basic: true, pro: true },
        ],
    },
    {
        category: '자동화 기능',
        items: [
            { name: '쿠팡이츠\n자동 출금', basic: false, pro: true },
            { name: '우가클\n스케줄 자동 관리', basic: false, pro: true },
        ],
    },
    {
        category: '통합 관리 및\n대시보드',
        items: [
            { name: '매출 통계', basic: true, pro: true },
            { name: '정산 통계', basic: true, pro: true },
            { name: '주문 내역', basic: true, pro: true },
            { name: '재주문율 통계', basic: true, pro: true },
            { name: '리뷰 통계', basic: true, pro: true },
            { name: '우가클 점수', basic: true, pro: true },
            { name: '내 가게 랭킹', basic: false, pro: true },
        ],
    },
];

// 체크/엑스 아이콘 컴포넌트
const FeatureValue = ({ value }: { value: boolean | string }) => {
    if (typeof value === 'string') {
        return <span className="text-gray-700 font-medium">{value}</span>;
    }
    if (value) {
        return (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100">
                <Check size={16} className="text-blue-600" />
            </span>
        );
    }
    return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
            <X size={16} className="text-gray-400" />
        </span>
    );
};

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-white">
            <div className="max-w-4xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                        <span className="gradient-text">요금제</span>를 비교해보세요
                    </h2>
                    <p className="text-gray-500 text-lg">
                        카드 등록, 약정 없이<br className="md:hidden" /> 프로를 무료체험 해보고 결정하세요.
                    </p>
                </motion.div>

                {/* 비교 테이블 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
                >
                    {/* 테이블 헤더 */}
                    <div className="grid grid-cols-3">
                        <div className="p-6 bg-gray-50" />
                        <div className="p-6 text-center border-l border-gray-200">
                            <span className="text-lg font-bold text-gray-900">{plans.basic.name}</span>
                        </div>
                        <div className="p-6 text-center bg-blue-50/70 border-l border-blue-100">
                            <span className="text-lg font-bold text-blue-600">{plans.pro.name}</span>
                        </div>
                    </div>

                    {/* 가격 */}
                    <div className="grid grid-cols-3 border-t border-gray-200">
                        <div className="p-5 bg-gray-50 flex items-center">
                            <span className="font-bold text-gray-900">가격</span>
                        </div>
                        <div className="p-5 text-center border-l border-gray-200 flex items-center justify-center">
                            <span className="text-gray-700">{plans.basic.price}</span>
                        </div>
                        <div className="p-5 text-center bg-blue-50/70 border-l border-blue-100 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-1">
                            <span className="text-blue-700 font-bold text-xl">{plans.pro.price}</span>
                            <span className="text-blue-600/70 text-sm">{plans.pro.priceNote}</span>
                        </div>
                    </div>

                    {/* 연결 가게 수 */}
                    <div className="grid grid-cols-3 border-t border-gray-200">
                        <div className="p-5 bg-gray-50 flex items-center">
                            <span className="font-bold text-gray-900">연결 가게 수</span>
                        </div>
                        <div className="p-5 text-center border-l border-gray-200 flex items-center justify-center flex-col">
                            <span className="text-gray-700">{plans.basic.stores}</span>
                            <span className="text-gray-500 text-sm">{plans.basic.storesNote}</span>
                        </div>
                        <div className="p-5 text-center bg-blue-50/70 border-l border-blue-100 flex items-center justify-center flex-col">
                            <span className="text-gray-700">{plans.pro.stores}</span>
                            <span className="text-gray-500 text-sm">{plans.pro.storesNote}</span>
                        </div>
                    </div>

                    {/* 기능 카테고리별 */}
                    {features.map((category, catIndex) => (
                        <div key={catIndex}>
                            {/* 카테고리 헤더 */}
                            <div className="grid grid-cols-3 border-t border-gray-200 bg-gray-100/50">
                                <div className="p-4 col-span-3">
                                    <span className="font-bold text-gray-800">
                                        <span className="hidden md:inline">{category.category.replace('\n', ' ')}</span>
                                        <span className="md:hidden whitespace-pre-line">{category.category}</span>
                                    </span>
                                </div>
                            </div>
                            {/* 기능 항목들 */}
                            {category.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="grid grid-cols-3 border-t border-gray-100"
                                >
                                    <div className="p-4 pl-4 md:pl-8 bg-gray-50 flex items-center">
                                        <span className="text-gray-600 text-sm md:text-base">
                                            <span className="hidden md:inline">{item.name.replace('\n', ' ')}</span>
                                            <span className="md:hidden whitespace-pre-line">{item.name}</span>
                                        </span>
                                    </div>
                                    <div className="p-4 text-center border-l border-gray-200 flex items-center justify-center">
                                        <FeatureValue value={item.basic} />
                                    </div>
                                    <div className="p-4 text-center bg-blue-50/70 border-l border-blue-100 flex items-center justify-center">
                                        <FeatureValue value={item.pro} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                </motion.div>

                {/* Enterprise 섹션 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-8 md:p-10"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Enterprise
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <Check size={18} className="text-blue-600 flex-shrink-0" />
                                    <span>API 제공, 브랜드 커스텀 등 별도 협의</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={18} className="text-blue-600 flex-shrink-0" />
                                    <span>가맹점 일괄 가입 시 구간에 따른 할인율 적용</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            href="http://pf.kakao.com/_fzvYG/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 whitespace-nowrap"
                        >
                            <MessageCircle size={18} />
                            별도 문의
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
