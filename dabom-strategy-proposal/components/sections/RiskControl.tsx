import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const RiskControl: React.FC = () => {
    return (
        <SectionWrapper id="risk-control" className="bg-white" pageNumber={29}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            Section 3. 비즈니스 모델 고도화 · Risk Control
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-16">
                        Risk Control — 선제적 케어를 통한 <span className="text-green-600 underline underline-offset-8 decoration-4">보험 손해율 절감</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn delay={100}>
                        <div className="space-y-8">
                            <div className="bg-green-600 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-green-200 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="bg-white/20 px-4 py-1 rounded-full text-[16px] font-bold">Business Impact</span>
                                        </div>
                                        <p className="text-[26px] font-bold leading-relaxed mb-0">
                                            보험업의 본질을 '사후 보상'에서 <span className="text-green-100 underline decoration-2 underline-offset-4">'사전 예방'</span>으로 전환하여<br />
                                            치매 보험의 장기적 손해율을 과학적으로 통제합니다.
                                        </p>
                                    </div>
                                    <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                                        <i className="fa-solid fa-shield-heart text-[48px]"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <h3 className="text-[24px] font-black text-kb-black mb-4">다봄의 솔루션</h3>
                                <p className="text-[18px] text-gray-700 leading-relaxed font-black">
                                    "다봄을 통해 매일 부모님의 정서 상태가 체크되니,<br />
                                    치매 전조 증상인 '노년기 우울증'을<br />
                                    가장 빠르게 발견하여 케어할 수 있습니다."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="p-10 rounded-3xl border border-gray-200 bg-[#FBFBFD] shadow-sm">
                            <h3 className="text-[26px] font-black text-kb-black mb-8 flex items-center gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <i className="fa-solid fa-chart-line text-blue-600"></i>
                                </div>
                                고위험군 집중 케어
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <span className="text-[42px] font-black text-blue-100 leading-none">01</span>
                                    <p className="text-[18px] text-gray-700 font-medium">치매 보험 가입자 중 <strong>우울 척도가 높은 고객</strong>을 실시간 스크리닝합니다.</p>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-[42px] font-black text-blue-100 leading-none">02</span>
                                    <p className="text-[18px] text-gray-700 font-medium">다봄의 <strong>프리미엄 인지 훈련 코스</strong>를 매칭하여 발병 시점을 늦춥니다.</p>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-[42px] font-black text-blue-100 leading-none">03</span>
                                    <p className="text-[18px] text-gray-700 font-medium">보험사의 <strong>지급 준비금 부담을 과학적으로 완화</strong>합니다.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
