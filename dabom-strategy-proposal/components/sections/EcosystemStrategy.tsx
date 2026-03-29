import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';

export const EcosystemStrategy: React.FC = () => {
  return (
    <SectionWrapper id="ecosystem" className="bg-white py-6 overflow-hidden" pageNumber={14}>
      <div className="max-w-[1440px] mx-auto px-8 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-6">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-3 block">Business Strategy Cycle</span>
            <h2 className="apple-title text-[#1d1d1f] mb-5">
              <span className="text-kb-yellow">선순환 사이클</span>
            </h2>
            <p className="text-kb-gray font-medium text-[17px] md:text-[19px] max-w-2xl mx-auto break-keep leading-relaxed">
              데이터 분석을 거쳐 솔루션이 되고, 보상이 다시 참여를 이끄는 <br className="hidden md:block" />
              <span className="text-kb-black font-bold">완결형 비즈니스 선순환 구조</span>
            </p>
          </FadeIn>
        </div>

        {/* Cycle Canvas Area */}
        <div className="relative w-full max-w-4xl h-[600px] md:h-[550px] flex items-center justify-center">

          {/* Background Path SVG (Desktop Only) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circular Diamond Path */}
              <path
                d="M500,80 C750,80 880,250 880,350 C880,450 750,620 500,620 C250,620 120,450 120,350 C120,250 250,80 500,80"
                stroke="#FFBC00" strokeWidth="1.5" strokeDasharray="10 10" className="animate-dash opacity-20"
              />
              {/* Floating Light Dot */}
              <circle r="4" fill="#FFBC00" filter="blur(1px)">
                <animateMotion dur="12s" repeatCount="indefinite" path="M500,80 C750,80 880,250 880,350 C880,450 750,620 500,620 C250,620 120,450 120,350 C120,250 250,80 500,80" />
              </circle>
            </svg>
          </div>

          {/* STEP 1: DATA AGGREGATION (Top Center - 12 o'clock) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[440px]">
            <FadeIn delay={200}>
              <div className="flex flex-col items-center">
                <div className="bg-kb-black text-white px-7 py-2.5 rounded-full font-black text-[16px] shadow-xl flex items-center gap-3 mb-5 ring-4 ring-white border border-gray-800">
                  <span className="w-6 h-6 rounded-full bg-kb-yellow text-white flex items-center justify-center text-[11px] italic font-black">01</span>
                  데이터 수집 (Input)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <GlassCard className="p-4 border-yellow-50 bg-white/90 backdrop-blur-md shadow-soft">
                    <div className="mb-2 flex items-center justify-between border-b border-gray-50 pb-2">
                      <span className="text-[14px] font-black text-kb-black">멘탈 데이터(다봄)</span>
                      <i className="fa-solid fa-comments text-kb-yellow text-[10px] opacity-40"></i>
                    </div>
                    <div className="flex justify-around py-1">
                      {['대화 로그', '검진결과', '인지훈련'].map((label, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-yellow-50 text-kb-yellow flex items-center justify-center text-xs shadow-sm">
                            <i className={`fa-solid ${i === 0 ? 'fa-comment-dots' : i === 1 ? 'fa-clipboard-user' : 'fa-brain'}`}></i>
                          </div>
                          <span className="text-[12px] font-bold text-gray-500">{label}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                  <GlassCard className="p-4 border-yellow-50 bg-white/90 backdrop-blur-md shadow-soft flex flex-col justify-center">
                    <div className="mb-2 flex items-center justify-between border-b border-gray-50 pb-2">
                      <span className="text-[14px] font-black text-kb-black">신체 데이터(The Health)</span>
                      <i className="fa-solid fa-heart-pulse text-kb-yellow text-[10px] opacity-40"></i>
                    </div>
                    <div className="flex items-center gap-2.5 bg-yellow-50/50 p-2 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-white text-kb-yellow flex items-center justify-center shadow-sm">
                        <i className="fa-solid fa-shoe-prints text-xs"></i>
                      </div>
                      <span className="text-[12px] font-extrabold text-gray-600">신체 활동 로그<br />(걸음 수, 스트레스, 수면 등)</span>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* STEP 2: AI CORE ENGINE (Right Middle - 3 o'clock) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 lg:translate-x-12">
            <FadeIn delay={800}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-kb-yellow/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-kb-yellow to-kb-gold text-white p-7 rounded-full border-[6px] border-white shadow-floating text-center flex flex-col items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
                  <div className="bg-kb-black/30 w-9 h-9 rounded-full flex items-center justify-center font-black italic mb-2 text-xs">02</div>
                  <i className="fa-solid fa-robot text-3xl mb-2"></i>
                  <h3 className="apple-subtitle text-[#1d1d1f] ] ]">AI 챗봇 다봄이</h3>
                  <div className="h-[1px] w-8 bg-white/30 my-2.5"></div>
                  <p className="text-yellow-100 font-bold text-[14px] leading-snug">능동적 개입</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* STEP 3: SOLUTIONS (Bottom Center - 6 o'clock) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[440px]">
            <FadeIn delay={1400}>
              <div className="flex flex-col items-center">
                {/* Step Label on Top of Cards */}
                <div className="bg-kb-black text-white px-7 py-2.5 rounded-full font-black text-[16px] shadow-xl flex items-center gap-3 mb-5 ring-4 ring-white border border-gray-800">
                  <span className="w-6 h-6 rounded-full bg-kb-yellow text-white flex items-center justify-center text-[11px] italic font-black">03</span>
                  맞춤형 솔루션 (Output)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <GlassCard className="p-4 border-yellow-100 bg-yellow-50/40 flex items-center gap-4 shadow-soft">
                    <div className="w-11 h-11 rounded-xl bg-white text-yellow-600 flex items-center justify-center text-xl shadow-sm border border-yellow-100">
                      <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] text-kb-black">개인화 상품 추천</h4>
                      <p className="text-[12px] text-kb-gray font-medium">정밀 타겟 매칭</p>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-4 border-yellow-100 bg-yellow-50/40 flex items-center gap-4 shadow-soft">
                    <div className="w-11 h-11 rounded-xl bg-white text-yellow-600 flex items-center justify-center text-xl shadow-sm border border-yellow-100">
                      <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] text-kb-black">미션&콘텐츠 추천</h4>
                      <p className="text-[12px] text-kb-gray font-medium">활동 유도</p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* STEP 4: REWARDS & RETENTION (Left Middle - 9 o'clock) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 lg:-translate-x-12 w-full max-w-[280px]">
            <FadeIn delay={2000}>
              <div className="flex flex-col items-center">
                <GlassCard className="bg-green-50/50 border-2 border-green-100 rounded-[2.2rem] p-5 shadow-soft w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-full bg-kb-black text-white flex items-center justify-center text-[10px] italic font-black">04</div>
                    <span className="text-[15px] font-black text-kb-black">보상 및 락인</span>
                  </div>

                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl shadow-sm border border-green-50">
                      <div className="text-green-600 w-7 flex justify-center"><i className="fa-solid fa-hospital-user text-sm"></i></div>
                      <span className="text-[13px] font-bold text-gray-700">오프라인 센터 연계</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl shadow-sm border border-green-50">
                      <div className="text-green-600 w-7 flex justify-center"><i className="fa-solid fa-coins text-sm"></i></div>
                      <span className="text-[13px] font-bold text-gray-700">HP 리워드 적립</span>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-kb-yellow/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-kb-black text-white px-4 py-2.5 rounded-full font-black text-[13px] shadow-lg flex items-center justify-center gap-2.5 hover:scale-105 transition-all cursor-pointer border border-gray-700">
                      <i className="fa-solid fa-arrows-rotate animate-spin-slow text-kb-yellow text-[11px]"></i>
                      선순환 사이클 재진입
                    </div>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          </div>

          {/* Center Visual Anchor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block opacity-[0.03] pointer-events-none">
            <i className="fa-solid fa-arrows-spin text-[260px] text-kb-yellow animate-spin-slow"></i>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .animate-dash {
          stroke-dashoffset: 0;
          animation: dash 30s linear infinite;
        }
        @keyframes dash {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </SectionWrapper>
  );
};