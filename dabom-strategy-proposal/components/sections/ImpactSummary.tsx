import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const ImpactSummary: React.FC = () => {
    return (
        <SectionWrapper id="impact-summary" className="bg-white" pageNumber={33}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[14px] font-bold uppercase tracking-wider">
                            Section 4. 기대효과 요약
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-16">
                        KB라이프 대상 <span className="text-blue-600 underline underline-offset-8 decoration-4">기대효과 요약</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-8 text-[22px] font-black text-gray-400 w-1/4">구분</th>
                                    <th className="p-8 text-[22px] font-black text-gray-500 w-[37.5%]">다봄 도입 전 (Traditional)</th>
                                    <th className="p-8 text-[22px] font-black text-blue-600 w-[37.5%] bg-blue-50/50">다봄 도입 후 (Digital Transformation)</th>
                                </tr>
                            </thead>
                            <tbody className="text-[19px] font-medium text-gray-700">
                                {[
                                    {
                                        category: '손해율',
                                        before: '치매 발병 후 보험금 청구 시 손실 발생',
                                        after: '선제적 인지 훈련으로 발병 지연 및 손해액 절감'
                                    },
                                    {
                                        category: '고객 접점',
                                        before: '보험금 청구 및 갱신 시에만 연락 (저빈도)',
                                        after: '데일리 대화 및 주간 리포트로 매일 소통 (고빈도)'
                                    },
                                    {
                                        category: '리텐션',
                                        before: '해약 환급금 중심의 수동적 유지',
                                        after: '자녀와 부모를 잇는 정서적 가치 기반 적극적 유지'
                                    },
                                    {
                                        category: '상품 경쟁력',
                                        before: '가격 및 보장 범위 중심의 치열한 경쟁',
                                        after: "'멘탈 케어 솔루션 탑재'라는 독보적 서비스 경쟁력"
                                    }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td className="p-8 font-black text-kb-black bg-gray-50/30">{row.category}</td>
                                        <td className="p-8 text-gray-500">{row.before}</td>
                                        <td className="p-8 text-blue-800 font-bold bg-blue-50/30">{row.after}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
