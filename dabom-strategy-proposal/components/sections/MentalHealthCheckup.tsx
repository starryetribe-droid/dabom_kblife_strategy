import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import checkupMockup from '../../src/assets/mental_health_checkup_mockup.png';
import reportSlide1 from '../../src/assets/images/mental-health/slide1.png';

export const MentalHealthCheckup: React.FC = () => {
  return (
    <SectionWrapper id="mental-health-checkup" className="bg-[#F8FAFC] relative overflow-hidden" pageNumber={5}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 -z-10"></div>

      <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
          <FadeIn>
            <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
              Standardized Diagnosis & Reporting
            </span>
            <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
              전문적인 심리 진단과 데이터 리포트
            </h2>
            <p className="text-[#666] font-medium text-[17px] md:text-[19px] tracking-tight">
              한국심리학회 인증 도구로 측정하고, 개인의 변화에 집중한 리포트 제공
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">

          {/* Info Columns (xl:col-span-7) */}
          <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Column: Standardized Tools */}
            <FadeIn delay={100} className="space-y-6">
              <div className="flex items-center gap-3 mb-">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-lg shadow-sm">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <h3 className="apple-subtitle text-[#111] font-bold">표준화된 검증 도구</h3>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'MHS:D', name: '한국형 우울장애 선별 도구', desc: 'Depression Scale', color: 'text-kb-yellow', bg: 'bg-amber-50/50' },
                  { id: 'MHS:A', name: '한국형 불안장애 선별 도구', desc: 'Anxiety Scale', color: 'text-kb-yellow', bg: 'bg-amber-50/50' },
                  { id: 'CORE', name: '핵심 활동 지수 (활력)', desc: 'Core Vitality Index', color: 'text-kb-yellow', bg: 'bg-amber-50/50' }
                ].map((item, i) => (
                  <GlassCard key={i} className="p-5 border border-gray-100 flex items-center gap-5 hover:border-kb-yellow/20 transition-all group">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-black text-[15px] shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.id}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-kb-black leading-tight">{item.name}</h4>
                      <p className="text-[15px] text-gray-400 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <div className="bg-white/60 p-5 rounded-3xl border border-gray-100 mt-4">
                <p className="text-[15px] text-kb-gray font-medium leading-relaxed">
                  <i className="fa-solid fa-certificate text-green-500 mr-2"></i>
                  한국심리학회 공식 인증을 획득한 지표를 사용하여<br />서비스의 공신력을 보장합니다.
                </p>
              </div>
            </FadeIn>

            {/* Middle Column: Mind Condition Report Features */}
            <FadeIn delay={200} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-lg shadow-sm">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="apple-subtitle text-[#111] font-bold">마음 컨디션 리포트</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: 'fa-shield-heart',
                    name: '예방적 진단 및 관리',
                    desc: '예방적 차원에서 마음 상태를 진단하고 관리할 수 있는 리포트 제공',
                    color: 'text-kb-yellow',
                    bg: 'bg-amber-50/50'
                  },
                  {
                    icon: 'fa-chart-area',
                    name: '상태 변화 추이 차트',
                    desc: '마음 건강 상태 변화 추이를 확인할 수 있는 차트 기능',
                    color: 'text-kb-yellow',
                    bg: 'bg-amber-50/50'
                  },
                  {
                    icon: 'fa-hand-holding-heart',
                    name: '공감 중심 경험 설계',
                    desc: '사회적 낙인에 대한 민감도를 고려하여 타인과의 비교가 아닌 개인의 상태 변화에 집중',
                    color: 'text-kb-yellow',
                    bg: 'bg-amber-50/50'
                  }
                ].map((item, i) => (
                  <GlassCard key={i} className="p-5 border border-gray-100 flex items-start gap-5 hover:border-kb-yellow/20 transition-all group min-h-[110px]">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-kb-black leading-tight">{item.name}</h4>
                      <p className="text-[15px] text-kb-gray font-medium mt-1.5 leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Dual Mobile Mockups */}
          <div className="xl:col-span-5 flex justify-center xl:justify-end items-center py-4">
            <FadeIn delay={300} className="relative w-full max-w-[650px] lg:mr-10 -mt-10 lg:-mt-16">

              {/* Phone 1: Checkup Screen (Background) */}
              <div className="absolute top-0 left-0 w-[260px] lg:w-[320px] h-[520px] lg:h-[640px] bg-white rounded-[3rem] border-[8px] border-white shadow-floating overflow-hidden ring-1 ring-gray-100 z-0 transform -rotate-6">
                {/* Image Content */}
                <div className="w-full h-full relative block">
                  <img
                    src={checkupMockup}
                    alt="Mental Health Checkup UI"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Phone 2: Report Screen (Foreground) */}
              <div className="relative ml-auto w-[260px] lg:w-[320px] h-[520px] lg:h-[640px] bg-white rounded-[3rem] border-[8px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden ring-1 ring-gray-100 z-10 transform translate-y-[-40px]">
                {/* Image Content */}
                <div className="w-full h-full relative block">
                  <img
                    src={reportSlide1}
                    alt="Mind Condition Report UI"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none -z-10">
                <i className="fa-solid fa-heart-pulse text-[300px]"></i>
              </div>
            </FadeIn>
          </div>
        </div>
      </div >
    </SectionWrapper >
  );
};