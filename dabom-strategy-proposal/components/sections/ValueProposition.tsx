import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const ValueProposition: React.FC = () => {
    return (
        <SectionWrapper id="value-proposition" className="bg-white relative overflow-hidden" pageNumber={19}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-24 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Value · 가치 제안
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
                            다봄이 KB골든라이프에 가져다주는 <span className="text-kb-yellow">세 가지 가치</span>
                        </h2>
                        <p className="text-[#666] font-medium text-[18px] md:text-[20px] tracking-tight">
                            차별화된 기능, 대화 데이터 기반 서비스 통합, 데일리 체류 루프까지
                        </p>
                    </FadeIn>
                </div>
                {/* 3 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pb-8">
                    {/* NEW Column 1: AI Chatbot Position */}
                    <FadeIn delay={100}>
                        <GlassCard className="p-7 bg-[#F3F0FF] border border-purple-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg border border-purple-400/30">
                                    <div className="relative w-8 h-8 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                            {/* Medical/Care Package Box with Hear & Plus */}
                                            <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2.2" />
                                            <path d="M7 4V20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                            <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                            <path d="M17 11.5c.34-.33.7-.63.7-1.12 0-.61-.5-1.1-.1.1.1.2.6.2.2.2 0-.44-.36-.78-.7-.78-.34 0-.7.34-.7.78 0 .49.36.79.7 1.12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M17 14c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5-1.5.5-1.5 1.5S16 14 17 14z" fill="currentColor" fillOpacity="0.4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 w-full border-b-2 border-purple-500/20 pb-2">
                                    <span className="text-[52px] font-black text-purple-500/80 leading-none">1</span>
                                    <span className="text-[17px] md:text-[19px] font-black text-purple-900 leading-tight pb-1">플랫폼 경쟁력 강화</span>
                                </div>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                국내 유일,<br />다른 보험 앱에 없는 멘탈케어 패키지가 생겨요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-purple-50 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-2">
                                        {/* Brain/Memory Icon */}
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
                                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
                                            </svg>
                                        </div>
                                        {/* Robot/AI Icon */}
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="11" width="18" height="10" rx="2" />
                                                <circle cx="12" cy="5" r="2" />
                                                <path d="M12 7v4" />
                                                <line x1="8" y1="16" x2="8" y2="16" />
                                                <line x1="16" y1="16" x2="16" y2="16" />
                                            </svg>
                                        </div>
                                        {/* Star/Position Icon */}
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[17px] font-black text-kb-black">자서전적 기억 훈련 AI 챗봇,<br />자체 논문·특허 기반 마음검진, 인지훈련 프로그램</span>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* MOVED Column 2 (was 1): 국내 유일 -> 걷기도 자산관리도 */}
                    <FadeIn delay={200}>
                        <GlassCard className="p-7 bg-[#F0F7FF] border border-blue-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg border border-blue-400/30">
                                    <div className="relative w-8 h-8">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                            <path d="M6 7H18L6 17H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="6" cy="7" r="2" fill="white" />
                                            <circle cx="18" cy="7" r="2" fill="white" />
                                            <circle cx="12" cy="12" r="2" fill="white" />
                                            <circle cx="6" cy="17" r="2" fill="white" />
                                            <circle cx="18" cy="17" r="2" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 w-full border-b-2 border-blue-500/20 pb-2">
                                    <span className="text-[52px] font-black text-blue-500/80 leading-none">2</span>
                                    <span className="text-[17px] md:text-[19px] font-black text-blue-900 leading-tight pb-1">기억 데이터 중심<br />통합 라이프케어</span>
                                </div>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                걷기도, 자산관리도, 요양도 ㅡ<br />전부 고객 기억 데이터와 연결돼요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                                <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
                                                <path d="M12 7v8" />
                                                <path d="m10 20 2-5 2 5" />
                                            </svg>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.3" />
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[17px] font-black text-kb-black">어디에도 없었던,<br />고객의 추억으로 대화하는 보험 앱</span>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* MOVED Column 3 (was 2): 체류시간 */}
                    <FadeIn delay={300}>
                        <GlassCard className="p-7 bg-[#FFFBF0] border border-yellow-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFBC00] flex items-center justify-center text-white shadow-md">
                                    <i className="fa-solid fa-clock text-2xl"></i>
                                </div>
                                <div className="flex items-end gap-3 w-full border-b-2 border-yellow-500/20 pb-2">
                                    <span className="text-[52px] font-black text-[#FFBC00]/80 leading-none">3</span>
                                    <span className="text-[17px] md:text-[19px] font-black text-yellow-900 leading-tight pb-1">플랫폼 활성화 및<br />서비스 시너지 창출</span>
                                </div>
                            </div>
                            <h3 className="text-[22px] font-black text-kb-black leading-snug mb-6">
                                더 자주, 더 오래<br />머무를 이유가 생겨요
                            </h3>

                            <div className="bg-white rounded-2xl p-5 border border-yellow-50 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                                <path d="m9 16 2 2 4-4" />
                                            </svg>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border-2 border-white shadow-md">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                                                <path d="M21 3v5h-5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[17px] font-black text-kb-black">매일 소통하고 기록하며 형성되는,<br />강력한 데일리 체류 루프</span>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
