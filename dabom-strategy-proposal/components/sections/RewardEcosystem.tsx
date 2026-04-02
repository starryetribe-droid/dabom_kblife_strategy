import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const RewardEcosystem: React.FC = () => {
    return (
        <SectionWrapper id="reward-ecosystem" className="bg-[#FBFBFD]" pageNumber={27}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-kb-yellow text-kb-black px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            VALUE 3. 서비스 시너지
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-12">
                        Synergy — 마음·두뇌 건강 관리가 KB금융그룹 혜택으로 돌아오는 <span className="text-kb-yellow truncate">Lock-in 시스템</span>
                    </h2>
                </FadeIn>

                <div className="relative mt-12 pb-20">
                    {/* Process Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 hidden lg:block -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                        {[
                            { icon: 'fa-list-check', label: '미션 수행', color: 'bg-blue-500' },
                            { icon: 'fa-seedling', label: '캐릭터 성장', color: 'bg-green-500' },
                            { icon: 'fa-coins', label: 'KB포인트리 전환', color: 'bg-amber-500' },
                            { icon: 'fa-percent', label: '보험료 할인·혜택', color: 'bg-kb-yellow' }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 100}>
                                <div className="text-center">
                                    <div className={`w-20 h-20 rounded-full ${item.color} text-white flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 border-4 border-white`}>
                                        <i className={`fa-solid ${item.icon} text-3xl`}></i>
                                    </div>
                                    <p className="text-[18px] font-bold text-kb-black">{item.label}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={400} className="mt-16">
                    <GlassCard className="p-10 bg-white border-yellow-100/50 shadow-2xl relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h3 className="text-[32px] font-black text-kb-black mb-6">"마음·두뇌 건강 관리를 할수록 내 보험료가 싸진다"</h3>
                                <p className="text-[20px] text-gray-600 leading-relaxed">
                                    시니어들은 자신의 노력이 '금전적 가치'로 환산되는 것에 민감합니다.<br />
                                    건강 관리가 KB금융그룹의 실질적인 혜택으로 돌아오게 설계하여<br />
                                    <strong>강력한 락인(Lock-in) 효과</strong>를 창출합니다.
                                </p>
                            </div>
                            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center p-8 text-center text-white shadow-lg">
                                <div className="flex flex-col">
                                    <span className="text-[16px] font-bold mb-1">PLATFORM</span>
                                    <span className="text-[32px] font-black leading-none">LOCK-IN</span>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
