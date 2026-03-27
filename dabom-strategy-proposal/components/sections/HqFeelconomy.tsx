import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const HqFeelconomy: React.FC = () => {
    return (
        <SectionWrapper id="hq-feelconomy" className="bg-white" pageNumber={5}>
            <div className="max-w-[1280px] mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-3 block">STRATEGIC FRAMEWORK</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-kb-black leading-tight mb-4">
                            HQ & Feelconomy
                        </h2>
                        <p className="text-gray-500 text-lg">
                            데이터 중심의 <span className="font-bold text-gray-700">HQ(Health Quotient)</span>와 감정 소비 중심의 <span className="font-bold text-gray-700">필코노미</span>의 결합
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: HQ */}
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                            {/* Background Icon (Decorative) */}
                            <div className="absolute right-[-20px] top-[50%] -translate-y-1/2 opacity-[0.03] pointer-events-none">
                                <i className="fa-solid fa-brain text-[250px]"></i>
                            </div>

                            <div className="text-kb-yellow font-bold tracking-wider text-[14px] uppercase mb-2">CORE VALUE 01</div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">건강 지능 (HQ)</h3>

                            <div className="space-y-6 flex-1">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-solid fa-microchip"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">과학적 관리</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">데이터 중심 지표를 통해 뇌 건강 상태를 정밀하게 분석</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-solid fa-shield-heart"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">선제적 관리</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">2030 세대부터 스트레스와 뇌 지표를 미리 관리하는 문화 조성</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-solid fa-layer-group"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">총체적 관리</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">멘탈과 신체를 통합하여 관리하는 '토탈 케어'</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Card 2: Feelconomy */}
                    <FadeIn delay={200}>
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                            {/* Background Icon (Decorative) */}
                            <div className="absolute right-[-20px] top-[50%] -translate-y-1/2 opacity-[0.03] pointer-events-none">
                                <i className="fa-solid fa-wallet text-[250px]"></i>
                            </div>

                            <div className="text-kb-yellow font-bold tracking-wider text-[14px] uppercase mb-2">CORE VALUE 02</div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">필코노미 (Feelconomy)</h3>

                            <div className="space-y-6 flex-1">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-solid fa-hand-holding-dollar"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">감정비 (기분 + 가성비)</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">소비의 기준이 '내 감정을 얼마나 회복시켜 주는가'로 이동</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-regular fa-face-smile"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">기분 관리의 비즈니스화</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">자신의 기분을 더 긍정적인 상태로 전환하기 위해 재화와 서비스를 구매</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 text-lg">
                                        <i className="fa-solid fa-basket-shopping"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">감정 리테일링</h4>
                                        <p className="text-gray-500 text-[15px] leading-relaxed">심리적 안정감을 주는 루틴과 콘텐츠를 상품화하여 생태계 구축</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
