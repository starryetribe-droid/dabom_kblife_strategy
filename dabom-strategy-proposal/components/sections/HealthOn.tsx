import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const HealthOn: React.FC = () => {
    return (
        <SectionWrapper id="health-on" className="bg-white" pageNumber={21}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-6 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            VALUE 2. 기억 데이터 중심 통합 라이프케어 · Health ON
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-10 text-[42px] font-black tracking-tight">
                        Health ON — <span className="text-blue-600 underline underline-offset-8 decoration-4">초개인화 라이프-로그</span> 케어
                    </h2>
                </FadeIn>

                <div className="flex flex-col gap-6">
                    {/* Top Box: 복합 데이터 교차 분석 */}
                    <FadeIn delay={100}>
                        <GlassCard className="p-8 lg:p-10 bg-white border border-gray-200 flex flex-col items-center text-center shadow-lg rounded-[2.5rem]">
                            <h3 className="text-[32px] font-black w-full text-left mb-4 text-kb-black lg:text-[36px] leading-tight">
                                4개 지표 복합 분석                            </h3>
                            <p className="text-[20px] text-gray-600 w-full text-left mb-8 font-medium leading-relaxed">
                                다봄 앱 내 데이터와 Health ON 걸음 수 데이터를 교차 분석하여 심신 컨디션 저하를 조기에 감지하고 선제적 케어를 제공합니다.
                            </p>

                            {/* 4 Pills */}
                            <div className="flex flex-wrap gap-4 w-full justify-start mb-8">
                                <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100 transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="text-[18px] font-bold text-gray-800">마음 검진 우울 지수</span>
                                </div>
                                <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100 transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                    <span className="text-[18px] font-bold text-gray-800">두뇌 운동 정답률/참여율</span>
                                </div>
                                <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100 transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-[18px] font-bold text-gray-800">앱 접속 빈도·체류 시간</span>
                                </div>
                                <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100 transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-[18px] font-bold text-gray-800">걸음 수 변화 추이</span>
                                </div>
                            </div>

                            {/* Scenario Box */}
                            <div className="w-full rounded-2xl bg-orange-50/70 border-l-8 border-orange-500 p-8 text-left mb-10">
                                <h4 className="text-orange-500 font-bold text-[20px] mb-4 flex items-center gap-3">
                                    <span className="text-[22px]">💡</span> 시나리오 예시
                                </h4>
                                <div className="flex flex-col gap-6 items-start">
                                    <div className="w-full">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-4 mb-8">
                                            <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-[17px] shadow-sm">마음 검진 우울 지수 2회 연속 상승</span>
                                            <span className="text-gray-400 font-black text-xl">+</span>
                                            <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-[17px] shadow-sm">두뇌 운동 정답률 하락</span>
                                            <span className="text-gray-400 font-black text-xl">+</span>
                                            <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-[17px] shadow-sm">걸음 수 감소 추세</span>
                                            <span className="text-gray-400 font-black text-xl">+</span>
                                            <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-[17px] shadow-sm mr-2">앱 접속 빈도 저하</span>

                                            <p className="text-[20px] text-gray-900 font-black shrink-0">
                                                → <span className="text-orange-600 border-b-2 border-orange-500">심신 컨디션 저하 패턴</span> 감지
                                            </p>
                                        </div>

                                        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-orange-100 flex gap-4 items-center">
                                            <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                                                <i className="fa-solid fa-comment-dots text-blue-500 text-xl"></i>
                                            </div>
                                            <p className="text-[18px] font-bold text-blue-800 leading-snug">
                                                "요즘 컨디션이 조금 달라진 것 같아요. 오늘 한번 가볍게 마음 검진 해보실래요?"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full border-t border-dashed border-gray-300 mb-10"></div>

                            {/* Process Flow */}
                            <div className="w-full grid grid-cols-4 gap-6 px-8 relative">
                                {/* Arrows */}
                                <div className="absolute top-6 left-[20%] w-[10%] flex justify-center text-blue-400"><i className="fa-solid fa-arrow-right text-lg"></i></div>
                                <div className="absolute top-6 left-[45%] w-[10%] flex justify-center text-blue-400"><i className="fa-solid fa-arrow-right text-lg"></i></div>
                                <div className="absolute top-6 left-[70%] w-[10%] flex justify-center text-blue-400"><i className="fa-solid fa-arrow-right text-lg"></i></div>

                                {/* Item 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black text-xl flex items-center justify-center mb-4 shadow-sm border border-blue-200">1</div>
                                    <h5 className="font-black text-gray-900 text-[19px] mb-2">데이터 수집</h5>
                                    <p className="text-gray-500 text-[16px] font-medium leading-relaxed">4개 지표 모니터링</p>
                                </div>
                                {/* Item 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black text-xl flex items-center justify-center mb-4 shadow-sm border border-blue-200">2</div>
                                    <h5 className="font-black text-gray-900 text-[19px] mb-2">패턴 감지</h5>
                                    <p className="text-gray-500 text-[16px] font-medium leading-relaxed">AI 이상 패턴 탐지</p>
                                </div>
                                {/* Item 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black text-xl flex items-center justify-center mb-4 shadow-sm border border-blue-200">3</div>
                                    <h5 className="font-black text-gray-900 text-[19px] mb-2">선제 개입</h5>
                                    <p className="text-gray-500 text-[16px] font-medium leading-relaxed">개인화 푸시 추천</p>
                                </div>
                                {/* Item 4 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black text-xl flex items-center justify-center mb-4 shadow-sm border border-blue-200">4</div>
                                    <h5 className="font-black text-gray-900 text-[19px] mb-2">케어 실행</h5>
                                    <p className="text-gray-500 text-[16px] font-medium leading-relaxed">마음 검진/기억 연결</p>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
