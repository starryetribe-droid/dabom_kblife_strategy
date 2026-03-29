import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const StrategyTwo: React.FC = () => {
  return (
    <SectionWrapper id="strategy-2" className="bg-white" pageNumber={12}>
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="text-center mb-6">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-sm uppercase mb-2 block">Strategy 02</span>
            <h2 className="apple-title text-[#1d1d1f] mb-4">심층 공감형 대화를 통한,<br /><span className="text-kb-yellow">멘탈 데이터 품질 고도화</span></h2>
            <p className="text-kb-gray max-w-2xl mx-auto font-medium text-sm md:text-lg">
              20자 내외의 단순 '상태 태깅'을 대화 로그를 통해<br />
              '구체적인 데이터'로 전환하여 활용 가치를 높입니다.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Problem Definition (AS-IS) */}
          <FadeIn className="h-full">
            <GlassCard className="p-8 h-full flex flex-col justify-between overflow-hidden">
              <h3 className="apple-subtitle text-[#1d1d1f] mb-6">현황 (AS-IS): 단순 선택형 기록</h3>

              <div className="flex flex-col xl:flex-row gap-6 items-center flex-grow">
                {/* Description */}
                <div className="flex-1 w-full space-y-6">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center xl:text-left">
                    <p className="text-2xl font-extrabold text-gray-400 mb-2">"우울해", "불안한"</p>
                    <span className="text-base text-gray-500 font-medium">단순 키워드 선택</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-500 font-semibold bg-red-50 p-4 rounded-2xl">
                      <i className="fa-solid fa-circle-exclamation mr-4 mt-1 text-lg shrink-0"></i>
                      <span className="text-sm md:text-[15px] leading-relaxed">구체적 이유(Why) 파악 불가<br /><span className="text-base font-normal opacity-80 text-red-400">맥락 데이터 부재</span></span>
                    </li>
                    <li className="flex items-start text-red-500 font-semibold bg-red-50 p-4 rounded-2xl">
                      <i className="fa-solid fa-circle-exclamation mr-4 mt-1 text-lg shrink-0"></i>
                      <span className="text-sm md:text-[15px] leading-relaxed">파편화된 멘탈 데이터<br /><span className="text-base font-normal opacity-80 text-red-400">맞춤형 솔루션 제안 한계</span></span>
                    </li>
                  </ul>
                </div>

                {/* Mockup Image Recreation */}
                <div className="relative w-[240px] shrink-0 border-[4px] border-gray-100 rounded-[2rem] bg-white shadow-lg overflow-hidden text-sm leading-tight select-none transform rotate-2 hover:rotate-0 transition-transform duration-500 ring-1 ring-gray-200">
                  {/* Status Bar */}
                  <div className="h-6 bg-white flex justify-between items-end px-4 pb-1 text-[12px] text-gray-800">
                    <span>7:47</span>
                    <div className="flex gap-1 opacity-60"><i className="fa-solid fa-wifi text-[10px]"></i><i className="fa-solid fa-battery-three-quarters text-[10px]"></i></div>
                  </div>

                  {/* Header */}
                  <div className="h-10 flex items-center justify-between px-4">
                    <div className="w-3"></div>
                    <span className="font-bold text-gray-900 text-sm">마음 기록하기</span>
                    <i className="fa-solid fa-xmark text-gray-400 text-sm"></i>
                  </div>

                  {/* Body */}
                  <div className="px-4 pb-4 space-y-4">
                    {/* Q1 */}
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-[15px]">오늘 하루, 마음은 어떠세요?</p>
                      <div className="grid grid-cols-5 gap-1">
                        {[
                          { icon: 'fa-face-smile', label: '행복해요', color: 'text-gray-300 bg-gray-50' },
                          { icon: 'fa-face-smile-wink', label: '좋아요', color: 'text-gray-300 bg-gray-50' },
                          { icon: 'fa-face-meh', label: '그저그래요', color: 'text-gray-300 bg-gray-50' },
                          { icon: 'fa-face-frown-open', label: '우울해요', color: 'text-[#F9C14E] bg-[#FFF8E6] ring-1 ring-[#F9C14E]' },
                          { icon: 'fa-face-tired', label: '불행해요', color: 'text-gray-300 bg-gray-50' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${item.color}`}>
                              <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <span className={`text-[10px] sm:text-[11px] tracking-tighter ${item.label === '우울해요' ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Q2 */}
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-[15px]">오늘 하루, 단어로 표현하자면?</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['피곤한', '불쾌한', '불안한', '속상한', '우울한', '짜증나는'].map((tag, idx) => {
                          const isActive = ['불안한', '우울한'].includes(tag);
                          return (
                            <span key={idx} className={`px-2 py-1 rounded-full border text-sm transition-colors ${isActive ? 'bg-[#5A2D82] border-[#5A2D82] text-white font-medium shadow-sm' : 'bg-white border-gray-200 text-gray-500'}`}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Q3 */}
                    <div className="pt-1">
                      <p className="text-gray-900 mb-1.5 text-sm">오늘 뭔가 울적해</p>
                      <div className="h-[1px] bg-gray-200 w-full"></div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="p-4 pt-0 mt-auto">
                    <div className="w-full bg-[#5A2D82] text-white text-center py-2.5 rounded-lg font-bold text-sm shadow-md">작성하기</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Right: Solution (Chat Simulation) */}
          <FadeIn delay={100} className="h-full">
            <GlassCard className="p-10 h-full border-2 border-kb-yellow/10 shadow-floating relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <i className="fa-solid fa-comments text-9xl text-kb-yellow"></i>
              </div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="apple-subtitle text-[#1d1d1f] ">개선 (TO-BE): 심층 질의</h3>
              </div>

              <div className="bg-[#F8F9FA] rounded-[2rem] p-6 h-auto flex flex-col border border-gray-100 space-y-4 relative z-10">
                <div className="bg-white text-kb-black p-4 rounded-3xl rounded-br-none text-[15px] self-end max-w-[80%] shadow-sm border border-gray-100 font-medium">
                  그냥 좀 우울해. (7자)
                </div>

                <div className="bg-kb-yellow text-white p-4 rounded-3xl rounded-tl-none text-[15px] self-start max-w-[85%] shadow-md font-medium">
                  그러시군요. 혹시 건강 문제 때문인가요? 아니면 가족 일로 마음이 쓰이시나요?
                </div>

                <div className="bg-white text-kb-black p-4 rounded-3xl rounded-br-none text-[15px] self-end max-w-[80%] shadow-sm border border-gray-100 font-medium">
                  허리가 계속 아프니까 만사가 귀찮네.
                </div>

                <div className="mt-4 text-center pt-2">
                  <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-green-50 text-green-600 border border-green-100 shadow-sm">
                    <i className="fa-solid fa-check mr-2"></i> 핵심 맥락 확보: 요통(신체) → 우울(심리)
                  </span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>

        {/* Arrow Transition */}
        <div className="flex justify-center -mt-2 mb-2">
          <i className="fa-solid fa-arrow-down text-kb-yellow/30 text-2xl animate-bounce"></i>
        </div>

        {/* Business Value Bar - Optimized max-width to reduce excessive whitespace */}
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={200}>
            <div className="bg-gradient-to-b from-yellow-50/80 to-white/50 rounded-[2.5rem] p-8 border border-yellow-100/50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-kb-yellow/20 to-transparent"></div>

              <div className="text-center mb-8 relative z-10">
                <span className="bg-kb-yellow text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-sm">TO-BE Benefit</span>
                <h3 className="apple-subtitle text-[#1d1d1f] ">고도화된 데이터로 창출되는 비즈니스 기회</h3>
                <p className="text-sm md:text-[15px] text-kb-gray mt-2">상세 맥락 데이터 확보 시 가능한 확장 서비스</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Opportunity 1 */}
                <div className="bg-white p-6 rounded-3xl flex items-center h-full shadow-sm border border-gray-100 hover:border-kb-yellow/30 hover:shadow-md transition group">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-kb-yellow flex items-center justify-center mr-6 text-2xl group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-kb-black text-lg">정밀 타겟 솔루션</h4>
                      <span className="text-sm font-bold text-kb-yellow border border-yellow-100 px-1.5 py-0.5 rounded-md">New</span>
                    </div>
                    <p className="text-sm md:text-[15px] text-kb-gray font-medium leading-tight">"허리 통증 완화 운동" 등<br />구체적 원인 해결 콘텐츠 즉시 추천</p>
                  </div>
                </div>

                {/* Opportunity 2 */}
                <div className="bg-white p-6 rounded-3xl flex items-center h-full shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition group">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mr-6 text-2xl group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-kb-black text-lg">보험 상품 연계</h4>
                      <span className="text-sm font-bold text-green-600 border border-green-200 px-1.5 py-0.5 rounded-md">Opportunity</span>
                    </div>
                    <p className="text-sm md:text-[15px] text-kb-gray font-medium leading-tight">"관절/통증 관련 보장 특약" 등<br />고객 상황에 맞는 상품 선제적 안내</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </SectionWrapper>
  );
};