import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const KnowledgePensionOn: React.FC = () => {
    return (
        <SectionWrapper id="knowledge-pension-on" className="bg-[#F8F9FA]" pageNumber={22}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-6 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            VALUE 2. 기억 데이터 중심 통합 라이프케어 · Legacy ON
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-8">
                        Legacy ON — <span className="text-blue-600 underline underline-offset-8 decoration-4">정서적 유산</span>으로의 확장
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 gap-4 mb-8">
                    <FadeIn delay={100}>
                        <GlassCard className="p-6 bg-white border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                                <i className="fa-solid fa-triangle-exclamation text-red-500 text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="text-[22px] font-black text-kb-black mb-1">기존 한계</h3>
                                <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                                    노후 자금 설계 등 '돈' 중심의 지식 전달에 치중되어 있음<br />
                                    <span className="text-red-600 font-black text-[19px]">→ 시니어 고객의 '삶의 정리'라는 정서적 니즈를 채워주지 못함</span>
                                </p>
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                    {/* Track 1: 지식/유산 */}
                    <div className="flex flex-col h-full">
                        <FadeIn delay={200} className="mb-4">
                            <div className="p-6 rounded-[28px] bg-blue-50 border border-blue-100 h-full shadow-sm">
                                <h3 className="text-[20px] font-bold text-blue-600 mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-brain"></i> 지식과 지혜의 디지털 유산화
                                </h3>
                                <p className="text-[18px] text-gray-700 leading-relaxed font-medium">
                                    자산 관리 지식을 넘어, <span className="text-kb-black font-black">부모님의 삶의 지혜와 지식</span>을<br />
                                    <span className="text-kb-black font-black">디지털 자서전</span>으로 기록합니다.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={250} className="flex justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                                <i className="fa-solid fa-arrow-down text-blue-400"></i>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300} className="flex-1">
                            <GlassCard className="p-8 bg-white border-yellow-100 h-full flex flex-col border-t-4 border-t-kb-yellow shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-kb-yellow flex items-center justify-center mb-4 shadow-sm">
                                    <i className="fa-solid fa-book-open text-xl"></i>
                                </div>
                                <h3 className="text-[20px] font-black text-kb-black mb-4 underline underline-offset-4 decoration-kb-yellow/30">디지털 자서전 서비스</h3>
                                <p className="text-[18px] text-gray-800 leading-[1.5] font-medium">
                                    KB의 상속/증여 컨설팅과 연계하여,<br />
                                    다봄을 통해 기록된 <span className="text-kb-black font-black underline decoration-kb-yellow/50 underline-offset-4">‘자서전적 기억’</span>을 <span className="text-kb-black font-black underline decoration-kb-yellow/50 underline-offset-4">’디지털 유산’</span>으로 패키징
                                </p>
                            </GlassCard>
                        </FadeIn>
                    </div>

                    {/* Track 2: 자산/상속 */}
                    <div className="flex flex-col h-full">
                        <FadeIn delay={400} className="mb-4">
                            <div className="p-6 rounded-[28px] bg-blue-50 border border-blue-100 h-full shadow-sm">
                                <h3 className="text-[20px] font-bold text-blue-600 mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-coins"></i> 자산 관리 범위의 정서적 확장
                                </h3>
                                <p className="text-[18px] text-gray-700 leading-relaxed font-medium">
                                    단순 현금 자산 관리를 넘어, <span className="text-kb-black font-black">‘정서적 자산’</span>의 관점까지 포용하여<br />
                                    <span className="text-kb-black font-black">은퇴 후 삶의 의미를 찾을 수 있는 가치</span>를 제공합니다.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={450} className="flex justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                                <i className="fa-solid fa-arrow-down text-blue-400"></i>
                            </div>
                        </FadeIn>

                        <FadeIn delay={500} className="flex-1">
                            <GlassCard className="p-8 bg-white border-yellow-100 h-full flex flex-col border-t-4 border-t-kb-yellow shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-kb-yellow flex items-center justify-center mb-4 shadow-sm">
                                    <i className="fa-solid fa-heart text-xl"></i>
                                </div>
                                <h3 className="text-[20px] font-black text-kb-black mb-4 underline underline-offset-4 decoration-kb-yellow/30">정서적 상속 서비스</h3>
                                <p className="text-[18px] text-gray-800 leading-[1.5] font-medium">
                                    자녀에게 자산을 물려줄 때,<br />
                                    <span className="text-kb-black font-black underline decoration-kb-yellow/50 underline-offset-4">부모님의 삶의 가치관과 기억이 담긴 리포트</span>를 함께 전달하는 <span className="text-kb-black font-black underline decoration-kb-yellow/50 underline-offset-4">‘KB 패밀리 케어’</span> 가치 창출
                                </p>
                            </GlassCard>
                        </FadeIn>
                    </div>
                </div>
            </div >
        </SectionWrapper >
    );
};
