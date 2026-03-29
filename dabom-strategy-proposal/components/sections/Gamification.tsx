import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const Gamification: React.FC = () => {
    return (
        <SectionWrapper id="gamification" className="bg-white relative overflow-hidden" pageNumber={15}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-16 relative z-10">
                {/* Section Header */}
                <div className="text-left mb-10">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Engagement · 지속성 강화
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-4 tracking-tight">
                            재미와 습관을 만드는 장치
                        </h2>
                        <p className="text-[#666] font-medium text-[18px] md:text-[20px] tracking-tight">
                            매일 열고 싶게 만드는 두 가지 핵심 보상 장치
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch flex-1 pb-10">

                    {/* Left: 기억의 정원 */}
                    <FadeIn delay={100} className="h-full">
                        <GlassCard className="p-8 h-full bg-[#F8FAF8] border border-green-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
                                    <i className="fa-solid fa-seedling"></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-kb-black">기억의 정원</h3>
                                    <p className="text-green-700 font-bold text-[16px]">동기 부여를 위한 캐릭터 성장과 리워드</p>
                                </div>
                            </div>

                            {/* Content: Flow (left) + Prototype (right) */}
                            <div className="flex gap-6 flex-1 items-center">
                                {/* Garden Growth Vertical Flow */}
                                <div className="flex-1 flex flex-col gap-0">
                                    {/* Step 1: 물방울 적립 */}
                                    <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm shrink-0">물방울 적립</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight">다봄이와 기억 찾기, 마음 건강 검진, 두뇌 건강 운동 참여 시 물방울 적립</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center py-1.5"><i className="fa-solid fa-chevron-down text-gray-300 text-[14px]"></i></div>

                                    {/* Step 2: 캐릭터 성장 */}
                                    <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-green-600 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm shrink-0">캐릭터 성장</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight">씨앗 → 새싹 → 어린 잎 → 무성한 잎으로 단계별 성장</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center py-1.5"><i className="fa-solid fa-chevron-down text-gray-300 text-[14px]"></i></div>

                                    {/* Step 3: 꽃 & 포인트 */}
                                    <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-orange-500 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm shrink-0">꽃 & 포인트</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight">최종 성장 시 <b>'꽃'</b>과 <b>'포인트'</b> 리워드로 동기 부여 및 습관 형성</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center py-1.5"><i className="fa-solid fa-chevron-down text-gray-300 text-[14px]"></i></div>

                                    {/* Step 4: AI 정원 */}
                                    <div className="bg-[#F0FFF4] rounded-2xl p-5 border-2 border-green-200 shadow-sm w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm shrink-0">AI 정원</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight"><b>AI 정원 이미지 생성</b>으로 나만의 정원 꾸미기 재미 요소</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Prototype Mockup */}
                                <div className="w-[200px] md:w-[220px] h-[400px] md:h-[440px] bg-white border border-gray-200 rounded-[2.5rem] shadow-xl shrink-0 flex items-center justify-center text-gray-300 text-[14px] font-bold">
                                    프로토타입
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Right: 사진첩 */}
                    <FadeIn delay={200} className="h-full">
                        <GlassCard className="p-8 h-full bg-[#FFFBF5] border border-orange-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-[#FF7E00] flex items-center justify-center text-white text-2xl">
                                    <i className="fa-solid fa-images"></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-kb-black">사진첩</h3>
                                    <p className="text-orange-700 font-bold text-[16px]">떠올린 기억을 기록하고 리마인드 하는 사진첩</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 flex-1">
                                <div className="flex gap-6 items-center">
                                    <div className="flex-1 space-y-4">
                                        {/* Feature 1 */}
                                        <div className="bg-white rounded-2xl p-5 border border-orange-50 shadow-sm flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl shrink-0">
                                                <i className="fa-solid fa-camera-retro"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[18px] text-kb-black">기억 요약 저장</h4>
                                                <p className="text-gray-500 text-[15px] font-medium">다봄이와 나눈 대화를 요약해<br />한 장의 이미지와 함께 사진첩에 저장</p>
                                            </div>
                                        </div>
                                        {/* Feature 2 */}
                                        <div className="bg-white rounded-2xl p-5 border border-orange-50 shadow-sm flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xl shrink-0">
                                                <i className="fa-solid fa-bell"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[18px] text-kb-black">리마인드 푸시 알림</h4>
                                                <p className="text-gray-500 text-[15px] font-medium">오늘의 이미지 PUSH 알림으로<br />앱 재진입 유도</p>
                                            </div>
                                        </div>
                                        {/* Feature 3 */}
                                        <div className="bg-white rounded-2xl p-5 border border-orange-50 shadow-sm flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-xl shrink-0">
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[18px] text-kb-black">회상 훈련 효과</h4>
                                                <p className="text-gray-500 text-[15px] font-medium">삶의 기록을 다시 떠올리며<br />자서전적 기억 훈련 효과 지속</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Placeholder for Photo Album Mockup */}
                                    <div className="w-[200px] h-[360px] md:w-[240px] md:h-[420px] bg-white border border-gray-200 rounded-[2.5rem] shadow-xl shrink-0 flex items-center justify-center text-gray-300 text-[14px] font-bold">
                                        사진첩 프로토타입
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
