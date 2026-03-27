import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';

export const ServiceArchitecture: React.FC = () => {
  return (
    <SectionWrapper id="service-architecture" className="bg-[#F8F9FB] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-yellow-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">Technology & Value</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-kb-black leading-tight">
              AI 기술이 만드는 <span className="text-kb-yellow">정교한 케어</span>와 <span className="text-kb-yellow">데이터 가치</span>
            </h2>
            <p className="text-kb-gray font-medium text-[16px] md:text-lg max-w-3xl mx-auto break-keep">
              단순 대화를 넘어 사용자의 기억을 정량적으로 평가하는 독자적인 하이브리드 엔진 구조를 갖추고 있으며, 이를 통해 지속 가능한 비즈니스 생태계를 구축합니다.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* AI Hybrid Engine Architecture */}
          <FadeIn delay={100} className="h-full">
            <GlassCard className="p-10 h-full flex flex-col border border-gray-100 shadow-soft relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-kb-black text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-kb-black">AI 하이브리드 엔진 구조</h3>
                  <p className="text-[15px] text-kb-yellow font-bold">자체 평가 모델 + 생성형 LLM 결합</p>
                </div>
              </div>

              {/* Architecture Diagram Visualization */}
              <div className="bg-gray-50 rounded-3xl p-6 mb-8 flex-1">
                <div className="space-y-6">
                  {/* Step 1: Input */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-yellow-100 text-kb-yellow flex items-center justify-center shadow-sm shrink-0">
                      <i className="fa-solid fa-comment-dots"></i>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded-xl border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">
                      사용자 대화 및 기억 회상 인풋
                    </div>
                  </div>

                  {/* Divider with arrow */}
                  <div className="flex justify-center -my-3">
                    <i className="fa-solid fa-chevron-down text-gray-300 text-xs"></i>
                  </div>

                  {/* Step 2: Evaluation (Core Logic) */}
                  <div className="bg-kb-yellow/5 border-2 border-kb-yellow/20 rounded-2xl p-5 relative">
                    <div className="absolute -top-3 left-4 bg-kb-yellow text-white text-[11px] font-black px-3 py-0.5 rounded-full uppercase">Proprietary Model</div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-yellow-50">
                        <span className="text-sm font-bold text-kb-black">기억 구체성 평가 (AMSS)</span>
                        <span className="text-xs font-black text-kb-yellow">정량적 수치화</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-yellow-50">
                        <span className="text-sm font-bold text-kb-black">정서 점수 도출</span>
                        <span className="text-xs font-black text-kb-yellow">심리 지표 반영</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider with arrow */}
                  <div className="flex justify-center -my-3">
                    <i className="fa-solid fa-chevron-down text-gray-300 text-xs"></i>
                  </div>

                  {/* Step 3: LLM Generation */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-kb-black text-white flex items-center justify-center shadow-sm shrink-0">
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">
                      개인 맞춤형 정서 피드백 & 질문 생성 (LLM)
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[15px] text-kb-gray font-medium leading-relaxed break-keep">
                회상된 기억을 <span className="text-kb-black font-bold">AMSS</span> 기준으로 분석하여 인지적/정서적 상태를 정밀하게 측정합니다.
              </p>
            </GlassCard>
          </FadeIn>

          {/* Business Expansion & Data Cycle */}
          <FadeIn delay={200} className="h-full">
            <GlassCard className="p-10 h-full flex flex-col border border-gray-100 shadow-soft relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-kb-yellow text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-chart-pie"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-kb-black">데이터 선순환 및 BM 확장</h3>
                  <p className="text-[15px] text-kb-yellow font-bold">지속 가능한 비즈니스 임팩트</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-8 flex-1">
                {[
                  {
                    title: "B2G: 지자체/보건소 연계",
                    desc: "지역 시니어 고위험군 상시 모니터링 및 복지 사각지대 해소",
                    icon: "fa-city",
                    color: "bg-yellow-50 text-kb-yellow"
                  },
                  {
                    title: "B2B2C: 보험 및 금융 상품",
                    desc: "정서 건강 상태에 따른 맞춤형 보험 상품 추천 및 리워드 연계",
                    icon: "fa-shield-halved",
                    color: "bg-purple-50 text-purple-600"
                  },
                  {
                    title: "B2H: 의료 기관 데이터 연동",
                    desc: "전문 의료진의 진료 시 객관적인 보조 지표(Data)로 활용",
                    icon: "fa-hospital",
                    color: "bg-green-50 text-green-600"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-yellow-200 transition-colors">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl shrink-0 shadow-sm`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-kb-black mb-1">{item.title}</h4>
                      <p className="text-[14px] text-kb-gray font-medium leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-kb-black text-white p-5 rounded-2xl relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-500">
                    <i className="fa-solid fa-arrows-spin text-2xl animate-spin-slow"></i>
                  </div>
                  <div>
                    <span className="block text-[15px] font-bold">Data-Driven Ecosystem</span>
                    <span className="text-[13px] text-gray-400 font-medium italic">신체-정서-인지 통합 데이터의 자산화</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <i className="fa-solid fa-infinity text-6xl"></i>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </SectionWrapper>
  );
};