'use client';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-12 pb-32 md:pb-12 px-5">
            <div className="max-w-6xl mx-auto">
                {/* 로고 */}
                <div className="mb-8">
                    <Image
                        src="/service_logo/saleslab_logo.svg"
                        alt="세일즈랩"
                        width={240}
                        height={68}
                        className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                    />
                </div>

                {/* 회사 정보 */}
                <div className="space-y-2 text-sm text-gray-500 mb-8">
                    <p>
                        <span className="text-gray-400">상호명</span> (주)스토어스토리 | <span className="text-gray-400">대표</span> 곽동훈
                    </p>
                    <p>
                        <span className="text-gray-400">사업자번호</span> 528-86-03192
                    </p>
                    <p>
                        <span className="text-gray-400">통신판매신고번호</span> 2025-서울영등포-1238
                    </p>
                    <p>
                        <span className="text-gray-400">주소</span> 서울 영등포구 신풍로 28, 2층 4호 청년쿡 푸드테크센터
                    </p>
                    <p>
                        <span className="text-gray-400">고객센터</span> 0507-1381-0596 (24시간)
                    </p>
                    <p>
                        <span className="text-gray-400">이메일</span> contact@storestory.co.kr
                    </p>
                </div>

                {/* 링크 */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-8">
                    <a
                        href="https://field-pyrite-e66.notion.site/31b4b16ecd1e80bea4bccda5477e6422?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        서비스이용약관
                    </a>
                    <a
                        href="https://field-pyrite-e66.notion.site/31b4b16ecd1e8078b7c2e1f63fc9cca1?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        개인정보처리방침
                    </a>
                    <a
                        href="https://field-pyrite-e66.notion.site/27c4b16ecd1e80779ae3d5ec95187378?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        공지사항
                    </a>
                    <span className="text-gray-600">|</span>
                    <a
                        href="mailto:contact@storestory.co.kr"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        API 제휴문의(이메일)
                    </a>
                    <a
                        href="https://pf.kakao.com/_fzvYG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        고객문의
                    </a>
                </div>

                {/* 저작권 */}
                <div className="pt-6 border-t border-gray-800">
                    <p className="text-xs text-gray-600">
                        © 2026 (주)스토어스토리. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
