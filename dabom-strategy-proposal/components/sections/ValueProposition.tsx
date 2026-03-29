import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const ValueProposition: React.FC = () => {
    return (
        <SectionWrapper id="value-proposition" className="bg-white relative overflow-hidden" pageNumber={17}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">
                {/* Section Header */}
                <div className="text-left mb-10">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 pb-8">

                    {/* Column 1: 국내 유일 */}
                    <FadeIn delay={100} className="h-full">
                        <GlassCard className="p-7 h-full bg-[#F0F7FF] border border-blue-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-fingerprint text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-blue-500/20 leading-none">1</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                국내 유일,<br />다른 보험 앱에 없는<br />기능이 생겨요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm mb-6">
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

                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex-1">
                                <h4 className="text-[15px] font-bold text-gray-400 mb-4">경쟁사 현황</h4>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300 text-[14px]">✕</span>
                                        <p className="text-[15px] text-gray-500 font-medium">삼성생명 — 감정일기, 명상·ASMR</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300 text-[14px]">✕</span>
                                        <p className="text-[15px] text-gray-500 font-medium">신한라이프 — 전화 심리상담</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300 text-[14px]">✕</span>
                                        <p className="text-[15px] text-gray-500 font-medium">AIA 생명 — 명상·수면관리</p>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4 border-t border-gray-200">
                                    <p className="text-[16px] font-black text-blue-600">
                                        <i className="fa-solid fa-arrow-right mr-2"></i>AI 기반 기억 훈련 챗봇은 다봄이 유일
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Column 2: 체류시간 */}
                    <FadeIn delay={200} className="h-full">
                        <GlassCard className="p-7 h-full bg-[#FFFBF0] border border-yellow-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFBC00] flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-clock text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-[#FFBC00]/20 leading-none">2</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                더 자주, 더 오래<br />머무를 이유가<br />생겨요
                            </h3>

                            <div className="space-y-4 flex-1">
                                {/* 매일 */}
                                <div className="bg-white rounded-2xl p-5 border border-yellow-50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-[#FFBC00] text-white text-[13px] font-black px-3 py-1 rounded-lg">매일</span>
                                        <span className="text-[18px] font-black text-kb-black">두뇌건강운동</span>
                                    </div>
                                    <p className="text-[15px] text-gray-500 font-medium">일간 반복 방문 습관 형성</p>
                                </div>

                                {/* 주 2~3회 */}
                                <div className="bg-white rounded-2xl p-5 border border-yellow-50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-green-600 text-white text-[13px] font-black px-3 py-1 rounded-lg">주 2~3회</span>
                                        <span className="text-[18px] font-black text-kb-black">AI 기억 훈련</span>
                                    </div>
                                    <p className="text-[15px] text-gray-500 font-medium">대화형 세션, 체류시간 증가</p>
                                </div>

                                {/* 월 1회 */}
                                <div className="bg-white rounded-2xl p-5 border border-yellow-50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-blue-500 text-white text-[13px] font-black px-3 py-1 rounded-lg">월 1회</span>
                                        <span className="text-[18px] font-black text-kb-black">마음건강검진</span>
                                    </div>
                                    <p className="text-[15px] text-gray-500 font-medium mb-3">정기 방문 + 건강 데이터 축적</p>
                                    <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-100">
                                        <p className="text-[14px] font-bold text-[#FFBC00] leading-relaxed">
                                            → 신체 건강 = <span className="text-kb-black">걸음수</span>, 마음 건강 = <span className="text-kb-black">다봄</span><br />
                                            앱 내 건강관리 양축 완성
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Column 3: 데이터 기반 추천 */}
                    <FadeIn delay={300} className="h-full">
                        <GlassCard className="p-7 h-full bg-[#F0FFF4] border border-green-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-chart-line text-2xl"></i>
                                </div>
                                <span className="text-[52px] font-black text-green-600/20 leading-none">3</span>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                마음·두뇌 건강<br />데이터로, 맞춤형<br />추천이 가능해져요
                            </h3>

                            {/* 축적되는 데이터 */}
                            <div className="bg-white rounded-2xl p-5 border border-green-50 shadow-sm mb-4">
                                <h4 className="text-[16px] font-bold text-gray-400 mb-4">축적되는 데이터</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                                        <p className="text-[15px] text-gray-600 font-medium">마음건강검진 결과 우울·불안·활력 상태값</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                                        <p className="text-[15px] text-gray-600 font-medium">두뇌건강운동 수행 빈도, 레벨, 필요 인지 기능 (집중력 등)</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                                        <p className="text-[15px] text-gray-600 font-medium">AI 챗봇 대화 일상 기억, 감정 등 상세 대화 내용</p>
                                    </div>
                                </div>
                            </div>

                            {/* 정밀 타겟 콘텐츠 추천 */}
                            <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm mb-4 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-crosshairs text-[16px]"></i>
                                </div>
                                <div>
                                    <h4 className="font-black text-[16px] text-green-700">정밀 타겟 콘텐츠 추천</h4>
                                    <p className="text-[14px] text-gray-500 font-medium">두뇌 건강 운동 등 고객 상태에<br />적합한 콘텐츠를 즉시 추천</p>
                                </div>
                            </div>

                            {/* 보험 상품 선제적 연계 */}
                            <div className="bg-[#1A1A1A] rounded-2xl p-5 shadow-sm flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#333] text-kb-yellow flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-link text-[16px]"></i>
                                </div>
                                <div>
                                    <h4 className="font-black text-[16px] text-kb-yellow">보험 상품 선제적 연계</h4>
                                    <p className="text-[14px] text-gray-400 font-medium">KB 치매간병보험 등 고객 상황에<br />맞는 상품을 선제적으로 안내</p>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
