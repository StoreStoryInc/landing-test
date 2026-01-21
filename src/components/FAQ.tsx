'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '상품 구성이 어떻게 되나요? 이용요금이 어떻게 되나요?',
        answer: (
            <div className="space-y-4">
                <p>
                    <span className="font-bold bg-blue-50 text-blue-700 px-1 py-0.5 rounded">베이직 플랜</span>은 평생 무료로 제공됩니다.<br />
                    베이직 플랜에서는 플랫폼을 연동시켜 둔 다음 개별 리뷰에서 답변을 생성하셔서 즉시 등록하실 수 있습니다. 대시보드 기능 역시 동일하게 제공됩니다. 가게 10개까지 등록이 가능합니다.
                </p>
                <p>
                    <span className="font-bold bg-blue-50 text-blue-700 px-1 py-0.5 rounded">프로 상품</span>은 연동된 가게의 리뷰를 설정하신 기준에 따라 리뷰닥터가 대신하여 자동으로 관리합니다. 대시보드에서 가게 노출 랭킹까지 확인이 가능하며, 부정리뷰 알림톡이 실시간으로 발송됩니다.<br />
                    기본으로 가게 10개까지 등록이 가능하며, 월 33,000원(부가세 포함)에 제공됩니다. 가게 10개 초과 시에는 1개당 2,200원씩 구독료가 추가됩니다.
                </p>
            </div>
        ),
    },
    {
        question: '리뷰 개수에 제한이 있거나 요금이 달라지나요?',
        answer: '아뇨. 리뷰 개수는 무제한입니다. 리뷰닥터는 가게 연동 개수로 구독료를 과금하고 있습니다.',
    },
    {
        question: '리뷰가 많지 않고 통합 관리만 하고 싶은데 가능할까요?',
        answer: (
            <div className="space-y-2">
                <p>
                    <span className="font-bold bg-blue-50 text-blue-700 px-1 py-0.5 rounded">베이직 플랜을 이용하세요!</span> 베이직 플랜만으로도 모든 플랫폼 연결이 가능하며 리뷰 통합 관리가 가능합니다.
                </p>
                <p>
                    추가로, 월 300개의 맞춤 답글 생성 기능 역시 평생 무료로 사용하실 수 있습니다.
                </p>
                <p className="text-gray-500 text-sm">
                    아직 리뷰가 많지 않다면 베이직 요금제로도 충분히 편하게 리뷰를 관리하실 수 있습니다.
                </p>
            </div>
        ),
    },
    {
        question: '어떤 플랫폼 연동이 가능한가요? 다른 곳과 무엇이 다른가요?',
        answer: (
            <>
                배달의 민족, 쿠팡이츠, 요기요, 땡겨요, 네이버 플레이스까지 총 5개의 플랫폼과 연동이 가능합니다.
                <br /><br />
                <span className="font-bold bg-blue-50 text-blue-700 px-1 py-0.5 rounded">리뷰닥터는 관련 서비스 중 유일하게 네이버 플레이스까지 양방향 연동이 되는 서비스 입니다.</span>
            </>
        ),
    },
    {
        question: '약정이 있나요? 계약서를 작성하나요?',
        answer: (
            <>
                없습니다. 리뷰닥터는 월 구독 형태로 운영되며, 마음에 들지 않을 시 언제든지 유료 구독을 취소하실 수 있습니다.
                <br /><br />
                계약서 작성도 불필요합니다. 회원가입만 하시면 언제든 자유롭게 가게를 연동하시고 관리를 시작하실 수 있습니다.
            </>
        ),
    },
    {
        question: '결제는 어떻게 이루어지나요?',
        answer: (
            <>
                카드 결제만 가능합니다. 카드를 등록해두시면 자동으로 구독이 갱신됩니다.
                <br /><br />
                카드 결제만 진행되기에 별도로 세금계산서를 챙기실 필요가 없습니다. 카드 영수증은 가입하신 이메일로 자동 발송됩니다.
            </>
        ),
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-5">
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#112D4E]">
                            자주 묻는 질문
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between py-4 md:py-5 text-left group"
                                >
                                    <span className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors pr-8 leading-snug">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex-shrink-0 text-gray-400 group-hover:text-blue-600"
                                    >
                                        <ChevronDown size={24} />
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 text-gray-600 leading-relaxed text-base md:text-lg break-keep">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
