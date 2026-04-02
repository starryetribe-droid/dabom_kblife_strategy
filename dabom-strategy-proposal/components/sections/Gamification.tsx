import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

export const Gamification: React.FC = () => {
    return (
        <SectionWrapper id="gamification" className="bg-white relative overflow-hidden" pageNumber={19}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-start pt-8 relative z-10">
                {/* Section Header */}
                <div className="text-left mb-4">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch flex-1 pb-4">

                    {/* Left: 기억의 정원 */}
                    <FadeIn delay={100} className="h-full">
                        <GlassCard className="p-6 h-full bg-[#F8FAF8] border border-green-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
                                    <i className="fa-solid fa-seedling"></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-kb-black">기억의 정원</h3>
                                    <p className="text-green-700 font-bold text-[16px]">동기 부여를 위한 캐릭터 성장과 리워드</p>
                                </div>
                            </div>

                            {/* Content: Flow (left) + Prototype (right) — Rebalanced for single-screen fit */}
                            <div className="flex gap-4 flex-1 items-center">
                                {/* Garden Growth Vertical Flow — Wider cards */}
                                <div className="flex-[1.3] flex flex-col gap-0 min-w-0">
                                    {/* Step 1: 물방울 적립 */}
                                    <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm w-[420px]">
                                        <div className="flex flex-col items-center text-center gap-2">
                                            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm w-fit">물방울 적립</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight leading-snug">다봄이와 기억 찾기, 마음 건강 검진,<br />두뇌 건강 운동 참여 시 물방울 적립</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center py-2"><i className="fa-solid fa-chevron-down text-gray-300 text-[14px]"></i></div>

                                    {/* Step 2: 캐릭터 성장 */}
                                    <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm w-[420px]">
                                        <div className="flex flex-col items-center text-center gap-2">
                                            <div className="bg-green-600 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm w-fit">캐릭터 성장</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight">씨앗 → 새싹 → 어린 잎 → 무성한 잎으로<br />단계별 성장</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center py-2"><i className="fa-solid fa-chevron-down text-gray-300 text-[14px]"></i></div>

                                    {/* Step 3: 꽃 & 포인트 */}
                                    <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm w-[420px]">
                                        <div className="flex flex-col items-center text-center gap-2">
                                            <div className="bg-orange-500 text-white px-4 py-2 rounded-xl text-[15px] font-black shadow-sm w-fit">꽃 & 포인트</div>
                                            <p className="text-[16px] text-gray-700 font-medium tracking-tight">최종 성장 시 <b>'꽃'</b>과 <b>'포인트'</b> 리워드로<br />동기 부여 및 습관 형성</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Prototype Mockup — Reverted to single screen for clean layout */}
                                <div className="flex-1 flex justify-center">
                                    <div
                                        className="h-[480px] md:h-[600px] shadow-2xl overflow-hidden border-2 border-gray-200 bg-white shrink-0 relative flex items-center justify-center transition-all hover:scale-[1.02] duration-500"
                                        style={{ borderRadius: '27px' }}
                                    >
                                        <img
                                            src="/images/gamification/garden-proto.png"
                                            className="h-full w-auto object-contain"
                                            style={{ borderRadius: '25px' }} // Slightly less than container to match inside
                                            alt="기억의 정원 프로토타입"
                                        />
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </FadeIn>

                    {/* Right: 사진첩 */}
                    <FadeIn delay={200} className="h-full">
                        <GlassCard className="p-6 h-full bg-[#FFFBF5] border border-orange-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
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
                                    <div className="flex-1 space-y-2">
                                        {/* Feature 1 */}
                                        <div className="bg-white rounded-2xl p-3 border border-orange-50 shadow-sm flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl shrink-0">
                                                <i className="fa-solid fa-camera-retro"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[18px] text-kb-black">기억 요약 저장</h4>
                                                <p className="text-gray-500 text-[15px] font-medium">다봄이와 나눈 대화를 요약해<br />한 장의 이미지와 함께 사진첩에 저장</p>
                                            </div>
                                        </div>
                                        {/* Feature 2 */}
                                        <div className="bg-white rounded-2xl p-3 border border-orange-50 shadow-sm flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xl shrink-0">
                                                    <i className="fa-solid fa-bell"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-[18px] text-kb-black">리마인드 푸시 알림</h4>
                                                    <p className="text-gray-500 text-[15px] font-medium">오늘의 이미지 PUSH 알림으로<br />앱 재진입 유도</p>
                                                </div>
                                            </div>
                                            {/* Push Notification Image Inserted Here - Clean Bubble Only (As Provided) */}
                                            <div className="mt-0.5 self-center max-w-[500px] transition-transform hover:scale-[1.05] duration-300">
                                                <img 
                                                    src="/images/gamification/push_noti_final.png" 
                                                    alt="리마인드 푸시 알림" 
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </div>
                                        {/* Feature 3 */}
                                        <div className="bg-white rounded-2xl p-3 border border-orange-50 shadow-sm flex items-center gap-4">
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
                                    {/* Photo Album Prototype Mockup — Updated with real image */}
                                    <div 
                                        className="h-[360px] md:h-[480px] shadow-2xl overflow-hidden border-2 border-gray-200 bg-white shrink-0 relative flex items-center justify-center transition-all hover:scale-[1.02] duration-500"
                                        style={{ borderRadius: '27px' }}
                                    >
                                        <img 
                                            src="/images/gamification/photo-album-detail.png" 
                                            className="h-full w-auto object-contain" 
                                            style={{ borderRadius: '25px' }} // Slightly less than container
                                            alt="사진첩 상세 화면" 
                                        />
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
