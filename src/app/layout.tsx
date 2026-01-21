import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
    title: "리뷰닥터 - AI 리뷰 관리 & 매출 분석 대시보드",
    description: "리뷰닥터 AI가 답글부터 관리까지 자동으로. 남는 시간엔 매출 분석 대시보드로 진짜 문제를 해결하세요. 전국 10,000+ 사장님이 매일 사용합니다.",
    keywords: ["리뷰 관리", "배달앱", "AI 답글", "매출 분석", "배민", "쿠팡이츠", "요기요", "음식점 관리"],
    icons: {
        icon: "/favicon.jpg",
        shortcut: "/favicon.jpg",
        apple: "/favicon.jpg",
    },
    openGraph: {
        title: "리뷰닥터 - AI 리뷰 관리 & 매출 분석 대시보드",
        description: "리뷰닥터 AI가 답글부터 관리까지 자동으로. 남는 시간엔 매출 분석 대시보드로 진짜 문제를 해결하세요.",
        type: "website",
        locale: "ko_KR",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "#2563eb",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="antialiased">
                {children}
                <Suspense fallback={null}>
                    <MetaPixel />
                </Suspense>
            </body>
        </html>
    );
}
