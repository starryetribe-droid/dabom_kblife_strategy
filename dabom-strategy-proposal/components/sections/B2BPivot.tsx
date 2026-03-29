import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const B2BPivot: React.FC = () => {
    return (
        <SectionWrapper id="b2b-pivot" className="bg-white relative overflow-hidden" pageNumber={17}>
            <div className="max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
                <FadeIn>
                    <div className="text-center mb-6">
                        <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-1 block">B2B STRATEGY PIVOT</span>
                        <h2 className="apple-title text-[#1d1d1f] mb-2">
                            B2B 전략 전환: <span className="text-kb-yellow">브레인 부스터 & 보편적 웰니스</span>
                        </h2>
                        <p className="text-gray-500 text-[16px] md:text-[17px]">
                            기업 임직원의 생산성과 심리적 안정감을 위한 통합 솔루션
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-4">
                    {/* Card 1: Paradigm Shift */}
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-[1.5rem] p-5 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-yellow-50 text-kb-yellow flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-rocket"></i>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="apple-subtitle text-[#1d1d1f] ]">1. 인지훈련</h3>
                                    <p className="text-kb-yellow font-bold text-[15px]">"치매 예방에서 브레인 부스터로"</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-4 ml-0 md:ml-14 text-[15px] leading-snug">
                                고령층 타겟의 무거운 이미지를 벗고, <span className="font-bold text-gray-900">임직원의 업무 효율 극대화</span>를 위한 솔루션으로 리브랜딩합니다.
                            </p>

                            <div className="flex flex-col md:flex-row gap-3 ml-0 md:ml-14">
                                {/* AS-IS */}
                                <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100">
                                    <div className="text-[15px] font-bold text-gray-400 uppercase mb-2">AS-IS (시니어 타겟)</div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-gray-500 font-medium text-[15px]">명칭</span>
                                        <span className="text-gray-900 font-bold text-[15px]">치매 예방 훈련</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 font-medium text-[15px]">목적</span>
                                        <span className="text-gray-900 font-bold text-[15px]">질병 예방 및 유지</span>
                                    </div>
                                </div>

                                {/* TO-BE */}
                                <div className="flex-1 bg-yellow-50/50 rounded-xl p-3 border border-yellow-100 relative overflow-hidden">
                                    <div className="text-[15px] font-bold text-kb-yellow uppercase mb-2">TO-BE (B2B 임직원)</div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-kb-yellow font-medium text-[15px]">명칭</span>
                                        <span className="text-gray-900 font-extrabold text-[15px]">브레인 부스터</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-kb-yellow font-medium mt-0.5 text-[15px]">목적</span>
                                        <div className="text-right leading-tight">
                                            <span className="text-gray-900 font-bold block text-[15px]">주의력/집중력 강화</span>
                                            <span className="text-gray-900 font-bold block text-[15px]">HQ(건강 지능) 향상</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Card 2: Autobiographical Memory */}
                    <FadeIn delay={200}>
                        <div className="bg-white rounded-[1.5rem] p-5 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-shield-heart"></i>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="apple-subtitle text-[#1d1d1f] ]">2. 자서전적 기억 훈련</h3>
                                    <p className="text-purple-600 font-bold text-[15px]">"낙인 없이 누리는 보편적 복지"</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-4 ml-0 md:ml-14 text-[15px] leading-snug">
                                특정 고위험군을 골라내는 방식이 아닌, 전 직원이 익명으로 즐기는 <span className="font-bold text-gray-900">일상적 경험 중심의 훈련</span>을 제공합니다.
                            </p>

                            <div className="ml-0 md:ml-14 bg-white grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-2 md:gap-x-4 md:gap-y-1 items-center">
                                {/* Header Row - Desktop Only */}
                                <div className="hidden md:block text-[15px] font-bold text-gray-400 border-b border-gray-200 pb-1">구분</div>
                                <div className="hidden md:block text-[15px] font-bold text-gray-400 border-b border-gray-200 pb-1">기존 방식 (고위험군 타겟)</div>
                                <div className="hidden md:block text-[15px] font-bold text-kb-yellow border-b border-gray-200 pb-1">새로운 방식 (전 직원 복지)</div>

                                {/* Row 1 */}
                                <div className="text-gray-500 font-medium md:text-[15px] py-1">제공 대상</div>
                                <div className="bg-gray-50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-700 text-[15px] leading-tight">우울증 등 고위험군</div>
                                <div className="bg-yellow-50/50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-900 font-bold border border-yellow-100 md:border-0 text-[15px] leading-tight">전 임직원 (보편적 복지)</div>

                                {/* Border for desktop */}
                                <div className="hidden md:block col-span-3 border-b border-gray-100"></div>

                                {/* Row 2 */}
                                <div className="text-gray-500 font-medium md:text-[15px] py-1">참여 명분</div>
                                <div className="bg-gray-50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-700 text-[15px] leading-tight">치료 및 상담 권고</div>
                                <div className="bg-yellow-50/50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-900 font-bold border border-yellow-100 md:border-0 text-[15px] leading-tight">업무 몰입도/HQ 관리</div>

                                {/* Border for desktop */}
                                <div className="hidden md:block col-span-3 border-b border-gray-100"></div>

                                {/* Row 3 */}
                                <div className="text-gray-500 font-medium md:text-[15px] py-1">심리적 장벽</div>
                                <div className="bg-gray-50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-700 text-[15px] leading-tight">낙인 효과 우려</div>
                                <div className="bg-yellow-50/50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-900 font-bold border border-yellow-100 md:border-0 text-[15px] leading-tight">익명성 기반 자기계발</div>

                                {/* Border for desktop */}
                                <div className="hidden md:block col-span-3 border-b border-gray-100"></div>

                                {/* Row 4 */}
                                <div className="text-gray-500 font-medium md:text-[15px] py-1">소재</div>
                                <div className="bg-gray-50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-700 text-[15px] leading-tight">사생활 중심 (Private)</div>
                                <div className="bg-yellow-50/50 px-2 py-1 rounded-lg md:bg-transparent md:p-0 text-gray-900 font-bold border border-yellow-100 md:border-0 text-[15px] leading-tight">일상적 경험 (Routine)</div>
                            </div>
                            <p className="mt-5 text-center text-[18px] font-extrabold text-kb-yellow tracking-tight">* 훈련 강도는 유지하되, 소재는 가볍게</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
