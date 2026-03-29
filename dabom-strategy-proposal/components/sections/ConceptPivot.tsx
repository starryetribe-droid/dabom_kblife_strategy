import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const ConceptPivot: React.FC = () => {
    return (
        <SectionWrapper id="concept-pivot" className="bg-white" pageNumber={20}>
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
                <FadeIn>
                    <div className="mb-6 text-center">
                        <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">STRATEGY 01</span>
                        <h2 className="apple-title text-[#1d1d1f] ">
                            시니어를 넘어 <span className="text-kb-yellow">전 연령대로,</span><br />
                            <span className="text-kb-yellow">컨셉 피봇 (Concept Pivot)</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="flex justify-center mb-6">
                    {/* Card 1: Brand Renaming */}
                    <FadeIn delay={100} className="w-full max-w-4xl">
                        <div className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-kb-yellow flex items-center justify-center text-2xl">
                                    <i className="fa-solid fa-arrows-rotate"></i>
                                </div>
                                <h3 className="apple-subtitle text-[#1d1d1f] ">브랜드 리네이밍</h3>
                            </div>

                            <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-8 mb-6 flex-grow px-4 md:px-10">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-gray-400 line-through text-[18px]">치매 예방</span>
                                        <i className="fa-solid fa-chevron-right text-gray-300 text-[16px]"></i>
                                        <span className="text-kb-yellow font-bold text-[22px]">브레인 부스터</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">기억력</span>
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">주의력</span>
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">집중력</span>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-20 bg-gray-100"></div>

                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-gray-400 line-through text-[18px]">우울증 예방</span>
                                        <i className="fa-solid fa-chevron-right text-gray-300 text-[16px]"></i>
                                        <span className="text-kb-yellow font-bold text-[22px]">기분 관리</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">우울</span>
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">불안</span>
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[14px] font-medium">활력</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8 mt-auto">
                                <p className="text-xl text-gray-800 leading-relaxed font-bold text-center break-keep bg-yellow-50/50 rounded-xl p-6">
                                    치매·우울증 예방이 아닌,<br />
                                    <span className="text-kb-yellow font-extrabold text-2xl inline-block mt-2">'인지기능 및 정서 개선'</span>이라는 동기를 부여하여<br />
                                    MZ세대의 자발적 참여 유도
                                </p>
                            </div>

                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={300}>
                    <div className="text-center py-6 px-6">
                        <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed break-keep">
                            치매·우울증 예방의 무거운 프레임을 벗어나,<br />
                            일상적인 <span className="text-kb-yellow border-b-4 border-kb-yellow/30 inline-block px-1">'멘탈 건강 관리'</span>로 재정의합니다.
                        </p>


                    </div>
                </FadeIn>
            </div >
        </SectionWrapper >
    );
};
