import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const StrategyThree: React.FC = () => {
  return (
    <SectionWrapper id="strategy-3" className="bg-gray-50" pageNumber={13}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
            {/* CSS Based Graphic for Holistic Health - Light Mode */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-floating border border-gray-100 aspect-video bg-[#F0F6FF] flex items-center justify-center group">
              {/* Abstract Background Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/30 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Central Content */}
              <div className="relative z-10 text-center px-8">
                <div className="flex justify-center items-center mb-8 space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-4xl text-yellow-600 shadow-lg mb-3">
                      <i className="fa-solid fa-person-running"></i>
                    </div>
                    <span className="text-sm font-bold text-gray-500">신체 데이터</span>
                  </div>
                  <div className="text-2xl text-gray-300">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-4xl text-pink-500 shadow-lg mb-3">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <span className="text-sm font-bold text-gray-500">멘탈 데이터</span>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-sm">
                  <p className="text-xl md:text-2xl font-serif text-kb-black leading-relaxed font-medium">
                    "회원님, 요즘 <span className="text-pink-500 font-bold">마음이 힘드셔서</span><br />
                    <span className="text-yellow-600 font-bold">산책</span>도 줄어드신 것 같아요.<br />
                    가볍게 산책해보시는 건 어떠세요?"
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 text-sm text-kb-gray font-medium">
              신체-멘탈 데이터 통합 코칭 예시
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <span className="text-kb-yellow font-bold tracking-wider text-sm uppercase mb-3 block">Strategy 03</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-kb-black">헬스케어와 멘탈케어의<br /><span className="text-kb-yellow">유기적 연결</span></h2>
            <p className="text-lg text-kb-gray mb-10 leading-relaxed font-medium">
              신체 데이터와 멘탈 데이터의 단절을 잇습니다.
              <br /><br />
              파편화된 기능을 유기적으로 연결하여 앱 사용의 설득력을 높이고,<br />고객 몰입도를 극대화합니다.
            </p>
            <div className="inline-block px-8 py-4 rounded-full bg-kb-bg text-kb-black font-bold border border-gray-200 shadow-sm">
              <i className="fa-solid fa-link mr-3 text-kb-yellow"></i>
              Physical + Mental 시너지 창출
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};