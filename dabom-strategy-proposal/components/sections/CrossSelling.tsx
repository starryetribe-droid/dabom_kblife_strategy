import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const CrossSelling: React.FC = () => {
    return (
        <SectionWrapper id="cross-selling" className="bg-white" pageNumber={26}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-kb-yellow text-kb-black px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            Section 2. 시너지 가속 · Cross-Selling
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-16">
                        Cross-Selling — 대화 맥락 기반 <span className="text-[#FFBC00] underline underline-offset-8 decoration-4">네이티브 추천</span>
                    </h2>
                    <p className="text-[22px] text-gray-600 mb-16 max-w-[800px]">
                        다봄과의 대화 맥락 속에서 KB금융그룹의 서비스를 자연스럽게 연결함으로써 이질감 없는 금융 경험을 제공합니다.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FadeIn delay={100}>
                        <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#FFBC00]">
                                    <i className="fa-solid fa-university text-3xl"></i>
                                </div>
                                <h3 className="text-[26px] font-black text-kb-black">KB국민은행 연계</h3>
                            </div>
                            <p className="text-[20px] text-gray-500 mb-6 italic">사용자가 여행 추억을 회상하면...</p>
                            <div className="bg-[#FFBC00]/10 p-6 rounded-2xl border-l-4 border-[#FFBC00]">
                                <p className="text-[19px] text-kb-black leading-relaxed">
                                    "영숙님, 오늘 대화에서 '무릎이 아프다'고 하셨죠?<br />
                                    최근 비가 자주 와서 더 신경 쓰이실 텐데,<br />
                                    <strong>KB헬스케어의 화상 상담</strong> 받아보실래요?"
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-red-500">
                                    <i className="fa-solid fa-shield-heart text-3xl"></i>
                                </div>
                                <h3 className="text-[26px] font-black text-kb-black">KB손해보험 연계</h3>
                            </div>
                            <p className="text-[20px] text-gray-500 mb-6 italic">건강에 대한 불안을 언급하면...</p>
                            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                                <p className="text-[20px] font-bold text-kb-black leading-snug">
                                    "많이 걱정되시죠. KB골든라이프ON의 전문 헬스케어 상담 서비스를 바로 연결해 드릴까요?"
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
