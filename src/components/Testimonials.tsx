'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: '리뷰 답변 고민 사라져서 주방에 집중하니 매출 올랐어요. 진작 쓸걸 그랬어요!',
        author: '김민준 사장님',
        business: '돈가스집 · 서울 강남',
        avatar: '🍛',
        rating: 5,
        highlight: '매출 상승',
    },
    {
        quote: 'POS기랑 배달앱 따로 안 보고 대시보드로 한 번에 보니 정산이 너무 편해요.',
        author: '박순호 사장님',
        business: '치킨집 · 경기 수원',
        avatar: '🍗',
        rating: 5,
        highlight: '정산 편리',
    },
    {
        quote: '악성 리뷰 알림 덕분에 바로바로 대응할 수 있어서 별점 관리가 되네요.',
        author: '이수진 사장님',
        business: '분식집 · 부산 해운대',
        avatar: '🍜',
        rating: 5,
        highlight: '별점 관리',
    },
    {
        quote: '재주문 알림 보내니까 진짜 단골이 늘었어요. 신기해요!',
        author: '최영진 사장님',
        business: '피자집 · 대구 동성로',
        avatar: '🍕',
        rating: 5,
        highlight: '단골 증가',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* 섹션 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                        사장님들의 <span className="gradient-text">생생한 후기</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        세일즈랩을 사용 중인 사장님들의 실제 후기입니다.
                    </p>
                </motion.div>

                {/* 리뷰 카드 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto mt-6">
                    {testimonials.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                        >
                            {/* 별점 */}
                            <div className="flex items-center gap-1.5 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                ))}
                            </div>
                            
                            {/* 리뷰 내용 */}
                            <p className="text-xl md:text-[22px] font-medium text-gray-800 mb-10 leading-[1.6] word-keep break-keep flex-grow">
                                "{review.quote}"
                            </p>
                            
                            {/* 하단 화자 정보 */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-full flex items-center justify-center text-3xl shadow-sm border border-gray-100">
                                    {review.avatar}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 text-lg">
                                        {review.author}
                                    </p>
                                    <p className="text-blue-600 font-medium text-sm">
                                        {review.business}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
