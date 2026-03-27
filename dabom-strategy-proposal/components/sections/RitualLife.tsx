import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const RitualLife: React.FC = () => {
    return (
        <SectionWrapper id="ritual-life" className="bg-gray-50" pageNumber={23}>
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center items-center">
                <FadeIn>
                    <div className="mb-12 text-center">
                        <span className="block text-yellow-600 font-bold mb-2">SYNERGY</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                            의미있는 삶의 리듬을 '함께' 만들다
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-6">
                            리추얼 라이프(Ritual Life)
                        </h2>
                        <p className="text-gray-500 text-lg">
                            자발적으로 지속하게 되는 신체·멘탈 케어 경험
                        </p>
                    </div>
                </FadeIn>

                {/* Comparison Section */}
                <FadeIn delay={200} className="w-full max-w-2xl mx-auto mb-8">
                    <div className="flex justify-between items-start text-center border-b border-gray-200 pb-8">
                        <div className="flex-1">
                            <h4 className="font-bold text-lg mb-4 text-gray-900">루틴</h4>
                            <p className="text-gray-600 mb-2 text-lg">효율과 반복</p>
                            <p className="text-gray-600 mb-2 text-lg">해야만 하는 일</p>
                        </div>
                        <div className="flex-1 border-l border-gray-100">
                            <h4 className="font-bold text-lg mb-4 text-gray-900">리추얼</h4>
                            <p className="text-gray-600 mb-2 text-lg">의미와 정서적 만족</p>
                            <p className="text-gray-600 mb-2 text-lg">나를 위한 소중한 행위</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Cards Grid */}
                <FadeIn delay={300} className="w-full mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">리추얼 프로그램</h3>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                    {/* Card 1 */}
                    <FadeIn delay={300}>
                        <div className="flex flex-col">
                            <div className="bg-gray-200 aspect-video w-full rounded-lg mb-3 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur px-3 py-1 text-[18px] font-mono border-bl rounded-bl-lg">
                                    3주  <span className="text-gray-300">|</span>  3/4
                                </div>
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <img src="/images/ritual_brain_booster.png" alt="Brain Booster" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <h4 className="font-bold text-xl text-gray-900 mb-1">출근 전, 브레인 부스터</h4>
                            <p className="text-[18px] text-gray-500 leading-tight">
                                오늘 하루, 당신의 날카로운 지성을 위해<br />
                                매일 아침 시동을 걸어보세요
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 2 */}
                    <FadeIn delay={400}>
                        <div className="flex flex-col">
                            <div className="bg-gray-200 aspect-video w-full rounded-lg mb-3 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur px-3 py-1 text-[18px] font-mono border-bl rounded-bl-lg">
                                    3주  <span className="text-gray-300">|</span>  4/4
                                </div>
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <img src="/images/ritual_memory_recall.png" alt="Memory Finding" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <h4 className="font-bold text-xl text-gray-900 mb-1">잠들기 전, 다봄이와 기억 찾기</h4>
                            <p className="text-[18px] text-gray-500 leading-tight">
                                구체적으로 기억을 떠올리며<br />
                                소란스러웠던 마음을 가라앉혀보세요
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 3 */}
                    <FadeIn delay={500}>
                        <div className="flex flex-col">
                            <div className="bg-gray-200 aspect-video w-full rounded-lg mb-3 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur px-3 py-1 text-[18px] font-mono border-bl rounded-bl-lg">
                                    3주  <span className="text-gray-300">|</span>  4/6
                                </div>
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <img src="/images/ritual_digital_detox.png" alt="Digital Detox" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <h4 className="font-bold text-xl text-gray-900 mb-1">수면 중, 디지털 디톡스</h4>
                            <p className="text-[18px] text-gray-500 leading-tight">
                                당신의 뇌가 온전하게 회복될 수 있도록<br />
                                디지털로부터 보호해 보세요
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Footer */}
                <FadeIn delay={600}>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight word-keep">
                            함께 하는 리추얼로 <span className="text-yellow-600 relative inline-block">
                                연결성·지속성 강화
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-100 -z-10 bg-opacity-60"></span>
                            </span>
                        </h3>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
