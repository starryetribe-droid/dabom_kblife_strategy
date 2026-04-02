import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

/**
 * Flexibility of Integration Section (Page 18)
 * Designed to strictly match the provided reference image layout and color scheme.
 */
export const IntegrationFlexibility: React.FC = () => {
    // Custom colors from the image
    const dabomGreen = "#2D3326";
    const accentOrange = "#E65D25";
    const lightBgGray = "#F1F3F5";

    return (
        <SectionWrapper id="integration-flexibility" className="bg-white relative overflow-hidden" pageNumber={35}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Environment · 도입 유연성
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
                            파트너사 연동 환경 및 도입 방식의 <span className="text-kb-black">유연성</span>
                        </h2>
                        <p className="text-[#666] font-medium text-[18px] md:text-[20px] tracking-tight">
                            SSO 연동부터 모듈형 API, 그리고 데이터 자산화까지
                        </p>
                    </FadeIn>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pb-6 flex-1">

                    {/* Column 1: SSO */}
                    <FadeIn delay={100}>
                        <GlassCard className="p-8 h-full bg-white border border-gray-200 rounded-[2rem] flex flex-col relative overflow-hidden">
                            <div className="mb-4">
                                <span className="bg-[#FFF8E7] text-[#E65D25] px-3 py-1 rounded-full text-[12px] font-black tracking-tight border border-orange-100">
                                    도입 방식 1
                                </span>
                            </div>
                            <h3 className="text-[24px] font-black text-kb-black leading-tight mb-8">
                                회원가입 없는<br />즉시 실행 (SSO)
                            </h3>

                            {/* Center Diagram Box */}
                            <div className="bg-[#F8F9FA] rounded-2xl p-6 mb-8 flex items-center justify-between relative h-[210px] border border-gray-100">
                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div className="w-20 h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3">
                                        <i className="fa-solid fa-mobile-screen-button text-gray-400 text-2xl"></i>
                                        <span className="text-[12px] font-bold text-gray-500">파트너 앱</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col items-center relative z-10 px-0">
                                    <div className="w-full h-[3px] bg-[#E65D25] relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border-2 border-[#E65D25] shadow-sm">
                                            <i className="fa-solid fa-lock text-[#E65D25] text-sm"></i>
                                        </div>
                                    </div>
                                    <span className="text-[#E65D25] text-[13px] font-black mt-10 whitespace-nowrap bg-white/60 px-3 py-1 rounded-full border border-orange-100 shadow-sm">가입절차 생략</span>
                                </div>

                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div
                                        className="w-20 h-24 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2"
                                        style={{ backgroundColor: dabomGreen }}
                                    >
                                        <i className="fa-solid fa-heart-pulse text-white text-[32px] mb-1"></i>
                                        <span className="text-[14px] font-black text-white px-2 text-center pb-1">다봄 기능</span>
                                    </div>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div className="space-y-4 mb-10 flex-1 px-1">
                                <div className="flex items-start gap-4">
                                    <span className="text-kb-black font-black text-[16px] shrink-0 min-w-[90px]">No Sign-up</span>
                                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                        파트너사 계정 연동(SSO)으로 별도 가입 절차 생략
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-kb-black font-black text-[16px] shrink-0 min-w-[90px]">In-App Exp</span>
                                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                        웹뷰(WebView) 또는 SDK 방식으로<br />앱 이탈 없이 즉시 실행
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Quote Box */}
                            <div className="bg-[#F1F3F5] rounded-xl p-5">
                                <p className="text-[16px] font-black text-kb-black text-center leading-tight">
                                    파트너 앱의 체류 시간을 해치지 않고<br />기능만 확장합니다
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Column 2: Modular */}
                    <FadeIn delay={200}>
                        <GlassCard className="p-8 h-full bg-white border border-gray-200 rounded-[2rem] flex flex-col relative overflow-hidden">
                            <div className="mb-4">
                                <span className="bg-[#FFF8E7] text-[#E65D25] px-3 py-1 rounded-full text-[12px] font-black tracking-tight border border-orange-100">
                                    도입 방식 2
                                </span>
                            </div>
                            <h3 className="text-[24px] font-black text-kb-black leading-tight mb-8">
                                필요한 기능만 골라 쓰는<br />모듈형 API 도입
                            </h3>

                            {/* Modular List Box */}
                            <div className="space-y-2 mb-10 flex-1">
                                {[
                                    { title: "다봄이와 기억 찾기", desc: "자서전적 기억 훈련 알고리즘 AI 챗봇" },
                                    { title: "두뇌 건강 운동", desc: "심리전문가가 설계한 인지 훈련 게임 6종" },
                                    { title: "마음 검진 및 리포트", desc: "우울/불안/활력 지수 측정 및 리포트" },
                                    { title: "기억의 정원", desc: "리텐션을 높이는 식물 성장 게이미피케이션" },
                                    { title: "사진첩", desc: "떠올린 기억을 다시 추억할 수 있는 저장소" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-[#F8F9FA] rounded-xl p-3 flex items-center gap-5 border border-transparent hover:border-gray-200 transition-all">
                                        <div className="flex flex-col items-center gap-[3px] shrink-0 w-10">
                                            {/* Top Row: 2 blocks */}
                                            <div className="flex gap-[3px]">
                                                <div className={`w-3 h-3 rounded-[2.5px] ${idx === 0 ? "bg-[#E65D25]" : "bg-gray-300"}`}></div>
                                                <div className={`w-3 h-3 rounded-[2.5px] ${idx === 1 ? "bg-[#E65D25]" : "bg-gray-300"}`}></div>
                                            </div>
                                            {/* Bottom Row: 3 blocks */}
                                            <div className="flex gap-[3px]">
                                                <div className={`w-3 h-3 rounded-[2.5px] ${idx === 2 ? "bg-[#E65D25]" : "bg-gray-300"}`}></div>
                                                <div className={`w-3 h-3 rounded-[2.5px] ${idx === 3 ? "bg-[#E65D25]" : "bg-gray-300"}`}></div>
                                                <div className={`w-3 h-3 rounded-[2.5px] ${idx === 4 ? "bg-[#E65D25]" : "bg-gray-300"}`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-[17px] font-black text-kb-black mb-1 leading-none">{item.title}</h4>
                                            <p className="text-[13px] text-gray-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Quote Box */}
                            <div className="bg-[#F1F3F5] rounded-xl p-5">
                                <p className="text-[16px] font-black text-kb-black text-center leading-tight">
                                    전체 도입이 무겁다면,<br />필요한 기능만 탑재해 보세요
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Column 3: Data */}
                    <FadeIn delay={300}>
                        <GlassCard className="p-8 h-full bg-white border border-gray-200 rounded-[2rem] flex flex-col relative overflow-hidden">
                            <div className="mb-4">
                                <span className="bg-[#FFF8E7] text-[#E65D25] px-3 py-1 rounded-full text-[12px] font-black tracking-tight border border-orange-100">
                                    비즈니스 시너지
                                </span>
                            </div>
                            <h3 className="text-[24px] font-black text-kb-black leading-tight mb-8">
                                활동 데이터<br />자산화
                            </h3>

                            {/* Data Diagram Box */}
                            <div className="bg-[#F8F9FA] rounded-2xl p-6 mb-8 flex items-center justify-between relative h-[210px] border border-gray-100">
                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                                        style={{ backgroundColor: dabomGreen }}
                                    >
                                        <i className="fa-solid fa-heart-pulse text-white text-[36px]"></i>
                                    </div>
                                    <span className="text-[13px] font-black text-gray-700">다봄 DB</span>
                                </div>

                                <div className="flex-1 flex flex-col items-center relative z-10">
                                    <div className="w-full h-[1.5px] border-t-2 border-dashed border-gray-300 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <i className="fa-solid fa-arrow-right text-[#E65D25] text-2xl"></i>
                                        </div>
                                    </div>
                                    <span className="text-[#E65D25] text-[12px] font-black mt-8 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">Data 전송</span>
                                </div>

                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center">
                                        <i className="fa-solid fa-database text-gray-400 text-3xl"></i>
                                    </div>
                                    <span className="text-[13px] font-black text-gray-700">파트너 DB</span>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div className="space-y-4 mb-10 flex-1 px-1">
                                <div className="flex items-start gap-4">
                                    <span className="text-kb-black font-black text-[16px] shrink-0 min-w-[90px]">Real-time</span>
                                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                        사용자의 우울 점수, 인지 레벨, 대화 내용,<br />활동 내역 실시간 전송
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-kb-black font-black text-[16px] shrink-0 min-w-[90px]">Signal</span>
                                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                        인지 기능 저하/우울 고위험군 탐지 시그널 제공
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-kb-black font-black text-[16px] shrink-0 min-w-[90px]">Marketing</span>
                                    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                        대화 데이터를 활용한 타켓 마케팅
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Quote Box */}
                            <div className="bg-[#F1F3F5] rounded-xl p-5">
                                <p className="text-[16px] font-black text-kb-black text-center leading-tight">
                                    사용자의 마음 상태와 대화 데이터를<br />자산화할 수 있습니다
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
