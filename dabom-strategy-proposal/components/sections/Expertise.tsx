import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

import exp1 from '../../src/assets/images/expertise/expertise_1.png';
import exp2 from '../../src/assets/images/expertise/expertise_2.png';
import exp3 from '../../src/assets/images/expertise/expertise_3.png';
import exp4 from '../../src/assets/images/expertise/expertise_4.png';
import exp5 from '../../src/assets/images/expertise/expertise_5.png';

export const Expertise: React.FC = () => {
    return (
        <SectionWrapper id="expertise" className="bg-white" pageNumber={6}>
            <div className="max-w-[1640px] mx-auto px-10 w-full relative z-10">

                {/* Header */}
                <div className="text-left mb-10">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[16px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Expertise
                        </span>
                        <h2 className="apple-title text-kb-black leading-snug mb-4 tracking-tight">
                            심리학 연구 근거와 특허기술 기반<br />AI 마음건강 케어
                        </h2>
                        <p className="text-kb-black font-medium text-[17px] md:text-[19px] tracking-tight">
                            전문적 데이터와 공인된 기술력으로 실질적인 변화를 만듭니다
                        </p>
                    </FadeIn>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

                    {/* Papers Section (Left) */}
                    <div className="lg:col-span-3">
                        <FadeIn delay={100}>
                            <h3 className="apple-subtitle text-[#1d1d1f] mb-8 border-t border-gray-200 pt-4">논문</h3>

                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-1 rounded-full border border-kb-yellow text-kb-black text-[16px] font-bold bg-white">
                                        출판
                                    </span>
                                </div>
                                <h4 className="text-[18px] font-bold text-kb-black text-center mb-6 break-keep leading-snug min-h-[72px] flex items-end justify-center pb-1">
                                    우울한 노인을 대상으로 한<br />
                                    어플리케이션 기반<br />
                                    자서전적 기억 훈련의 효과
                                </h4>

                                <div className="w-full max-w-[240px] aspect-[3/4] bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100 relative group cursor-pointer">
                                    <img
                                        src={exp1}
                                        alt="Paper Abstract"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Patents Section (Right) */}
                    <div className="lg:col-span-9">
                        <FadeIn delay={200}>
                            <h3 className="apple-subtitle text-[#1d1d1f] mb-8 border-t border-gray-200 pt-4">특허</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {/* Patent Item 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1 rounded-full border border-kb-yellow text-kb-black text-[16px] font-bold bg-white">
                                            등록
                                        </span>
                                    </div>
                                    <h4 className="text-[18px] font-bold text-kb-black text-center mb-6 break-keep leading-snug min-h-[72px] flex items-end justify-center pb-1">
                                        문항반응 이론 알고리즘 기반<br />
                                        전산화된 우울 불안 평가 시스템
                                    </h4>
                                    <div className="w-full aspect-[3/4] bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={exp2}
                                            alt="Patent Certificate"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>

                                {/* Patent Item 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1 rounded-full border border-kb-yellow text-kb-black text-[16px] font-bold bg-white">
                                            등록
                                        </span>
                                    </div>
                                    <h4 className="text-[18px] font-bold text-kb-black text-center mb-6 break-keep leading-snug min-h-[72px] flex items-end justify-center pb-1">
                                        활력 지수 획득<br />
                                        장치 및 방법
                                    </h4>
                                    <div className="w-full aspect-[3/4] bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={exp3}
                                            alt="Patent Certificate"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>

                                {/* Patent Item 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1 rounded-full border border-kb-yellow text-kb-black text-[16px] font-bold bg-white">
                                            출원
                                        </span>
                                    </div>
                                    <h4 className="text-[18px] font-bold text-kb-black text-center mb-6 break-keep leading-snug min-h-[72px] flex items-end justify-center pb-1 tracking-tighter">
                                        자서전적 기억을 이용한<br />
                                        인지기능 및 정신건강 수준 예측 장치 및 방법
                                    </h4>
                                    <div className="w-full aspect-[3/4] bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={exp4}
                                            alt="Patent Application"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>

                                {/* Patent Item 4 */}
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1 rounded-full border border-kb-yellow text-kb-black text-[16px] font-bold bg-white">
                                            출원
                                        </span>
                                    </div>
                                    <h4 className="text-[18px] font-bold text-kb-black text-center mb-6 break-keep leading-snug min-h-[72px] flex items-end justify-center pb-1">
                                        노년기 마음돌봄 서비스<br />
                                        제공 장치 및 방법
                                    </h4>
                                    <div className="w-full aspect-[3/4] bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={exp5}
                                            alt="Patent Application"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>

                </div>

            </div>
        </SectionWrapper>
    );
};
