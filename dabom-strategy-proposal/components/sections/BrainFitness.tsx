import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const BrainFitness: React.FC = () => {
  return (
    <SectionWrapper id="brain-fitness" className="bg-white" pageNumber={7}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">Completeness</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-kb-black leading-tight">
              마음 건강의 빈틈을 채우는<br className="hidden md:block" /> 마지막 퍼즐, <span className="text-kb-yellow">'Brain Fitness'</span>
            </h2>
            <p className="text-kb-gray max-w-4xl mx-auto font-medium text-[17px] md:text-[19px] leading-relaxed break-keep">
              우울감 완화가 인지 기능 유지에 기여하고, 인지 훈련이 다시 우울감 개선을 돕는<br />
              <span className="text-kb-black font-bold border-b-2 border-kb-yellow/20">'상호보완적 선순환'</span>을 완성합니다.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Theory (The Cycle) - Based on Page 18 */}
          <FadeIn delay={100} className="h-full">
            <GlassCard className="p-8 h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 relative overflow-hidden flex flex-col items-center">
              {/* Evidence Tag: Changed position to avoid overlap with title */}
              <div className="absolute top-0 right-0 bg-yellow-50 text-kb-yellow text-[13px] md:text-[15px] font-bold px-4 py-1.5 rounded-bl-2xl border-l border-b border-yellow-100 z-20">
                Evidence: JAMA Network Open
              </div>

              {/* Added top padding to prevent overlap with the Evidence tag */}
              <h3 className="text-2xl font-bold text-kb-black mb-4 w-full text-center shrink-0 pt-8 md:pt-4">
                우울·인지 기능의 양방향 상관관계
              </h3>

              <div className="flex-1 flex items-center justify-center w-full py-20">
                <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px]">
                  {/* Rotating Cycle Graphic */}
                  <div className="absolute inset-0 border-[3px] border-dashed border-gray-200 rounded-full animate-[spin_12s_linear_infinite]"></div>

                  {/* Top Node: Depression */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[2rem] shadow-floating border border-red-100 flex flex-col items-center w-52 z-10">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2">
                      <i className="fa-solid fa-face-frown-open text-2xl"></i>
                    </div>
                    <span className="text-[17px] font-extrabold text-gray-800">우울 증상</span>
                    {/* Applied whitespace-nowrap and tighter tracking to keep on one line */}
                    <span className="text-[15px] text-gray-400 font-medium whitespace-nowrap tracking-tighter">Depressive Symptoms</span>
                  </div>

                  {/* Bottom Node: Cognition */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-5 rounded-[2rem] shadow-floating border border-yellow-100 flex flex-col items-center w-52 z-10">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center mb-2">
                      <i className="fa-solid fa-brain text-2xl"></i>
                    </div>
                    <span className="text-[17px] font-extrabold text-gray-800">인지 기능</span>
                    <span className="text-[15px] text-gray-400 font-medium whitespace-nowrap tracking-tighter">Cognitive Function</span>
                  </div>

                  {/* Arrows with Text */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-gray-400">
                    <span className="text-[15px] font-bold mb-1 transform rotate-90">영향</span>
                    <i className="fa-solid fa-arrow-down text-4xl"></i>
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-gray-400">
                    <i className="fa-solid fa-arrow-up text-4xl"></i>
                    <span className="text-[15px] font-bold mt-1 transform -rotate-90">개선</span>
                  </div>

                  {/* Center Text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-10">
                    <p className="text-[16px] text-kb-gray font-bold leading-relaxed break-keep">
                      우울하면 인지기능이 저하되고,<br />인지기능이 저하되면<br />더 우울해집니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto bg-yellow-50 text-kb-yellow p-5 rounded-2xl text-center border border-yellow-100 w-full max-w-md z-20 relative shrink-0 shadow-sm">
                <p className="text-[16px] font-black">
                  <i className="fa-solid fa-check-circle mr-2"></i>
                  "우울 증상 개선 시, 인지 기능 훈련 병행 권장"
                </p>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Right: Solution (6 Programs Grid) */}
          <FadeIn delay={200} className="h-full">
            <GlassCard className="p-8 h-full bg-[#F3F5F7] border border-gray-200 relative overflow-hidden flex flex-col items-center">
              <h3 className="text-2xl font-bold text-kb-black mb-10 w-full text-center shrink-0">맞춤형 두뇌 건강 운동 프로그램 6종</h3>

              {/* Grid of Games */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 w-full mb-10 flex-1 content-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">기억력과 집중력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-12 translate-x-2 translate-y-2 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-6 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">1</span>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">숫자 순서대로<br />맞추기</span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">작업 기억력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] -rotate-3 translate-x-2 translate-y-2 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] rotate-6 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">9</span>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">숫자 거꾸로<br />맞추기</span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 인식력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-45 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-12 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">단어 바로<br />맞추기</span>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 회상력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-12 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-12 -translate-x-1 -translate-y-1 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">단어 회상하기</span>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">언어 분류력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#8DA548] rotate-6 translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-full bg-[#FF7E00] -translate-x-2 -translate-y-2 opacity-90 shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-md">A</span>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">단어 분류하기</span>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[15px] text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap font-medium">논리 기억력</span>
                  <div className="relative w-16 h-16 flex items-center justify-center my-2">
                    <div className="absolute w-12 h-12 rounded-2xl bg-[#FF7E00] -rotate-6 -translate-x-2 translate-y-1 opacity-90 shadow-sm"></div>
                    <div className="absolute w-12 h-12 rounded-2xl rounded-bl-none bg-[#8DA548] rotate-12 translate-x-1 -translate-y-2 opacity-90 shadow-sm flex items-center justify-center">
                      <i className="fa-solid fa-clover text-white text-2xl drop-shadow-md"></i>
                    </div>
                  </div>
                  <span className="text-[16px] font-extrabold text-kb-black text-center leading-tight">이야기 기억하기</span>
                </div>
              </div>

              {/* Auto Adjustment Info */}
              <div className="mt-auto w-full bg-white rounded-[2rem] p-6 border border-yellow-100 shadow-sm flex items-center gap-6 shrink-0">
                <div className="w-14 h-14 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center shrink-0 shadow-sm">
                  <i className="fa-solid fa-sliders text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-black text-kb-black mb-1">결과 데이터 기반 난이도 자동 조정</h4>
                  <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                    매회 훈련 결과를 분석하여 <span className="text-kb-yellow font-bold">개인별 인지 수준</span>에 맞는<br />최적의 난이도로 자동 상향/하향 조정됩니다.
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