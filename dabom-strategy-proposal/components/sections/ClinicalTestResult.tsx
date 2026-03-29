import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const ClinicalTestResult: React.FC = () => {
    return (
        <SectionWrapper id="clinical-test-result" className="bg-white" pageNumber={5}>
            <div className="max-w-[1640px] mx-auto px-10 w-full relative z-10 flex flex-col justify-center h-full">

                {/* Section Header */}
                <div className="text-left mb-10">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Clinical Validation
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
                            임상 테스트로 검증된 우울 · 인지 기능 개선 효과
                        </h2>
                        <p className="text-[#666] font-medium text-[17px] md:text-[19px] tracking-tight">
                            RCT(무작위 대조 시험) 설계 · 65 세 이상 시니어 · 2주간 자유 사용 후 측정
                        </p>
                    </FadeIn>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <FadeIn delay={100} className="h-full">
                        <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col justify-center border border-gray-100/50 h-full">
                            <span className="text-[#777] font-semibold text-[15px] mb-3 tracking-tight">우울 증상 감소</span>
                            <div className="flex items-baseline gap-1 mb-2 tracking-tighter">
                                <span className="text-[56px] lg:text-[64px] font-extrabold text-[#111] leading-none">40</span>
                                <span className="text-[24px] lg:text-[28px] font-bold text-[#111]">%</span>
                                <span className="text-[20px] lg:text-[24px] font-bold text-[#F25C43] ml-1">▼</span>
                            </div>
                            <span className="text-[#F25C43] font-bold text-[14px] flex items-center gap-1 tracking-tight">
                                통제집단(기존 인지훈련) 대비 유의미한 감소 확인
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} className="h-full">
                        <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col justify-center border border-gray-100/50 h-full">
                            <span className="text-[#777] font-semibold text-[15px] mb-3 tracking-tight">불안 증상 감소</span>
                            <div className="flex items-baseline gap-1 mb-2 tracking-tighter">
                                <span className="text-[56px] lg:text-[64px] font-extrabold text-[#111] leading-none">34</span>
                                <span className="text-[24px] lg:text-[28px] font-bold text-[#111]">%</span>
                                <span className="text-[20px] lg:text-[24px] font-bold text-[#F25C43] ml-1">▼</span>
                            </div>
                            <span className="text-[#F25C43] font-bold text-[14px] flex items-center gap-1 tracking-tight">
                                통제집단(기존 인지훈련) 대비 유의미한 감소 확인
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} className="h-full">
                        <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col justify-center border border-gray-100/50 h-full">
                            <span className="text-[#777] font-semibold text-[15px] mb-3 tracking-tight">인지 기능 향상</span>
                            <div className="flex items-baseline gap-1 mb-2 tracking-tighter">
                                <span className="text-[56px] lg:text-[64px] font-extrabold text-[#111] leading-none">16</span>
                                <span className="text-[24px] lg:text-[28px] font-bold text-[#111]">%</span>
                                <span className="text-[20px] lg:text-[24px] font-bold text-[#29CC7A] ml-1">▲</span>
                            </div>
                            <span className="text-[#29CC7A] font-bold text-[14px] flex items-center gap-1 tracking-tight">
                                자서전적 기억 및 언어 기억 유의미한 증가
                            </span>
                        </div>
                    </FadeIn>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                    <FadeIn delay={400} className="lg:col-span-8 h-full">
                        <div className="bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h3 className="apple-subtitle text-[#111] font-bold mb-6">임상 검증 프로세스</h3>
                            <div className="flex flex-1 items-center justify-between">
                                <div className="bg-[#F8F9FA] text-[#555] font-bold text-[15px] px-5 py-4 rounded-2xl border border-gray-200 shadow-sm whitespace-nowrap">테스트 신청</div>
                                <i className="fa-solid fa-chevron-right text-gray-300"></i>
                                <div className="bg-[#F8F9FA] text-[#555] font-bold text-[15px] px-5 py-4 rounded-2xl border border-gray-200 shadow-sm whitespace-nowrap">사전 검사</div>
                                <i className="fa-solid fa-chevron-right text-[#29CC7A]/50"></i>
                                <div className="bg-[#F0FDF4] border-2 border-[#29CC7A] text-[#29CC7A] font-bold text-[15px] px-6 py-3 rounded-2xl shadow-sm whitespace-nowrap text-center">
                                    APP 자유 사용<br /><span className="text-[13px] font-medium tracking-tight mt-1 inline-block">(2 주)</span>
                                </div>
                                <i className="fa-solid fa-chevron-right text-[#29CC7A]/50"></i>
                                <div className="bg-[#F8F9FA] text-[#555] font-bold text-[15px] px-5 py-4 rounded-2xl border border-gray-200 shadow-sm whitespace-nowrap">사후 검사</div>
                                <i className="fa-solid fa-chevron-right text-gray-300"></i>
                                <div className="bg-[#F8F9FA] text-[#555] font-bold text-[15px] px-5 py-4 rounded-2xl border border-gray-200 shadow-sm whitespace-nowrap">효과성 분석</div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={500} className="lg:col-span-4 h-full">
                        <div className="bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="apple-subtitle text-[#111] font-bold">임상 수행 기관</h3>
                                <span className="bg-[#ECFDF5] text-[#059669] px-3 py-1 text-[13px] font-bold rounded-lg border border-[#A7F3D0]">공공기관</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-50 text-[#555] font-semibold text-[14px] px-4 py-2 rounded-xl">사단법인 대한노인회</span>
                                <span className="bg-gray-50 text-[#555] font-semibold text-[14px] px-4 py-2 rounded-xl">강북구 가족센터</span>
                                <span className="bg-gray-50 text-[#555] font-semibold text-[14px] px-4 py-2 rounded-xl">길음 종합사회복지관</span>
                                <span className="bg-gray-50 text-[#555] font-semibold text-[14px] px-4 py-2 rounded-xl">생명의전화 종합사회복지관</span>
                                <span className="bg-gray-50 text-[#555] font-semibold text-[14px] px-4 py-2 rounded-xl">서울시립 강북구 종합노인복지관</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Bottom Row */}
                <FadeIn delay={600}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[#059669] font-bold text-[16px]">
                                <i className="fa-solid fa-circle-check text-lg"></i>
                                <span>국제적 RCT 설계 검증</span>
                            </div>
                            <p className="text-[#888] font-medium text-[13px] tracking-tight ml-7">Randomized Controlled Trial 방식 적용</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-gray-100 pl-6">
                            <div className="flex items-center gap-2 text-[#059669] font-bold text-[16px]">
                                <i className="fa-solid fa-circle-check text-lg"></i>
                                <span>통계적 검증력 확보한 표본 수 설계</span>
                            </div>
                            <p className="text-[#888] font-medium text-[13px] tracking-tight ml-7">Total N=30, Pre-Post 차이 기준 유의미한 결과</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-gray-100 pl-6">
                            <div className="flex items-center gap-2 text-[#059669] font-bold text-[16px]">
                                <i className="fa-solid fa-circle-check text-lg"></i>
                                <span>현장 기반 효과성 검증 (필드 테스트)</span>
                            </div>
                            <p className="text-[#888] font-medium text-[13px] tracking-tight ml-7">연구실이 아닌 실제 사용자 환경에서 자유 사용 후 측정</p>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </SectionWrapper>
    );
};
