import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const CareVillageOn: React.FC = () => {
    return (
        <SectionWrapper id="care-village-on" className="bg-white" pageNumber={23}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            VALUE 2. 기억 데이터 중심 통합 라이프케어 · Care ON
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-16">
                        Care ON — <span className="text-blue-600 underline underline-offset-8 decoration-4">KB 케어 시설 연계</span> AI 정서 케어
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: Strategy Trace */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <FadeIn delay={100}>
                            <GlassCard className="p-6 bg-white border-gray-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
                                        <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                                    </div>
                                    <h3 className="text-[20px] font-bold text-gray-400">기존 한계</h3>
                                </div>
                                <p className="text-[18px] font-medium text-gray-600 leading-relaxed">
                                    요양보호사가 어르신의 <strong>정서적 히스토리를 파악하여<br />밀착 케어</strong>하기에는 <strong>인력과 시간의 한계</strong>가 명확함
                                </p>
                            </GlassCard>
                        </FadeIn>

                        <FadeIn delay={200} className="flex justify-center -my-2 relative z-20">
                            <div className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                                <i className="fa-solid fa-arrow-down text-blue-400 text-sm"></i>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-white/5">
                                    <i className="fa-solid fa-desktop text-[120px]"></i>
                                </div>
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/30">
                                        <i className="fa-solid fa-desktop text-2xl"></i>
                                    </div>
                                    <h3 className="text-[26px] font-black">자서전적 기억 훈련 AI 챗봇 탑재 키오스크</h3>
                                </div>
                                <p className="text-[20px] text-blue-50 leading-relaxed font-medium relative z-10 mb-8">
                                    생활실과 공용 공간에 배치되어,<br />
                                    어르신들이 언제든 AI와 대화하며 <span className="text-white font-bold underline underline-offset-4 decoration-blue-300/50">정서적 안정을 찾고<br />기억 데이터를 축적</span>할 수 있도록 지원합니다.
                                </p>
                                <div className="flex flex-wrap gap-3 relative z-10">
                                    <span className="px-4 py-2 bg-white/10 rounded-xl text-white font-bold text-[15px] border border-white/20">자서전 Memory 부스</span>
                                    <span className="px-4 py-2 bg-white/10 rounded-xl text-white font-bold text-[15px] border border-white/20">Speech-to-Speech</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Actual Service Image */}
                    <div className="lg:col-span-5">
                        <FadeIn delay={400} className="h-full flex items-center">
                            <div className="relative group w-full">
                                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border bg-white border-gray-100">
                                    <img
                                        src="/images/memory_booth_new.png"
                                        alt="자서전 Memory 부스 실물 서비스"
                                        className="w-full h-auto object-cover object-center"
                                        style={{ maxHeight: '600px' }}
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
