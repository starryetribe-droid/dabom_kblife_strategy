import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const ServiceConcept: React.FC = () => {
  return (
    <SectionWrapper id="service-concept" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-sm uppercase mb-2 block">Service Concept</span>
            <h2 className="apple-title text-[#1d1d1f] ">AI 라이프 케어 메이트</h2>
            <p className="text-kb-gray font-medium mt-4 text-lg">초개인화된 데이터로 먼저 다가가는 능동형 케어</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left: Service Identity & Value Proposition */}
          <FadeIn className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="apple-title text-[#1d1d1f] mb-6">
                데이터로 공감하고<br />
                먼저 다가가는 친구,<br />
                <span className="text-kb-yellow">AI 다봄 (DABOM)</span>
              </h2>
              <p className="text-lg text-kb-gray font-medium leading-relaxed mb-8 break-keep">
                다봄이는 사용자의 라이프 로그(Life Log)를 분석하여,<br />
                단순한 응답을 넘어 <span className="text-kb-black font-bold">먼저 말을 걸고 케어하는</span> 능동형 인공지능입니다.
              </p>
            </div>

            <div className="space-y-4">
              <GlassCard className="p-4 flex items-center gap-4 border border-gray-100 hover:border-kb-yellow/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-kb-yellow flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div>
                  <h4 className="font-bold text-kb-black">초개인화 감성 케어</h4>
                  <p className="text-sm text-gray-500">헬스 데이터와 연동된 신체/정서 통합 분석</p>
                </div>
              </GlassCard>

              <GlassCard className="p-4 flex items-center gap-4 border border-gray-100 hover:border-kb-yellow/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div>
                  <h4 className="font-bold text-kb-black">먼저 거는 대화 (Proactive)</h4>
                  <p className="text-sm text-gray-500">이상 징후 감지 시 먼저 안부를 묻는 능동적 개입</p>
                </div>
              </GlassCard>

              <GlassCard className="p-4 flex items-center gap-4 border border-gray-100 hover:border-kb-yellow/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-puzzle-piece"></i>
                </div>
                <div>
                  <h4 className="font-bold text-kb-black">Brain Fitness 연동</h4>
                  <p className="text-sm text-gray-500">대화 속에서 자연스럽게 이어지는 인지 강화 훈련</p>
                </div>
              </GlassCard>
            </div>
          </FadeIn>

          {/* Right: App Interface Mockup */}
          <FadeIn delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] md:w-[340px] h-[600px] md:h-[640px] bg-white rounded-[3rem] border-8 border-gray-100 shadow-2xl overflow-hidden ring-1 ring-gray-200">
              {/* Status Bar */}
              <div className="absolute top-0 w-full h-8 bg-white z-20 flex justify-between items-center px-6 pt-2">
                <span className="text-[10px] font-bold text-gray-800">9:41</span>
                <div className="flex gap-1 text-gray-800 text-[10px]">
                  <i className="fa-solid fa-signal"></i>
                  <i className="fa-solid fa-wifi"></i>
                  <i className="fa-solid fa-battery-full"></i>
                </div>
              </div>

              {/* App Header */}
              <div className="absolute top-8 w-full h-14 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-between px-6 border-b border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-kb-yellow flex items-center justify-center text-white text-xs shadow-sm">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <span className="font-bold text-kb-black">AI 다봄</span>
                </div>
                <i className="fa-solid fa-bars text-gray-400"></i>
              </div>

              {/* Chat Content */}
              <div className="w-full h-full bg-[#F5F7F9] pt-24 px-4 pb-20 overflow-y-auto no-scrollbar flex flex-col gap-4">

                {/* Date Divider */}
                <div className="flex justify-center my-2">
                  <span className="text-[10px] text-gray-400 bg-gray-200/50 px-3 py-1 rounded-full">2025년 12월 22일 월요일</span>
                </div>

                {/* AI Message 1 (Proactive) */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-kb-yellow shrink-0 flex items-center justify-center text-white text-xs mt-1 shadow-sm">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <span className="text-[10px] text-gray-500 ml-1">AI 다봄</span>
                    <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-800 leading-relaxed border border-gray-100">
                      좋은 아침이에요, 늘봄님! ☀️<br />
                      어젯밤에는 <span className="text-kb-yellow font-bold">수면 시간이 평소보다 2시간 적으셨네요.</span> 몸은 좀 어떠세요?
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex flex-row-reverse gap-3">
                  <div className="flex flex-col gap-1 max-w-[80%] items-end">
                    <div className="bg-kb-yellow p-3.5 rounded-2xl rounded-tr-none shadow-sm text-sm text-white leading-relaxed">
                      응, 중간에 자꾸 깨서 그런지<br />몸이 좀 찌뿌둥하네.. 😞
                    </div>
                  </div>
                </div>

                {/* AI Message 2 (Solution) */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-kb-yellow shrink-0 flex items-center justify-center text-white text-xs mt-1 shadow-sm">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <span className="text-[10px] text-gray-500 ml-1">AI 다봄</span>
                    <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-800 leading-relaxed border border-gray-100">
                      저런, 피곤하시겠어요.<br />
                      찌뿌둥한 몸을 깨우는 <strong>가벼운 스트레칭</strong>을 함께 해볼까요?<br />
                      기분 전환에도 도움이 될 거예요! 💪
                    </div>
                    {/* Action Button */}
                    <div className="mt-1 flex gap-2">
                      <button className="bg-white border border-kb-yellow text-kb-yellow text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:bg-yellow-50 transition">
                        스트레칭 영상 보기
                      </button>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex gap-3 mt-2">
                  <div className="w-8 h-8 rounded-full bg-kb-yellow/20 shrink-0 flex items-center justify-center text-kb-yellow text-xs shadow-sm">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-kb-yellow rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-kb-yellow rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-kb-yellow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Input Area */}
              <div className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-100 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="flex-1 h-10 bg-gray-50 rounded-full border border-gray-200 flex items-center px-4 text-sm text-gray-400">
                  대화를 입력하세요...
                </div>
                <div className="w-10 h-10 rounded-full bg-kb-yellow flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-microphone"></i>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};