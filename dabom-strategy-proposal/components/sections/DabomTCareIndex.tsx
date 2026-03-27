import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';
import { GlassCard } from '../ui/GlassCard';

export const DabomTCareIndex: React.FC = () => {
  return (
    <SectionWrapper id="tcare-index" className="bg-gray-50" pageNumber={15}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-yellow-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-4 block">Strategic Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-kb-black leading-tight tracking-tight break-keep">
              데이터를 넘어 <span className="text-kb-yellow">가치</span>로,<br />
              <span className="text-kb-yellow">다봄 마음 건강 통합 지수</span>
            </h2>
            <p className="text-kb-gray font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed break-keep">
              파편화된 신체·정서·인지 데이터를 결합하여<br className="hidden md:block" />
              시니어의 현재 <span className="text-kb-black font-bold">종합적인 마음 건강 상태</span>를 제공합니다.
            </p>
          </FadeIn>
        </div>

        {/* Pipeline Container */}
        <div className="relative">
          {/* Animated Connecting Flow (Desktop Only) */}
          <div className="hidden lg:block absolute top-[200px] left-[15%] right-[15%] h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-yellow-200 via-orange-200 to-green-200 opacity-50"></div>
            {/* Animated Dot 1 */}
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-yellow-500 rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(36,107,235,0.5)] animate-[moveRight_4s_linear_infinite]"></div>
            {/* Animated Dot 2 */}
            <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-400 rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(147,51,234,0.5)] animate-[moveRight_4s_linear_infinite_1s]"></div>
            {/* Animated Dot 3 */}
            <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-[moveRight_4s_linear_infinite_2s]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

            {/* 01. INPUT: Multi-Source Data */}
            <FadeIn delay={100} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-kb-black text-white flex items-center justify-center font-black italic text-[15px]">01</div>
                  <h3 className="text-2xl font-bold text-kb-black">Data Input</h3>
                </div>
                <GlassCard className="p-8 h-full bg-white/70 backdrop-blur-xl border-white shadow-soft hover:shadow-floating transition-all flex flex-col relative group">
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: 'fa-person-running', color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Physical', desc: '활동량, 수면, 스트레스 지수(HRV)' },
                      { icon: 'fa-heart', color: 'text-pink-500', bg: 'bg-pink-50', label: 'Mental', desc: '대화 로그, 마음건강검진 결과' },
                      { icon: 'fa-brain', color: 'text-orange-500', bg: 'bg-orange-50', label: 'Cognitive', desc: '인지훈련 수행 분석' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white/50 border border-gray-100 shadow-sm group-hover:translate-x-2 transition-transform duration-300">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xl shrink-0`}>
                          <i className={`fa-solid ${item.icon}`}></i>
                        </div>
                        <div>
                          <p className={`text-[15px] font-black uppercase tracking-tighter ${item.color}`}>{item.label}</p>
                          <p className="text-[16px] font-bold text-gray-800">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto p-4 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-[16px] text-kb-gray leading-relaxed">
                      매일 발생하는 사용자의 신체·멘탈 데이터를<br />수집·분석합니다.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>

            {/* 02. PROCESS: Smart Engine */}
            <FadeIn delay={200} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-kb-black text-white flex items-center justify-center font-black italic text-[15px]">02</div>
                  <h3 className="text-2xl font-bold text-kb-black">Logic</h3>
                </div>
                <GlassCard className="p-8 h-full bg-gradient-to-br from-kb-black to-gray-800 text-white border-transparent shadow-floating flex flex-col relative overflow-hidden group">
                  {/* Decorative Neural Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 20 L100 80 M0 80 L100 20 M50 0 L50 100" stroke="white" strokeWidth="0.5" fill="none" />
                      <circle cx="50" cy="50" r="2" fill="white" className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl text-yellow-500 group-hover:scale-110 transition-transform duration-500">
                        <i className="fa-solid fa-microchip"></i>
                      </div>
                      <div className="text-right">
                        <span className="text-[15px] font-mono text-yellow-500 uppercase tracking-widest">Dabom</span>
                        <p className="text-[15px] font-medium text-gray-400 italic">Algorithm v2.5</p>
                      </div>
                    </div>

                    <div className="space-y-6 flex-grow">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="text-[17px] font-bold text-yellow-400 mb-2">변수별 가중치 종합 분석</h4>
                        <p className="text-[15px] text-gray-300 leading-snug">각종 변수가 개인의 정신건강에 미치는 영향을<br />개인별 민감도에 따라 가중치 부여</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="text-[17px] font-bold text-purple-300 mb-2">데이터 기반 변화 감지</h4>
                        <p className="text-[15px] text-gray-300 leading-snug">중장기적 데이터 기반으로 사용자의 마음 건강 분석</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-[15px] font-mono text-green-400">Processing...</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>

            {/* 03. OUTPUT: Intuitive UX */}
            <FadeIn delay={300} className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-kb-black text-white flex items-center justify-center font-black italic text-[15px]">03</div>
                  <h3 className="text-2xl font-bold text-kb-black">Output</h3>
                </div>
                <GlassCard className="p-8 h-full bg-white/70 backdrop-blur-xl border-white shadow-soft hover:shadow-floating transition-all flex flex-col">

                  {/* Dashboard Mockup */}
                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 mb-8 shadow-inner">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[15px] font-bold text-gray-400">다봄 토탈 케어 지수</span>
                      <span className="text-[16px] font-black text-kb-yellow">84 / 100</span>
                    </div>

                    {/* Visual Gauge */}
                    <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                      <div className="absolute top-0 left-0 h-full w-[84%] bg-gradient-to-r from-yellow-500 to-kb-yellow rounded-full"></div>
                    </div>

                    {/* Status Display */}
                    <div className="flex justify-center items-center py-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center relative z-10">
                          <i className="fa-solid fa-face-smile text-5xl text-green-500 animate-bounce" style={{ animationDuration: '3s' }}></i>
                        </div>
                        <div className="absolute -inset-2 bg-green-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                      </div>
                    </div>

                    <div className="text-center mt-2">
                      <p className="text-2xl font-extrabold text-kb-black">"양호"</p>
                      <p className="text-[16px] text-kb-yellow font-bold mt-1">평소보다 수면이 깊어 컨디션이 좋습니다.</p>
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-circle-check text-green-500 text-lg"></i>
                      <p className="text-[16px] font-bold text-gray-800">더헬스 마이페이지 내 직관적 대시보드 제공</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-circle-check text-green-500 text-lg"></i>
                      <p className="text-[16px] font-bold text-gray-800">이상 패턴 발생 시 즉각 대화 개입</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes moveRight {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}} />
    </SectionWrapper>
  );
};