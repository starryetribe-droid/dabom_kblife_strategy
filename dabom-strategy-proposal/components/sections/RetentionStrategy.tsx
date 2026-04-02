import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const RetentionStrategy: React.FC = () => {
    return (
        <SectionWrapper id="retention-strategy" className="bg-[#F8F9FA]" pageNumber={26}>
            <div className="max-w-[1640px] mx-auto px-10 w-full h-full flex flex-col justify-center py-4 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="bg-kb-yellow text-kb-black px-4 py-1.5 rounded-full text-[14px] font-bold uppercase tracking-wider">
                            VALUE 3. 플랫폼 활성화
                        </span>
                    </div>
                    <h2 className="apple-title text-kb-black leading-tight mb-6">
                        Retention — '목적 달성을 위한 방문'에서 <span className="text-kb-yellow underline underline-offset-8 decoration-4">일상 속 루틴</span>으로 전환
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-[auto]">

                    {/* Column 1: 진입 동기 */}
                    <FadeIn delay={100} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 border border-gray-200 shadow-sm h-full flex flex-col">
                            {/* Badge */}
                            <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full text-[13px] font-bold self-start mb-4">
                                진입 동기
                            </div>

                            <h3 className="text-[22px] font-black text-gray-900 mb-2 tracking-tight">기억 데이터 기반 데일리 큐레이션</h3>

                            <p className="text-[14px] text-gray-600 leading-relaxed font-medium mb-4 word-keep">
                                매일 아침 사용자의 과거 대화·기억 데이터를 기반으로 개인화된 문안 인사 발송
                            </p>

                            <div className="flex flex-col gap-3 mt-4">
                                {/* Box 1: Weather */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">☀️ 날씨 연동</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오전 09:10</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "오늘 비가 오네요. 명숙님이 4개월 전 명동에서 비를 피하며 드셨던 칼국수 기억나세요?"
                                        </p>
                                    </div>
                                </div>

                                {/* Box 2: Anniversary */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">🎁 기념일 트리거</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오전 11:30</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "오늘이 손자 민준이 생일이네요! 작년에 함께 찍은 사진, 다시 보실래요?"
                                        </p>
                                    </div>
                                </div>

                                {/* Box 3: Activity */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">🏃‍♂️ 활동 연동</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오후 02:40</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "요즘 산책을 꾸준히 하고 계시네요. 예전에 자주 걷던 길 이야기도 들려주실래요?"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Column 2: 보상 */}
                    <FadeIn delay={200} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 border border-gray-200 shadow-sm h-full flex flex-col">
                            {/* Badge */}
                            <div className="inline-block px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-[13px] font-bold self-start mb-4">
                                보상
                            </div>

                            <h3 className="text-[22px] font-black text-gray-900 mb-2 tracking-tight">리워드 시스템</h3>

                            <p className="text-[14px] text-gray-600 leading-relaxed font-medium mb-4 word-keep">
                                활동 완료 시 물방울을 적립하고 캐릭터를 성장시켜 꽃과 포인트 획득
                            </p>

                            {/* Character Growth Stages Image */}
                            <div className="bg-gray-50/50 rounded-2xl p-2 flex flex-col items-center justify-center mb-4 border border-gray-100 shadow-sm">
                                <img
                                    src="/images/character-growth.png"
                                    alt="Character Growth"
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                <div className="bg-gray-50/80 rounded-xl p-3 flex gap-3 items-start border border-gray-100">
                                    <div className="w-8 h-8 shrink-0 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[16px]">🌱</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 text-[14px]">캐릭터 성장</span>
                                        <span className="text-gray-500 text-[12px] leading-snug word-keep">
                                            미션 수행에 따른 단계별 성장
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-gray-50/80 rounded-xl p-3 flex gap-3 items-start border border-gray-100">
                                    <div className="w-8 h-8 shrink-0 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-[16px]">💧</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 text-[14px]">물방울 적립</span>
                                        <span className="text-gray-500 text-[12px] leading-snug word-keep">
                                            대화, 미션 완료 시 적립
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-gray-50/80 rounded-xl p-3 flex gap-3 items-start border border-gray-100">
                                    <div className="w-8 h-8 shrink-0 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-[16px]">💮</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 text-[14px]">KB포인트리 보상</span>
                                        <span className="text-gray-500 text-[12px] leading-snug word-keep">
                                            꽃 획득 시 KB포인트리 적립
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Column 3: 습관화 */}
                    <FadeIn delay={300} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 border border-gray-200 shadow-sm h-full flex flex-col">
                            {/* Badge */}
                            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[13px] font-bold self-start mb-4">
                                습관화
                            </div>

                            <h3 className="text-[22px] font-black text-gray-900 mb-2 tracking-tight">일일 케어 루틴 형성</h3>

                            <p className="text-[14px] text-gray-600 leading-relaxed font-medium mb-4 word-keep">
                                접속 패턴을 분석하여 최적 시간대에 개인화 푸시 발송
                            </p>

                            <div className="flex flex-col gap-3">
                                {/* Box 1: 3 Days Inactive */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">⏰ 3일 미접속</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오후 08:00</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "다봄이가 조금 심심했어요. 오늘 딱 3분만 들러 주실래요?"
                                        </p>
                                    </div>
                                </div>

                                {/* Box 2: Diagnosis Incomplete */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">🚶‍♂️ 검진 미완료</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오전 10:15</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "산책 목표는 달성하셨어요! 마음 건강도 챙겨볼까요?"
                                        </p>
                                    </div>
                                </div>

                                {/* Box 3: 7 Days Streak */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="px-2 py-0.5 bg-[#FFF2B2] text-[#856404] rounded text-[11px] font-bold self-start ml-1">🎉 연속 7일 달성</span>
                                    <div className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-kb-yellow rounded-md flex items-center justify-center text-[10px] font-bold text-kb-black">KB</div>
                                                <span className="text-gray-500 text-[11px] font-bold">KB라이프생명</span>
                                            </div>
                                            <span className="text-gray-400 text-[10px]">오후 06:30</span>
                                        </div>
                                        <p className="text-gray-800 font-medium text-[13px] leading-snug word-keep">
                                            "7일 연속 마음 돌봄 완료! 특별 꽃 씨앗을 드려요 🌱"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4">
                                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                                    <p className="text-blue-600 font-bold text-[12px] mb-2 flex justify-center gap-2">
                                        <span>마음 검진</span><span>→</span><span>다봄이 대화</span><span>→</span><span>두뇌 운동</span>
                                    </p>
                                    <p className="text-blue-800 font-black text-[14px] bg-white px-3 py-1 rounded-full shadow-sm inline-block">
                                        일일 케어 루틴 자동 설계
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
