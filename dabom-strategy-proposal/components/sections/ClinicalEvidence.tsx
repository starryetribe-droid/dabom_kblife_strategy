
import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import findingMemoriesImg from '../../src/assets/finding_memories_header_or_full.png';

export const ClinicalEvidence: React.FC = () => {
  return (
    <SectionWrapper id="clinical-evidence" className="bg-white relative overflow-hidden" pageNumber={4}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>

      <div className="max-w-[1440px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-4xl">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">Proven Science & Data</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-kb-black leading-tight">
              다봄이와 기억 찾기<br /><span className="text-kb-yellow">임상 결과로 증명된</span> 정서 개선 효과
            </h2>
            <p className="text-kb-gray font-medium text-[16px] md:text-lg break-keep">
              14만 건의 대규모 데이터 학습과 고려대학교 심리학부 교수진의 설계로 완성
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left/Middle Content (Col 1-8) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Hybrid Engine Logic (Page 14) */}
              <FadeIn delay={100} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-kb-black text-white flex items-center justify-center text-xl shadow-md">
                      <i className="fa-solid fa-microchip"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-kb-black">다봄 하이브리드 AI</h3>
                  </div>

                  <GlassCard className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex flex-col h-full">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-kb-yellow text-[15px] font-bold mb-4 border border-yellow-100">
                        <i className="fa-solid fa-database"></i> 140,000건 데이터 학습
                      </div>
                      <p className="text-kb-gray text-[16px] font-medium leading-relaxed break-keep">
                        {/* Fixed invalid </br> tag to <br /> to resolve JSX parsing error */}
                        자체 개발 모델과 상용 LLM의 하이브리드 구조로<br /><span className="text-kb-black font-bold">기억의 구체성</span>을 평가하고 정서적 피드백을 생성합니다.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-yellow-50 text-kb-yellow flex items-center justify-center text-xl"><i className="fa-solid fa-brain"></i></div>
                        <div className="text-[16px] font-bold">자체 모델: 기억 구체성 평가</div>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl"><i className="fa-solid fa-comment-dots"></i></div>
                        <div className="text-[16px] font-bold">LLM: 파인튜닝 피드백 생성</div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <p className="text-[15px] text-gray-400 font-bold leading-tight">특허 출원: 자서전적 기억을 이용한 인지기능 및 정신건강 수준<br />예측 장치 및 방법</p>
                    </div>
                  </GlassCard>
                </div>
              </FadeIn>

              {/* Clinical Study Results (Page 15) */}
              <FadeIn delay={200} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-kb-yellow text-white flex items-center justify-center text-xl shadow-md">
                      <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-kb-black">임상 테스트 결과</h3>
                  </div>

                  <GlassCard className="p-8 bg-kb-black text-white border-transparent shadow-floating flex flex-col h-full overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <i className="fa-solid fa-chart-line text-7xl"></i>
                    </div>
                    <div className="relative z-10 space-y-8 h-full flex flex-col">
                      <div>
                        <span className="text-kb-yellow font-black tracking-widest text-[15px] uppercase">Test Results</span>
                        <h4 className="text-2xl font-bold mt-2">2주 사용 후 정서 개선 효과</h4>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-between group">
                          <div className="flex flex-col">
                            <span className="text-[16px] text-gray-400 font-bold mb-1">우울 증상 감소</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-black text-yellow-500">40%</span>
                              <i className="fa-solid fa-arrow-trend-down text-2xl text-yellow-500"></i>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                            <i className="fa-solid fa-face-smile text-2xl text-yellow-500"></i>
                          </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-between group">
                          <div className="flex flex-col">
                            <span className="text-[16px] text-gray-400 font-bold mb-1">불안 증상 감소</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-black text-pink-400">34%</span>
                              <i className="fa-solid fa-arrow-trend-down text-2xl text-pink-400"></i>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-pink-400/10 flex items-center justify-center">
                            <i className="fa-solid fa-shield-heart text-2xl text-pink-400"></i>
                          </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-between group">
                          <div className="flex flex-col">
                            <span className="text-[16px] text-gray-400 font-bold mb-1">인지 기능(언어 기억) 증가</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-black text-green-400">16%</span>
                              <i className="fa-solid fa-arrow-trend-up text-2xl text-green-400"></i>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                            <i className="fa-solid fa-brain text-2xl text-green-400"></i>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-[14px] text-gray-500 italic text-right">Total N=30, Pre-Post차이 기준, 모든 증상의 감소는 통제집단<br />(기존인지훈련집단)에 비해 유의미하게 감소하였음</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </FadeIn>
            </div>

            {/* Evidence Badges */}
            <FadeIn delay={300}>
              <div className="bg-gray-50 rounded-[2.5rem] p-5 border border-gray-100 flex flex-wrap gap-x-12 gap-y-6 items-start justify-center md:justify-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-kb-yellow shadow-sm">
                    <i className="fa-solid fa-scroll text-lg"></i>
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-kb-black">고려대 심리학부 교수진 설계</p>
                    <p className="text-[15px] text-gray-400 font-medium">전문성과 과학적 신뢰도 확보</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-kb-yellow shadow-sm group-hover:bg-yellow-50 transition-colors">
                    <i className="fa-solid fa-file-lines text-lg"></i>
                  </div>
                  <div className="max-w-none">
                    <p className="text-[16px] font-bold text-kb-black">학술 논문 출판 및 효능 입증</p>
                    <p className="text-[15px] text-gray-400 font-medium whitespace-nowrap">
                      우울한 노인을 대상으로 한 어플리케이션 기반 자서전적 기억 훈련의 효과
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Phone Mockup (Col 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeIn delay={400} className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[300px] md:w-[360px] h-[600px] md:h-[780px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-200 overflow-hidden transform transition-all duration-500">
                {/* Screen Content */}
                <div className="w-full h-full bg-[#FFFBF5] relative flex flex-col font-sans">
                  <div className="w-full h-full animate-fade-in relative block">
                    <img
                      src={findingMemoriesImg}
                      alt="Memory Finding Chat UI"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -left-8 bg-white shadow-floating border border-gray-100 p-5 rounded-[2rem] flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div>
                  <span className="block text-[16px] font-black text-kb-black">검증된 AI 엔진</span>
                  <span className="text-[14px] text-gray-400">Privacy & Security Certified</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div >
    </SectionWrapper >
  );
};
