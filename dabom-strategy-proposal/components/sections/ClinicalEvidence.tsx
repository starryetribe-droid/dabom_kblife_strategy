import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import findingMemoriesImg from '../../src/assets/finding_memories_header_or_full.png';

export const ClinicalEvidence: React.FC = () => {
  return (
    <SectionWrapper id="clinical-evidence" className="bg-white relative overflow-hidden" pageNumber={4}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>

      <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-8">
          <FadeIn>
            <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[16px] font-bold tracking-widest uppercase mb-6 inline-block">
              Technology · 핵심 기술
            </span>
            <h2 className="apple-title text-kb-black leading-snug mb-3 tracking-tight break-keep">
              자서전적 기억 훈련 알고리즘이 담긴, 다봄 AI 챗봇
            </h2>
            <p className="text-kb-black font-medium text-[18px] md:text-[19px] tracking-tight break-keep">
              고려대 심리학부가 설계한 자서전적 기억 훈련을 AI 챗봇을 통해 대화로 실현
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Content (Col 1-8) - 다봄 하이브리드 AI 작동 원리 */}
          <div className="lg:col-span-8 flex flex-col pt-1">

            {/* Top Row: 3 Columns for Engine, Capabilities, Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">

              {/* Column 1: 엔진 구조 */}
              <FadeIn delay={100} className="h-full">
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-6 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-kb-yellow text-kb-black text-[16px] font-bold px-3 py-1 rounded">엔진</span>
                    <h3 className="text-kb-black font-bold text-[20px] tracking-tight">AI 하이브리드 엔진</h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {/* Step 1: Input */}
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-comment-dots text-[#FFBC00] text-[16px]"></i>
                        <span className="text-[#111] font-bold text-[17px] tracking-tight">사용자 대화 인풋</span>
                      </div>
                      <p className="text-[#666] text-[16px] font-medium leading-snug">대화 및 기억 회상 데이터 수집</p>
                    </div>

                    <div className="flex justify-center"><i className="fa-solid fa-chevron-down text-gray-300 text-[15px]"></i></div>

                    {/* Step 2: Evaluation */}
                    <div className="bg-[#FFFBF0] rounded-2xl p-5 border-2 border-[#FFBC00]/20 relative">
                      <div className="absolute -top-3.5 left-6 bg-[#FFBC00] text-white text-[12px] font-black px-3 py-1 rounded-full uppercase">Proprietary</div>
                      <div className="space-y-3 mt-2">
                        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#FFBC00]/10">
                          <span className="text-[16px] font-bold text-[#111]">기억 구체성 평가</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center"><i className="fa-solid fa-chevron-down text-gray-300 text-[15px]"></i></div>

                    {/* Step 3: LLM */}
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-wand-magic-sparkles text-[#111] text-[16px]"></i>
                        <span className="text-[#111] font-bold text-[17px] tracking-tight">맞춤형 피드백 생성</span>
                      </div>
                      <p className="text-[#666] text-[16px] font-medium leading-snug">LLM 기반 개인 맞춤형 피드백 생성</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Column 2: 핵심 역량 */}
              <FadeIn delay={200} className="h-full">
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-6 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-kb-yellow text-kb-black text-[16px] font-bold px-3 py-1 rounded">역량</span>
                    <h3 className="text-kb-black font-bold text-[20px] tracking-tight">핵심 기술 역량</h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex-1 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-kb-accent text-kb-yellow flex items-center justify-center">
                          <i className="fa-solid fa-database text-[16px]"></i>
                        </div>
                        <span className="text-kb-black font-bold text-[18px]">140,000건 데이터 학습</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-relaxed pl-10 break-keep">자서전적 기억 데이터 <span className="whitespace-nowrap">학습 완료</span></p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex-1 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-kb-accent text-kb-yellow flex items-center justify-center">
                          <i className="fa-solid fa-microchip text-[16px]"></i>
                        </div>
                        <span className="text-kb-black font-bold text-[18px]">자체 모델 개발</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-relaxed pl-10 break-keep">기억 구체성 평가 알고리즘 보유</p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex-1 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-kb-accent text-kb-yellow flex items-center justify-center">
                          <i className="fa-solid fa-file-code text-[16px]"></i>
                        </div>
                        <span className="text-kb-black font-bold text-[18px]">LLM 파인튜닝</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-relaxed pl-10 break-keep">피드백 생성 엔진 <span className="whitespace-nowrap">자체 최적화</span></p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Column 3: 차별점 */}
              <FadeIn delay={300} className="h-full">
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-6 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-kb-yellow text-kb-black text-[16px] font-bold px-3 py-1 rounded">차별점</span>
                    <h3 className="text-kb-black font-bold text-[20px] tracking-tight">기술 차별화 포인트</h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex-1 flex flex-col justify-center transition-all hover:bg-kb-accent/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-kb-accent text-kb-yellow flex items-center justify-center">
                          <i className="fa-solid fa-shield-halved text-[14px]"></i>
                        </div>
                        <span className="text-kb-black font-bold text-[16px] tracking-tight whitespace-nowrap">단순 챗봇과의 차별</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-snug pl-10 break-keep">기억의 구체성을 정량적으로 평가하는 <span className="whitespace-nowrap">독자적 모델 보유</span></p>
                    </div>

                    <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex-1 flex flex-col justify-center transition-all hover:bg-kb-accent/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-kb-accent text-kb-yellow flex items-center justify-center">
                          <i className="fa-solid fa-layer-group text-[14px]"></i>
                        </div>
                        <span className="text-kb-black font-bold text-[16px] tracking-tight whitespace-nowrap">이중 엔진 구조</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-snug pl-10 break-keep">기억의 구체성 평가 모델과 생성형 LLM의 <span className="whitespace-nowrap">유기적 결합</span></p>
                    </div>

                    <div className="bg-white border border-kb-gray/10 rounded-[16px] p-4 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-kb-gray text-white text-[16px] font-bold px-2 py-0.5 rounded uppercase tracking-wider scale-75 origin-left">논문 출판</span>
                      </div>
                      <p className="text-kb-gray text-[16px] font-bold leading-tight break-keep">
                        "우울한 노인을 대상으로 한 앱 기반 <span className="whitespace-nowrap">자서전적 기억 훈련의 효과"</span>
                      </p>
                    </div>

                    <div className="bg-[#FFFBF0] rounded-[16px] p-4 flex-1 flex flex-col justify-center border border-[#FFBC00]/30 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#FFBC00] text-kb-black text-[16px] font-bold px-2 py-0.5 rounded scale-75 origin-left">임상 검증</span>
                        <span className="text-kb-black font-bold text-[16px] tracking-tight">실증 효과</span>
                      </div>
                      <div className="space-y-1 px-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] font-medium text-[#555]">우울증상 감소</span>
                          <span className="text-[18px] font-black text-green-600">40%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] font-medium text-[#555]">불안증상 감소</span>
                          <span className="text-[18px] font-black text-green-600">34%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] font-medium text-[#555]">인지기능 향상</span>
                          <span className="text-[18px] font-black text-[#FFBC00]">16%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right: Phone Mockup (Col 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <FadeIn delay={500} className="relative mt-0 lg:-mt-10">
              {/* iPhone Mockup - Scaled for better fit */}
              <div className="relative w-[280px] md:w-[330px] h-[560px] md:h-[660px] bg-white rounded-[3rem] shadow-2xl border-[6px] border-white ring-1 ring-gray-100 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                {/* Screen Content */}
                <div className="w-full h-full bg-[#FFFBF5] relative flex flex-col font-sans">
                  <img
                    src={findingMemoriesImg}
                    alt="Memory Finding Chat UI"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute -bottom-4 -left-8 bg-white shadow-floating border border-gray-100 p-4 rounded-[2rem] flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div>
                  <span className="block text-[17px] font-black text-kb-black whitespace-nowrap">검증된 AI 엔진</span>
                  <span className="text-[16px] text-gray-400 whitespace-nowrap">Privacy & Security Certified</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper >
  );
};
