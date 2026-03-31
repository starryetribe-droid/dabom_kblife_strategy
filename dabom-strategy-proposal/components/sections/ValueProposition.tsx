import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const ValueProposition: React.FC = () => {
    return (
        <SectionWrapper id="value-proposition" className="bg-white relative overflow-hidden" pageNumber={17}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-24 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Value · KB골든라이프 도입 효과
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
                            다봄이 KB골든라이프에 가져다주는 <span className="text-kb-yellow">세 가지 가치</span>
                        </h2>
                        <p className="text-[#666] font-medium text-[18px] md:text-[20px] tracking-tight">
                            차별화된 기능, 높은 체류시간, 그리고 데이터 기반 맞춤형 추천까지
                        </p>
                    </FadeIn>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pb-8">

                    {/* Column 1: 국내 유일 */}
                    <FadeIn delay={100}>
                        <GlassCard className="p-7 bg-[#F0F7FF] border border-blue-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-fingerprint text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-blue-500/40 leading-none">1</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                국내 유일,<br />다른 보험 앱에 없는 기능이 생겨요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                                        <i className="fa-solid fa-robot text-[14px]"></i>
                                    </div>
                                    <span className="text-[17px] font-black text-kb-black">자서전적 기억 훈련 AI 챗봇</span>
                                </div>
                                <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                                    아직 어떤 보험 앱에서도<br />제공하고 있지 않은 기능입니다
                                </p>
                            </div>


                        </GlassCard>
                    </FadeIn>

                    {/* Column 2: 체류시간 */}
                    <FadeIn delay={200}>
                        <GlassCard className="p-7 bg-[#FFFBF0] border border-yellow-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFBC00] flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-clock text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-[#FFBC00]/40 leading-none">2</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                더 자주, 더 오래<br />머무를 이유가 생겨요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-yellow-50 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-yellow-50 text-[#FFBC00] flex items-center justify-center">
                                        <i className="fa-solid fa-calendar-check text-[14px]"></i>
                                    </div>
                                    <span className="text-[17px] font-black text-kb-black">체류 루프 형성</span>
                                </div>
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                    마음건강검진+두뇌건강운동으로<br />일간·주간·월간 접속 루프를 형성합니다
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Column 3: 데이터 기반 추천 */}
                    <FadeIn delay={300}>
                        <GlassCard className="p-7 bg-[#F0FFF4] border border-green-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-chart-line text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-green-600/40 leading-none">3</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                마음·두뇌 건강<br />데이터로, 맞춤형 추천이 가능해져요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-green-50 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                        <i className="fa-solid fa-bullseye text-[14px]"></i>
                                    </div>
                                    <span className="text-[17px] font-black text-kb-black">데이터 기반 고도화</span>
                                </div>
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                    축적되는 데이터를 활용해 정밀 타겟<br />콘텐츠 및 보험 상품 추천이 가능합니다
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
