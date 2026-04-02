import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const FilialPietyInsurance: React.FC = () => {
    return (
        <SectionWrapper id="filial-piety-insurance" className="bg-white text-kb-black" pageNumber={30}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            Section 3. 비즈니스 모델 고도화 · Filial Piety Insurance
                        </span>
                    </div>
                    <h2 className="apple-title text-kb-black leading-snug mb-16">
                        효도 보험 — 자녀와 부모를 잇는 <span className="text-green-600 underline underline-offset-8 decoration-4">정서적 가계도</span>의 완성
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <FadeIn delay={100}>
                        <div className="bg-green-600 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-green-200 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-white/20 px-4 py-1 rounded-full text-[16px] font-bold">Differentiator</span>
                                    </div>
                                    <p className="text-[26px] font-bold leading-relaxed mb-0">
                                        현금 보상을 넘어 <span className="text-green-100 underline decoration-2 underline-offset-4">'부모님의 기억(Digital Legacy)'</span>을 자녀에게 전달하는<br />
                                        강력한 정서적 연결 고리가 보험 계약의 해지율을 획기적으로 낮춥니다.
                                    </p>
                                </div>
                                <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-users-viewfinder text-[48px]"></i>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="h-full group">
                            <div className="p-10 rounded-[40px] bg-green-50 border border-green-100 hover:bg-green-100/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden shadow-sm">
                                <div className="absolute top-[-20px] right-[-20px] text-green-600/5 rotate-12">
                                    <i className="fa-solid fa-heart-pulse text-[200px]"></i>
                                </div>
                                <h3 className="text-[28px] font-black text-green-600 mb-8">정서적 가계도 서비스</h3>
                                <p className="text-[20px] text-gray-700 leading-relaxed mb-10 font-medium">
                                    부모님의 매일 대화 중 의미 있는 '기억'을 선별하여<br />
                                    자녀에게 <strong>'오늘의 효도 카드'</strong> 형태로 전달,<br />
                                    보험 유지의 강력한 정서적 동기를 부여합니다.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'AI 영상 자서전 제작 지원',
                                        '추억의 LP/디지털 앨범 발간',
                                        '가족 간 정서적 가치 기반 계약 유지 유도'
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-4 text-[19px] font-bold text-gray-600">
                                            <i className="fa-solid fa-circle-check text-green-600"></i>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
