import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';

export const CompetitorAnalysis: React.FC = () => {
    return (
        <SectionWrapper id="competitor-analysis" className="bg-[#F8F9FA]" pageNumber={20}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-6 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-[16px] font-bold uppercase tracking-wider">
                            VALUE 1. 플랫폼 경쟁력 강화
                        </span>
                    </div>
                    <h2 className="apple-title text-[#111] leading-snug mb-8">
                        보험앱 유일 ㅡ <span className="text-purple-600 underline underline-offset-8 decoration-4">AI 임상/논문 기반 멘탈케어 패키지</span>
                    </h2>
                </FadeIn>

                <div className="flex flex-col gap-6 w-full">
                    {/* Table Area */}
                    <FadeIn delay={100}>
                        <GlassCard className="bg-white border text-center border-gray-200 rounded-[2rem] shadow-sm overflow-hidden p-0">
                            {/* Table Header */}
                            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_2.5fr_3fr_2.5fr] bg-gray-50/80 border-b border-gray-200 py-4 px-6 text-[15px] font-bold text-gray-600">
                                <div className="text-left pl-4">보험사</div>
                                <div className="text-left">서비스명</div>
                                <div className="text-left">제공 형태</div>
                                <div className="text-left">마음건강</div>
                                <div className="text-left">인지훈련</div>
                                <div className="text-left">비고</div>
                            </div>

                            {/* Row 1: 삼성생명 */}
                            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_2.5fr_3fr_2.5fr] border-b border-gray-100 py-6 px-6 items-center">
                                <div className="text-left pl-4 font-black text-gray-900 text-[17px]">삼성생명</div>
                                <div className="text-left font-bold text-gray-800 text-[16px]">더헬스</div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-[14px] font-bold">
                                        <i className="fa-solid fa-mobile-screen"></i> 앱
                                    </span>
                                </div>
                                <div className="text-left text-gray-600 text-[14px] leading-relaxed pr-6 word-keep">
                                    감정·기분 일기 기록, 명상·ASMR 등 마음챙김 콘텐츠
                                </div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400 font-bold text-[14px]">
                                        <i className="fa-solid fa-xmark"></i>
                                    </span>
                                </div>
                                <div className="text-left text-gray-400 text-[13px] leading-relaxed word-keep">
                                    전용 앱, 웰니스 수준으로 임상/논문 기반 X
                                </div>
                            </div>

                            {/* Row 2: 신한라이프 */}
                            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_2.5fr_3fr_2.5fr] border-b border-gray-100 py-6 px-6 items-center">
                                <div className="text-left pl-4 font-black text-gray-900 text-[17px]">신한라이프</div>
                                <div className="text-left font-bold text-gray-800 text-[16px]">헬스케어 서비스</div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[14px] font-bold">
                                        <i className="fa-solid fa-phone"></i> 전화
                                    </span>
                                </div>
                                <div className="text-left text-gray-600 text-[14px] leading-relaxed pr-6 word-keep">
                                    전문 심리상담사 전화 심리상담
                                </div>
                                <div className="text-left pr-4">
                                    <div className="p-3 border border-orange-100 bg-orange-50/50 rounded-xl text-orange-600 text-[13px] font-semibold leading-snug word-keep">
                                        <span className="text-orange-500 mr-1.5 text-[11px]"><i className="fa-solid fa-triangle-exclamation"></i></span>
                                        경도인지장애 판정 후 인지훈련 프로그램 6개월 제공<br />(예방 아닌 진단 후 재활 성격)
                                    </div>
                                </div>
                                <div className="text-left text-gray-400 text-[13px] leading-relaxed word-keep">
                                    오프라인/전화 상담을 통한 서비스 제공
                                </div>
                            </div>

                            {/* Row 3: AIA생명 */}
                            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_2.5fr_3fr_2.5fr] border-b border-gray-100 py-6 px-6 items-center">
                                <div className="text-left pl-4 font-black text-gray-900 text-[17px]">AIA생명</div>
                                <div className="text-left font-bold text-gray-800 text-[16px]">AIA Vitality</div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-[14px] font-bold">
                                        <i className="fa-solid fa-mobile-screen"></i> 앱
                                    </span>
                                </div>
                                <div className="text-left text-gray-600 text-[14px] leading-relaxed pr-6 word-keep">
                                    명상·수면관리 콘텐츠
                                </div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400 font-bold text-[14px]">
                                        <i className="fa-solid fa-xmark"></i>
                                    </span>
                                </div>
                                <div className="text-left text-gray-400 text-[13px] leading-relaxed word-keep">
                                    건강행동 게이미피케이션 + 리워드 연계
                                </div>
                            </div>

                            {/* Row 4: KB라이프생명 */}
                            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_2.5fr_3fr_2.5fr] py-6 px-6 items-center bg-purple-50/40">
                                <div className="text-left pl-4 font-black text-purple-700 text-[17px]">KB라이프생명</div>
                                <div className="text-left font-bold text-gray-900 text-[16px] word-keep">KB골든라이프 ON</div>
                                <div className="text-left flex items-center">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-[14px] font-bold">
                                        <i className="fa-solid fa-mobile-button"></i> 모바일 웹/앱
                                    </span>
                                </div>
                                <div className="text-left text-gray-800 font-bold text-[14px] leading-relaxed pr-6 word-keep">
                                    명상·이완 등 마음챙김 콘텐츠
                                </div>
                                <div className="text-left text-gray-800 font-bold text-[14px] leading-relaxed pr-6 word-keep">
                                    실비아헬스 인지훈련 프로그램 연동
                                </div>
                                <div className="text-left text-purple-700/70 font-bold text-[13px] leading-relaxed word-keep">
                                    단순 콘텐츠 / 공개 연구 결과 기반 설계
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Differentiator Area */}
                    <FadeIn delay={200} className="mt-4">
                        <div className="border-t-[3px] border-dashed border-orange-400 relative rounded-b-[2rem] pt-12 px-8 pb-10 bg-orange-50/40">
                            {/* Badge */}
                            <div className="absolute top-0 left-8 -translate-y-1/2 bg-orange-500 text-white font-bold px-6 py-2 rounded-full text-[16px] shadow-md flex items-center gap-2">
                                <i className="fa-solid fa-play text-[11px]"></i> 다봄 탑재 시 차별화되는 영역
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Col 1 */}
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col h-full">
                                    <div className="text-orange-500 font-black text-[15px] mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <i className="fa-solid fa-comments"></i> 마음건강
                                    </div>
                                    <h4 className="text-gray-900 font-black text-[20px] leading-tight mb-4 word-keep">
                                        <span className="text-purple-600 mr-2 text-[22px]">+</span>자서전적 기억 훈련 AI 챗봇
                                    </h4>
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-medium word-keep">
                                        14만 건 자서전적 기억 데이터 학습 기반,<br />정서적 교감 중심의 맞춤형 AI 대화 서비스
                                    </p>
                                </div>

                                {/* Col 2 */}
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col h-full">
                                    <div className="text-orange-500 font-black text-[15px] mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <i className="fa-solid fa-brain"></i> 인지훈련
                                    </div>
                                    <h4 className="text-gray-900 font-black text-[19px] leading-snug mb-4 word-keep">
                                        <span className="text-purple-600 mr-2 text-[22px]">+</span>고대 자체 개발 자동 난이도 조절 인지훈련 프로그램
                                    </h4>
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-medium word-keep">
                                        데이터 기반 개인별 인지 수준 맞춤형 난이도 자동 조정<br />(한국심리학회 공식 인증 보유)
                                    </p>
                                </div>

                                {/* Col 3 */}
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col h-full">
                                    <div className="text-orange-500 font-black text-[15px] mb-3 uppercase tracking-wider">비고</div>
                                    <h4 className="text-gray-900 font-black text-[19px] leading-snug mb-4 word-keep">
                                        고대 임상/논문/특허 기반 전문 설계
                                    </h4>
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-medium word-keep">
                                        RCT 설계 검증 완료, 우울 40% · 불안 34% 감소 임상 효과로<br />입증된 효과성 및 자체 논문, 특허 기반 설계
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
