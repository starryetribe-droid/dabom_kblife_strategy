import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const NewProductDevelopment: React.FC = () => {
    return (
        <SectionWrapper id="new-product" className="bg-[#F8F9FA]" pageNumber={31}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-20 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            Section 3. 비즈니스 모델 고도화 · New Product Development
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-16">
                        신규 상품 개발 — 대화 데이터 기반 <span className="text-green-600 underline underline-offset-8 decoration-4">초개인화 상품 특약</span> 제안
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: '마음 건강 할인 특약',
                            icon: 'fa-tags',
                            desc: '기억 훈련 성실 수행(월 20회 이상) 시<br />익월 보험료 3~5% 할인 또는 KB포인트리 환급',
                            theme: 'bg-white'
                        },
                        {
                            title: '골든라이프ON 전용 특약',
                            icon: 'fa-star',
                            desc: '다봄 활동 점수가 높은 고객에게만 가입 기회를 주는<br />"우량체 전용 치매 보험" 등 차별화 상품',
                            theme: 'bg-white'
                        },
                        {
                            title: '데이터 기반 맞춤 제안',
                            icon: 'fa-magnifying-glass-chart',
                            desc: '어르신의 대화 데이터에서 "무릎 통증"이나<br />"안구 건조" 등 실생활 불편함이 감지될 때,<br /><strong>초소액(Mini) 특약</strong>을 맞춤 제안합니다.',
                            theme: 'bg-green-50'
                        }
                    ].map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <GlassCard className={`p-10 h-full flex flex-col border-gray-100 ${item.theme === 'bg-white' ? 'bg-white' : 'bg-green-50 border-green-100'}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${item.theme === 'bg-white' ? 'bg-gray-50 text-kb-black' : 'bg-green-600 text-white'}`}>
                                    <i className={`fa-solid ${item.icon} text-2xl`}></i>
                                </div>
                                <h3 className="text-[24px] font-black text-kb-black mb-6">{item.title}</h3>
                                <p className="text-[19px] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
