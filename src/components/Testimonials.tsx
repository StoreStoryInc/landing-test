'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // 4초 자동 넘김
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, []);

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
                        리뷰닥터를 사용 중인 사장님들의 실제 후기입니다.
                    </p>
                </motion.div>

                {/* 스와이프 카드 */}
                <div className="relative">
                    {/* 네비게이션 버튼 - 데스크탑 */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                        aria-label="이전"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                        aria-label="다음"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* 카드 컨테이너 */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 60, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -60, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="card p-8 md:p-12 lg:p-16 text-center"
                            >
                                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-10 leading-relaxed word-keep break-keep">
                                    {testimonials[currentIndex].quote}
                                </p>

                                <div className="flex flex-col items-center gap-6">
                                    {/* 별점 */}
                                    <div className="flex items-center gap-1.5">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center text-2xl shadow-sm">
                                            {testimonials[currentIndex].avatar}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-gray-900 text-lg">
                                                {testimonials[currentIndex].author}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {testimonials[currentIndex].business}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 모바일 네비게이션 */}
                    <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-gray-400 active:bg-gray-50"
                            aria-label="이전"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* 인디케이터 */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    aria-label={`${index + 1}번 후기로 이동`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-gray-400 active:bg-gray-50"
                            aria-label="다음"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* 데스크탑 인디케이터 */}
                    <div className="hidden md:flex justify-center gap-2 mt-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-blue-600 w-10'
                                    : 'bg-gray-200 hover:bg-gray-300 w-2'
                                    }`}
                                aria-label={`${index + 1}번 후기로 이동`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
