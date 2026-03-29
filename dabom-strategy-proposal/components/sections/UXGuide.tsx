import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const UXGuide: React.FC = () => {
  return (
    <SectionWrapper id="ux-guide" className="bg-white" pageNumber={23}>
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">Inclusive Design</span>
            <h2 className="apple-title text-[#1d1d1f] mb-4">
              시니어 RESPECT <span className="text-kb-yellow">UX/UI 가이드</span>
            </h2>
            <p className="text-kb-gray max-w-3xl mx-auto font-medium text-lg md:text-xl break-keep">
              신체적 노화와 심리적 장벽을 허무는 <span className="text-kb-black font-bold">시니어 최적화 설계</span>
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Visual & Physical Accessibility */}
          <FadeIn delay={100} className="h-full">
            <GlassCard className="p-8 h-full flex flex-col border border-gray-200 relative overflow-hidden group hover:border-orange-200 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <i className="fa-solid fa-eye text-8xl text-orange-500"></i>
              </div>

              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-solid fa-glasses"></i>
                </div>
                <h3 className="apple-subtitle text-[#1d1d1f] mb-2">1. Visual & Physical</h3>
                <p className="text-[16px] font-bold text-orange-500 mb-3">신체적 접근성: "잘 보이고 잘 눌러지게"</p>
                <p className="text-[16px] text-kb-gray leading-relaxed break-keep font-medium">
                  노화로 인한 시각 저하(황변 현상)와 소근육 운동 능력 저하를 보완합니다.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-auto border border-gray-100 relative">
                {/* Color Concept */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-yellow-500 relative flex items-center justify-center shadow-sm ring-2 ring-yellow-100">
                      <i className="fa-solid fa-ban text-white/70 text-xl"></i>
                    </div>
                    <span className="text-[15px] text-yellow-600 font-bold mt-2">Blue (황변시 식별↓)</span>
                  </div>

                  <i className="fa-solid fa-arrow-right text-gray-300 text-base"></i>

                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#FF7E00] shadow-md flex items-center justify-center ring-4 ring-orange-50">
                      <i className="fa-solid fa-check text-white text-xl"></i>
                    </div>
                    <span className="text-[15px] text-orange-600 font-bold mt-2">Orange (시인성↑)</span>
                  </div>
                </div>

                {/* Typography & Touch */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <span className="text-[18px] font-bold text-gray-900">본문 18px</span>
                    <span className="text-[15px] text-kb-yellow bg-yellow-50 px-3 py-1 rounded text-center font-bold">기본 크기</span>
                  </div>
                  <button className="w-full bg-[#FF7E00] text-white rounded-xl h-[52px] flex items-center justify-center font-bold text-lg shadow-md active:scale-95 transition-transform">
                    높이 48px+ 터치 영역
                  </button>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Pillar 2: Cognitive Simplicity */}
          <FadeIn delay={200} className="h-full">
            <GlassCard className="p-8 h-full flex flex-col border border-gray-200 relative overflow-hidden group hover:border-green-200 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <i className="fa-solid fa-signs-post text-8xl text-green-500"></i>
              </div>

              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-solid fa-road"></i>
                </div>
                <h3 className="apple-subtitle text-[#1d1d1f] mb-2">2. Cognitive Simplicity</h3>
                <p className="text-[16px] font-bold text-green-600 mb-3">인지적 편의성: "직관적이고 단순하게"</p>
                <p className="text-[16px] text-kb-gray leading-relaxed break-keep font-medium">
                  디지털 기기 조작 두려움을 없애고, 학습 없이 바로 사용할 수 있게 합니다.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-auto border border-gray-100 space-y-5">
                {/* Navigation Structure */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-center">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-2"></div>
                    <div className="text-[14px] text-gray-400 font-medium">복잡한 메뉴</div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-gray-300 text-sm"></i>
                  <div className="flex-1 bg-green-50 p-3 rounded-lg border border-green-200 shadow-sm text-center">
                    <span className="text-[14px] font-bold text-green-700 block mb-1">Linear Flow</span>
                    <div className="flex justify-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                    </div>
                  </div>
                </div>

                {/* Double Labeling */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-[15px] text-gray-500 mb-3 text-center font-medium">Double-Labeling (아이콘+텍스트)</div>
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center gap-1 opacity-40 grayscale">
                      <i className="fa-solid fa-house text-2xl"></i>
                      {/* Missing Text */}
                      <div className="w-8 h-2 bg-red-300 rounded-full mt-1"></div>
                    </div>
                    <div className="w-[1px] bg-gray-200 h-10"></div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <i className="fa-solid fa-house text-lg"></i>
                      </div>
                      <span className="text-[15px] font-bold text-gray-800">홈으로</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Pillar 3: Psychological & Interactive Care */}
          <FadeIn delay={300} className="h-full">
            <GlassCard className="p-8 h-full flex flex-col border border-gray-200 relative overflow-hidden group hover:border-pink-200 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <i className="fa-solid fa-heart-pulse text-8xl text-pink-500"></i>
              </div>

              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h3 className="apple-subtitle text-[#1d1d1f] mb-2">3. Psychological Care</h3>
                <p className="text-[16px] font-bold text-pink-500 mb-3">심리적 케어: "편안하고 따뜻하게"</p>
                <p className="text-[16px] text-kb-gray leading-relaxed break-keep font-medium">
                  기술 장벽과 정신건강 서비스 이용에 대한 심리적 저항감을 낮춥니다.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-auto border border-gray-100 space-y-5">
                {/* Multimodal */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-2 hover:border-pink-200 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                      <i className="fa-solid fa-microphone text-lg"></i>
                    </div>
                    <span className="text-[15px] font-bold text-gray-700">말하기</span>
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-2 hover:border-yellow-200 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 text-kb-yellow flex items-center justify-center">
                      <i className="fa-solid fa-volume-high text-lg"></i>
                    </div>
                    <span className="text-[15px] font-bold text-gray-700">듣기</span>
                  </div>
                </div>

                {/* Emotional UX Writing */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-pink-400"></div>
                  <p className="text-[14px] text-gray-400 mb-2 line-through decoration-red-400 decoration-2 pl-2">오답입니다!</p>
                  <div className="flex items-center gap-3 pl-2">
                    <i className="fa-solid fa-face-smile text-pink-500 text-3xl"></i>
                    <p className="text-lg font-bold text-gray-800 leading-none pb-0.5">
                      좋은 시도였어요!
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};