import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

// 프로토타입 화면 실물 이미지 또는 플레이스홀더 컴포넌트
const PhoneFrame: React.FC<{ label: string; bgColor?: string; stepLabel?: string; imageSrc?: string }> = ({ label, bgColor = "bg-gray-100", stepLabel, imageSrc }) => (
  <div className="flex flex-col items-center gap-3">
    {stepLabel && (
      <span className="text-[15px] font-black text-kb-black text-center whitespace-nowrap">{stepLabel}</span>
    )}
    <div
      className="relative rounded-[24px] bg-white shadow-xl border border-gray-200 overflow-hidden w-[185px]"
      style={{ aspectRatio: '9/19.5' }}
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={label} 
          className="w-full h-full object-fill" 
        />
      ) : (
        <>
          {/* Status bar */}
          <div className="bg-white px-3 pt-2 pb-1 flex justify-between items-center border-b border-gray-50">
            <span className="text-[6px] font-bold text-gray-600">9:41</span>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-signal text-[6px] text-gray-600"></i>
              <i className="fa-solid fa-wifi text-[6px] text-gray-600"></i>
              <i className="fa-solid fa-battery-full text-[6px] text-gray-600"></i>
            </div>
          </div>
          {/* Screen content placeholder */}
          <div className={`${bgColor} w-full flex-1 flex flex-col`}>
            <div className="w-full h-full flex items-center justify-center p-4">
              <span className="text-[10px] text-gray-400 text-center font-bold leading-relaxed">{label}</span>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

export const BrainFitness: React.FC = () => {
  return (
    <SectionWrapper id="brain-fitness" className="bg-white" pageNumber={14}>
      <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-2 pb-2 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-4">
          <FadeIn>
            <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[16px] font-bold tracking-widest uppercase mb-3 inline-block">
              Completeness · 두뇌 건강 운동
            </span>
            <h2 className="apple-title text-kb-black leading-snug mb-2 tracking-tight">
              마음 건강의 빈틈을 채우는 마지막 퍼즐, <span className="text-kb-yellow">'두뇌건강운동'</span>
            </h2>
            <p className="text-kb-black font-medium text-[17px] tracking-tight">
              인지 훈련이 우울감 개선을 돕는 '상호보완적 선순환'을 완성합니다.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-h-0">

          {/* Top: 6 Programs Row */}
          <FadeIn delay={200} className="w-full">
            <GlassCard className="p-4 bg-[#F3F5F7] border border-gray-200 flex flex-col">
              <div className="flex items-center justify-start gap-6 mb-4 border-b border-gray-200 pb-3">
                <h3 className="font-bold text-[#1d1d1f] text-[15px] uppercase tracking-tighter shrink-0">두뇌 건강 운동 프로그램 6종</h3>

                {/* Auto Adjustment Info — integrated into header row for space */}
                <div className="bg-white rounded-full px-4 py-1.5 border border-yellow-100 shadow-xs flex items-center gap-2">
                  <i className="fa-solid fa-sliders text-kb-yellow text-sm"></i>
                  <p className="text-[12px] text-gray-500 font-medium tracking-tighter">
                    결과 데이터 기반 <span className="text-kb-yellow font-bold">난이도 자동 조정</span> 시스템 적용
                  </p>
                </div>
              </div>

              {/* Grid of Games — single row (6 cols) */}
              <div className="grid grid-cols-6 gap-4 w-full py-2">
                {[
                  { label: "기억력/집중력", icon: "1", name: "숫자 순서대로\n맞추기", c1: "#8DA548", c2: "#FF7E00", rot1: "rotate-12 translate-x-1 translate-y-1", rot2: "-rotate-6 -translate-x-0.5 -translate-y-0.5" },
                  { label: "작업 기억력", icon: "9", name: "숫자 거꾸로\n맞추기", c1: "#8DA548", c2: "#FF7E00", rot1: "-rotate-3 translate-x-1 translate-y-1", rot2: "rotate-6 -translate-x-0.5 -translate-y-0.5" },
                  { label: "언어 인식력", icon: "A", name: "단어 바로\n맞추기", c1: "#8DA548", c2: "#FF7E00", rot1: "rotate-45 translate-x-1 translate-y-0.5", rot2: "-rotate-12 -translate-x-0.5 -translate-y-0.5" },
                  { label: "언어 회상력", icon: "A", name: "단어 회상하기", c1: "#8DA548", c2: "#FF7E00", rot1: "rotate-12 translate-x-1 translate-y-0.5", rot2: "-rotate-12 -translate-x-0.5 -translate-y-0.5" },
                  { label: "언어 분류력", icon: "A", name: "단어 분류하기", c1: "#8DA548", c2: "#FF7E00", rot1: "rotate-6 translate-x-1 translate-y-0.5", rot2: "-translate-x-1 -translate-y-1", isCircle: true },
                  { label: "논리 기억력", icon: "🍀", name: "이야기 기억하기", c1: "#FF7E00", c2: "#8DA548", rot1: "-rotate-6 -translate-x-1 translate-y-0.5", rot2: "rotate-12 translate-x-0.5 -translate-y-1", isClover: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <span className="text-[11px] text-gray-500 bg-white border border-gray-100 px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap font-medium tracking-tighter">{item.label}</span>
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <div className={`absolute w-8 h-8 ${item.isCircle ? 'rounded-full' : 'rounded-xl'} opacity-90 shadow-xs ${item.rot1}`} style={{ background: item.c1 }}></div>
                      <div className={`absolute w-8 h-8 ${item.isClover ? 'rounded-xl rounded-bl-none' : 'rounded-xl'} opacity-90 shadow-xs flex items-center justify-center ${item.rot2}`} style={{ background: item.c2 }}>
                        {item.isClover
                          ? <i className="fa-solid fa-clover text-white text-sm drop-shadow-xs"></i>
                          : <span className="text-base font-black text-white drop-shadow-xs">{item.icon}</span>
                        }
                      </div>
                    </div>
                    <span className="text-[13px] font-extrabold text-kb-black text-center leading-tight whitespace-pre-line tracking-tighter">{item.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>

          {/* Bottom: Prototype Process Section */}
          <FadeIn delay={300} className="w-full flex-1">
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[32px] p-5 h-full flex flex-col shadow-inner">
              
              {/* Added Emphasis Box */}
              <div className="flex justify-center mb-4">
                <div className="bg-white border-2 border-kb-yellow px-8 py-2.5 rounded-full shadow-sm flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-kb-yellow text-white flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <span className="text-kb-black font-black text-[17px] tracking-tight">
                    진행 방법 학습부터 두뇌 운동까지 스스로, <span className="text-kb-yellow">시니어 최적화 UI/UX</span>
                  </span>
                </div>
              </div>

              {/* Phone Frames Row — centered and spread */}
              <div className="flex items-start justify-center gap-10 flex-1 py-1">
                {/* Phone 1 — overview */}
                <PhoneFrame 
                  label="두뇌 운동 개요 및 효과 안내 화면" 
                  bgColor="bg-amber-50" 
                  stepLabel="Step 1. 개요 안내" 
                  imageSrc="/images/brain-fitness/step1.png"
                />

                {/* Separator arrow */}
                <div className="flex flex-col items-center mt-28 px-2">
                  <i className="fa-solid fa-arrow-right text-kb-yellow text-[26px] drop-shadow-sm"></i>
                </div>

                {/* Phone 2 — 방법 안내 */}
                <PhoneFrame 
                  label="진행 방법 설명 화면" 
                  bgColor="bg-white" 
                  stepLabel="Step 2. 방법 안내" 
                  imageSrc="/images/brain-fitness/step2.png"
                />

                {/* Arrow */}
                <div className="flex flex-col items-center mt-28 px-2">
                  <i className="fa-solid fa-arrow-right text-kb-yellow text-[26px] drop-shadow-sm"></i>
                </div>

                {/* Phone 3 — 기억 단서 */}
                <PhoneFrame 
                  label="숫자 기억 단서 화면" 
                  bgColor="bg-green-50" 
                  stepLabel="Step 3. 기억 단서" 
                  imageSrc="/images/brain-fitness/step3.png"
                />

                {/* Arrow */}
                <div className="flex flex-col items-center mt-28 px-2">
                  <i className="fa-solid fa-arrow-right text-kb-yellow text-[26px] drop-shadow-sm"></i>
                </div>

                {/* Phone 4 — 정답 입력 */}
                <PhoneFrame 
                  label="숫자 입력 결과 화면" 
                  bgColor="bg-white" 
                  stepLabel="Step 4. 정답 입력" 
                  imageSrc="/images/brain-fitness/step4.png"
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </SectionWrapper>
  );
};