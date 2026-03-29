import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import findingMemoriesImg from '../../src/assets/finding_memories_header_or_full.png';

export const ClinicalEvidence: React.FC = () => {
  return (
    <SectionWrapper id="clinical-evidence" className="bg-white relative overflow-hidden" pageNumber={4}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>

      <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
          <FadeIn>
            <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
              Technology · 핵심 기술
            </span>
            <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
              자서전적 기억 훈련 알고리즘이 담긴, 다봄 AI 챗봇
            </h2>
            <p className="text-[#666] font-medium text-[18px] md:text-[20px] tracking-tight">
              고려대 심리학부가 설계한 자서전적 기억 훈련을 AI 챗봇을 통해 대화로 실현
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Content (Col 1-8) - 다봄 하이브리드 AI 작동 원리 */}
          <div className="lg:col-span-8 flex flex-col pt-4">

            {/* Top Row: 3 Columns for Engine, Capabilities, Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">

              {/* Column 1: 엔진 구조 */}
              <FadeIn delay={100} className="h-full">
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-8 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="bg-[#111] text-white text-[14px] font-bold px-2 py-0.5 rounded">엔진</span>
                    <h3 className="text-[#111] font-bold text-[20px] tracking-tight">AI 하이브리드 엔진</h3>
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
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-8 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="bg-[#111] text-white text-[14px] font-bold px-2 py-0.5 rounded">역량</span>
                    <h3 className="text-[#111] font-bold text-[20px] tracking-tight">핵심 기술 역량</h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="bg-[#1A1A1A] rounded-2xl p-6 flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-database text-gray-400 text-[16px]"></i>
                        <span className="text-white font-bold text-[17px]">140,000건 데이터 학습</span>
                      </div>
                      <p className="text-gray-400 text-[16px] font-medium leading-relaxed pl-7">자서전적 기억 데이터 학습 완료</p>
                    </div>

                    <div className="bg-[#1A1A1A] rounded-2xl p-6 flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-microchip text-gray-400 text-[16px]"></i>
                        <span className="text-white font-bold text-[17px]">자체 모델 개발</span>
                      </div>
                      <p className="text-gray-400 text-[16px] font-medium leading-relaxed pl-7">기억 구체성 평가 알고리즘 보유</p>
                    </div>

                    <div className="bg-[#1A1A1A] rounded-2xl p-6 flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-file-code text-gray-400 text-[16px]"></i>
                        <span className="text-white font-bold text-[17px]">LLM 파인튜닝</span>
                      </div>
                      <p className="text-gray-400 text-[16px] font-medium leading-relaxed pl-7">피드백 생성 엔진 자체 최적화</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Column 3: 차별점 */}
              <FadeIn delay={300} className="h-full">
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-8 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="bg-[#111] text-white text-[14px] font-bold px-2 py-0.5 rounded">차별점</span>
                    <h3 className="text-[#111] font-bold text-[20px] tracking-tight">기술 차별화 포인트</h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-shield-halved text-[#333]"></i>
                        <span className="text-[#111] font-bold text-[17px] tracking-tight">단순 챗봇과의 차별</span>
                      </div>
                      <p className="text-[#666] text-[16px] font-medium leading-relaxed">기억의 구체성을 정량적으로 평가하는 독자적 모델 보유</p>
                    </div>

                    <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-layer-group text-[#333]"></i>
                        <span className="text-[#111] font-bold text-[17px] tracking-tight">이중 엔진 구조</span>
                      </div>
                      <p className="text-[#666] text-[16px] font-medium leading-relaxed">기억의 구체성 평가 모델과<br />생성형 LLM의 유기적 결합</p>
                    </div>

                    <div className="bg-[#1A1A1A] rounded-[24px] p-6 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-white text-[#111] text-[12px] font-bold px-2 py-0.5 rounded">논문 출판</span>
                      </div>
                      <p className="text-gray-300 text-[16px] font-medium leading-relaxed overflow-hidden">우울한 노인을 대상으로 한 어플리케이션 기반 자서전적 기억 훈련의 효과</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right: Phone Mockup (Col 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <FadeIn delay={500} className="relative -mt-16 lg:-mt-24">
              {/* iPhone Mockup - Enlarged and moved up to use top space */}
              <div className="relative w-[320px] md:w-[380px] h-[640px] md:h-[760px] bg-white rounded-[3.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-100 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
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
              <div className="absolute -bottom-4 -left-12 bg-white shadow-floating border border-gray-100 p-6 rounded-[2.5rem] flex items-center gap-4 z-20">
                <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div>
                  <span className="block text-[18px] font-black text-kb-black whitespace-nowrap">검증된 AI 엔진</span>
                  <span className="text-[14px] text-gray-400 whitespace-nowrap">Privacy & Security Certified</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper >
  );
};
