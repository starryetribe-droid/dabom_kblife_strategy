import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const RoutineScenarios: React.FC = () => {
    return (
        <SectionWrapper id="routine-scenarios" className="bg-gray-50" pageNumber={18}>
            <div className="max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
                <FadeIn>
                    <div className="mb-10 pl-4 border-l-4 border-kb-yellow">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-kb-black leading-tight">
                            일상적 소재 자서전적 기억 훈련 시나리오
                        </h2>
                    </div>
                </FadeIn>

                <div className="max-w-3xl mx-auto">
                    <FadeIn delay={200}>
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg">
                                    <i className="fa-solid fa-utensils"></i>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Scenario: 점심 식사</h3>
                            </div>

                            <div className="space-y-6 text-[15px]">
                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-kb-yellow flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        삼성님, 오늘의 점심 식사는 어떠셨나요?<br />
                                        오늘의 점심 식사와 관련하여 떠오르는 기억을 말씀해 주세요!
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-kb-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        팀원들이랑 근처 식당에서 먹으면서 이야기도 하고 그랬어.
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-kb-yellow flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        팀원들과 함께 식사하셨군요, 조금 더 자세히 듣고 싶어요.<br />
                                        어떤 음식을 드셨나요? 음식의 맛, 향, 가게 분위기,<br />떠오르는 것들을 더 이야기해 주세요.
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-kb-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        돈가스를 먹었는데, 특로스를 먹었거든.<br />
                                        근데 지방부위가 나한텐 좀 많이 느끼했어...<br />
                                        그래서 돈가스보다 샐러드를 더 맛있게 먹은 듯.
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-kb-yellow flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        이런, 다음엔 다른 메뉴를 선택하시겠네요!<br />
                                        식당의 분위기는 어땠나요? 기억나는게 있으신가요?
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
