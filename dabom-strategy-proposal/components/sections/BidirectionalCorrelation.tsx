import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const BidirectionalCorrelation: React.FC = () => {
    return (
        <SectionWrapper id="bidirectional-correlation" className="bg-[#F8FAFC]" pageNumber={17}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">

                {/* Header */}
                <div className="text-left mb-10 w-full">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Service · 두뇌 건강 운동
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-3 tracking-tight">
                            우울 증상과 인지 기능 간의 양방향 연관성
                        </h2>
                        <ul className="text-[#666] font-medium text-[17px] md:text-[19px] tracking-tight space-y-2.5">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span>2024년 6월 세계적으로 권위 있는 의학 저널인 <strong className="text-[#111]">JAMA Network Open</strong>에 발표된 연구 결과</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span>총 <strong className="text-[#111]">8,268명</strong>의 <strong className="text-[#111]">50세 이상</strong> 영국 성인을 대상으로 진행</span>
                            </li>
                        </ul>
                    </FadeIn>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full flex-1 items-center">

                    {/* Left Column (Phase 1, 2, 3) */}
                    <div className="lg:col-span-8 flex flex-col h-fit">
                        <FadeIn delay={200} className="w-full">
                            <div className="bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.02)] rounded-[24px] p-5 lg:px-10 lg:py-5 flex flex-col items-center w-full gap-4">

                                {/* Phase 1: 진행 방식 */}
                                <div className="w-full flex flex-col items-center pb-3 border-b border-gray-100">
                                    <span className="text-gray-400 font-bold text-[13px] mb-1.5 tracking-widest">진행 방식</span>
                                    <h3 className="text-[#111] font-bold text-[20px] mb-2 tracking-tight">
                                        2012~2019까지, <strong className="text-[#111] bg-kb-yellow/20 px-2">2년마다 우울 증상과 인지 기능 평가 진행</strong>
                                    </h3>
                                    <p className="text-[#666] font-medium text-[15px] md:text-[17px] tracking-tight flex flex-col md:flex-row gap-2 md:gap-6">
                                        <span>• 우울 증상 : 역학연구센터 우울척도 (CES-D) 점수 측정</span>
                                        <span>• 인지 기능 : 기억력 및 단어 유창성 평가</span>
                                    </p>
                                </div>

                                {/* Phase 2: 분석 방식 */}
                                <div className="w-full flex flex-col items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-400 font-bold text-[13px] mb-1.5 tracking-widest">분석 방식</span>
                                    <h3 className="text-[#111] font-bold text-[20px] md:text-[22px] mb-3 tracking-tight">회귀분석을 크게 두 번 시행</h3>

                                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 w-full mx-auto">
                                        {/* Flow 1 */}
                                        <div className="flex items-center gap-3 lg:gap-6">
                                            <div className="bg-gray-50 text-gray-400 font-bold text-[13px] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200">1회</div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-[20px] md:text-[22px] font-bold text-[#111] mb-0.5">X</span>
                                                <span className="text-[15px] md:text-[17px] font-bold text-[#111]">우울 증상</span>
                                                <span className="text-[12px] md:text-[13px] text-[#888] font-medium mt-0.5">(독립변수, 원인)</span>
                                            </div>
                                            <i className="fa-solid fa-arrow-right text-gray-300 text-lg lg:text-xl mx-0.5 lg:mx-2"></i>
                                            <div className="flex flex-col items-center">
                                                <span className="text-[20px] md:text-[22px] font-bold text-[#111] mb-0.5">Y</span>
                                                <span className="text-[15px] md:text-[17px] font-bold text-[#111]">인지 기능 저하</span>
                                                <span className="text-[12px] md:text-[13px] text-[#888] font-medium mt-0.5">(종속변수, 결과)</span>
                                            </div>
                                        </div>

                                        {/* Flow 2 */}
                                        <div className="flex items-center gap-3 lg:gap-6">
                                            <div className="bg-gray-50 text-gray-400 font-bold text-[13px] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-gray-200">2회</div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-[20px] md:text-[22px] font-bold text-[#111] mb-0.5">X</span>
                                                <span className="text-[15px] md:text-[17px] font-bold text-[#111]">인지 기능 저하</span>
                                                <span className="text-[12px] md:text-[13px] text-[#888] font-medium mt-0.5">(독립변수, 원인)</span>
                                            </div>
                                            <i className="fa-solid fa-arrow-right text-gray-300 text-lg lg:text-xl mx-0.5 lg:mx-2"></i>
                                            <div className="flex flex-col items-center">
                                                <span className="text-[20px] md:text-[22px] font-bold text-[#111] mb-0.5">Y</span>
                                                <span className="text-[15px] md:text-[17px] font-bold text-[#111]">우울 증상</span>
                                                <span className="text-[12px] md:text-[13px] text-[#888] font-medium mt-0.5">(종속변수, 결과)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase 3: 연구 결과 */}
                                <div className="w-full flex flex-col items-center pt-3">
                                    <span className="text-gray-400 font-bold text-[13px] mb-1 tracking-widest">연구 결과</span>
                                    <h3 className="text-[#111] font-bold text-[20px] md:text-[22px] mb-2 tracking-tight">
                                        ‘우울 증상 <i className="fa-solid fa-arrows-left-right text-[#F25C43] mx-1 text-[18px]"></i> 인지 기능 저하’로 양방향의 연관성을 가진다
                                    </h3>

                                    <div className="relative w-full max-w-4xl flex flex-col items-center">
                                        <div className="mt-2 w-full text-center">
                                            <span className="inline-block bg-[#F8F9FA] px-10 py-3 rounded-2xl border border-[#FFEBA0] text-[#111] font-extrabold text-[20px] md:text-[22px] tracking-tight">
                                                우울 증상 개선 시, 인지 기능 훈련 병행 권장
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column (Cycle Diagram without card) */}
                    <div className="lg:col-span-4 flex flex-col justify-center items-center h-full">
                        <FadeIn delay={400} className="w-full flex justify-center items-center">

                            <div className="relative w-[340px] h-[440px] flex flex-col items-center justify-between">

                                {/* Dashed Circle Path (Spinning) */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border-[3px] border-dashed border-gray-300 z-0"
                                    style={{ animation: 'spin 30s linear infinite' }}
                                ></div>

                                {/* Left Arrow (Improvement) */}
                                <div className="absolute -left-[20px] top-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-[#F8FAFC] py-4 px-2 rounded-full">
                                    <i className="fa-solid fa-arrow-up text-[#94A3B8] text-[20px] mb-2"></i>
                                    <div className="flex flex-col items-center text-[#94A3B8] font-extrabold text-[15px] space-y-0.5">
                                        <span>개</span>
                                        <span>선</span>
                                    </div>
                                </div>

                                {/* Right Arrow (Influence) */}
                                <div className="absolute -right-[20px] top-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-[#F8FAFC] py-4 px-2 rounded-full">
                                    <div className="flex flex-col items-center text-[#94A3B8] font-extrabold text-[15px] space-y-0.5 mb-2">
                                        <span>영</span>
                                        <span>향</span>
                                    </div>
                                    <i className="fa-solid fa-arrow-down text-[#94A3B8] text-[20px]"></i>
                                </div>

                                {/* Top Bubble */}
                                <div className="relative z-10 bg-white border-[3px] border-[#FFE5E5] shadow-sm rounded-[32px] px-6 py-4 flex flex-col items-center w-[200px] mt-4">
                                    <div className="w-12 h-12 rounded-full bg-[#FFF0F0] text-[#FF4D4D] flex items-center justify-center text-xl mb-2 shadow-sm">
                                        <i className="fa-solid fa-face-frown"></i>
                                    </div>
                                    <span className="text-[#111] font-extrabold text-[17px] tracking-tight mb-0.5">우울 증상</span>
                                    <span className="text-gray-400 text-[12px] font-bold tracking-tight">Depressive Symptoms</span>
                                </div>

                                {/* Center Text */}
                                <div className="relative z-10 text-center bg-[#F8FAFC] py-1.5 px-3 rounded-xl max-w-[220px]">
                                    <p className="text-[#444] font-bold text-[14.5px] leading-[1.5] tracking-tight">
                                        우울하면 인지기능이 저하되고,<br />
                                        인지기능이 저하되면<br />
                                        더 우울해집니다.
                                    </p>
                                </div>

                                {/* Bottom Bubble */}
                                <div className="relative z-10 bg-white border-[3px] border-[#FFF8CC] shadow-sm rounded-[32px] px-6 py-4 flex flex-col items-center w-[200px] mt-4 mb-2">
                                    <div className="w-12 h-12 rounded-full bg-[#FFFBEA] text-[#FFC107] flex items-center justify-center text-xl mb-2 shadow-sm">
                                        <i className="fa-solid fa-brain"></i>
                                    </div>
                                    <span className="text-[#111] font-extrabold text-[17px] tracking-tight mb-0.5">인지 기능</span>
                                    <span className="text-gray-400 text-[12px] font-bold tracking-tight">Cognitive Function</span>
                                </div>

                            </div>

                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
