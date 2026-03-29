import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const BrainFitness: React.FC = () => {
  return (
    <SectionWrapper id="brain-fitness" className="bg-white" pageNumber={7}>
      <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
          <FadeIn>
            <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
              Completeness · 두뇌 건강 운동
            </span>
            <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
              마음 건강의 빈틈을 채우는 마지막 퍼즐, <span className="text-kb-yellow">'두뇌건강운동'</span>
            </h2>
            <p className="text-[#666] font-medium text-[17px] md:text-[19px] tracking-tight">
              인지 훈련이 우울감 개선을 돕는 '상호보완적 선순환'을 완성합니다.
            </p>
          </FadeIn>
        </div>

        <div className="flex justify-center w-full">
          {/* Right: Solution (6 Programs Grid) - Expanded to center */}
          <FadeIn delay={200} className="w-full max-w-5xl">
            <GlassCard className="p-8 bg-[#F3F5F7] border border-gray-200 relative overflow-hidden flex flex-col items-center">
              <h3 className="apple-subtitle text-[#1d1d1f] mb-8 w-full border-b border-gray-200 pb-4">맞춤형 두뇌 건강 운동 프로그램 6종</h3>

              {/* Grid of Games */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 w-full mb-10 py-4">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">기억력과 집중력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-12 translate-x-2 translate-y-2 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-6 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">1</span>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">숫자 순서대로<br />맞추기</span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">작업 기억력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] -rotate-3 translate-x-2 translate-y-2 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] rotate-6 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">9</span>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">숫자 거꾸로<br />맞추기</span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 인식력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-45 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-12 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">단어 바로<br />맞추기</span>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 회상력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-12 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-12 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">단어 회상하기</span>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 분류력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-6 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-full bg-[#FF7E00] -translate-x-2 -translate-y-2 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">단어 분류하기</span>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">논리 기억력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-6 -translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl rounded-bl-none bg-[#8DA548] rotate-12 translate-x-1 -translate-y-2 opacity-90 shadow-sm flex items-center justify-center">
                      <i className="fa-solid fa-clover text-white text-2xl drop-shadow-md"></i>
                    </div>
                  </div>
                  <span className="text-[17px] font-extrabold text-kb-black text-center leading-tight">이야기 기억하기</span>
                </div>
              </div>

              {/* Auto Adjustment Info */}
              <div className="mt-4 w-full bg-white rounded-[2rem] p-6 border border-yellow-100 shadow-sm flex items-center gap-6 shrink-0">
                <div className="w-14 h-14 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 shadow-sm">
                  <i className="fa-solid fa-sliders text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-black text-kb-black mb-1">결과 데이터 기반 난이도 자동 조정</h4>
                  <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                    매회 훈련 결과를 분석하여 <span className="text-kb-yellow font-bold">개인별 인지 수준</span>에 맞는 최적의 난이도로 자동 상향/하향 조정됩니다.
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};