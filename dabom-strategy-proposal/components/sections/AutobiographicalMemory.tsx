import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const AutobiographicalMemory: React.FC = () => {
    return (
        <SectionWrapper id="autobiographical-memory" className="bg-white" pageNumber={7}>
            <div className="max-w-[1640px] mx-auto px-10 w-full flex flex-col justify-center h-full relative z-10">

                {/* Header */}
                <div className="text-left mb-10 w-full">
                    <FadeIn>
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Methodology · 임상 기법
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug mb-5 tracking-tight">
                            자서전적 기억 훈련의 과학적 원리
                        </h2>
                        <ul className="text-[#666] font-medium text-[17px] md:text-[19px] tracking-tight space-y-2.5">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span>과일반화된 기억에서 벗어나 <strong>'구체적 사건'</strong>을 회상하도록 돕는 인지적 개입</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span>우울·불안 증상의 <strong>근본 원인에 작용</strong></span>
                            </li>
                        </ul>
                    </FadeIn>
                </div>

                {/* Main Content (3 Columns) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">

                    {/* Column 1: 문제 */}
                    <FadeIn delay={200}>
                        <div className="border border-gray-200 bg-white rounded-[24px] p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-[#333] text-white px-3 py-1 rounded-[8px] text-[13px] font-bold tracking-widest">문제</span>
                                <h3 className="text-[#111] font-bold text-[20px] md:text-[22px] tracking-tight">자서전적 기억의 과일반화</h3>
                            </div>
                            <span className="text-[#111] font-bold text-[18px] mb-8">CaR-FAX 모델 (Williams) 기반</span>

                            <div className="flex flex-col gap-4">
                                {/* Ca-R */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-[#1A1A1A] text-white text-[16px] font-bold px-2 py-0.5 rounded-[6px]">포착 및 반추</div>
                                        <span className="text-[#111] medium text-[16px]">Capture and Rumination</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        우울증·노화로 인해 부정적 자기 도식에 포착되기 쉬움 <br />
                                        <i className="fa-solid fa-arrow-right text-gray-300 mx-1"></i> 만성적인 반추를 하게됨
                                    </p>
                                </div>
                                {/* FA */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-[#1A1A1A] text-white text-[16px] font-bold px-2 py-0.5 rounded-[6px] tracking-widest">기능적 회피</div>
                                        <span className="text-[#111] medium text-[16px]">Functional Avoidance</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        정서 조절 및 대처 전략으로<br />
                                        고통스러운 구체적 기억을 무의식적으로 회피하며<br />
                                        일반적인 기억만 떠올리게 됨
                                    </p>
                                </div>
                                {/* X */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-[#1A1A1A] text-white text-[16px] font-bold px-2.5 py-0.5 rounded-[6px]">실행 기능 저하</div>
                                        <span className="text-[#111] midium text-[16px]">eXecutive control dysfunction</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        우울증·노화로 목표 지향적 기억 탐색 기능 저하로, <br />
                                        구체적인 회상이 어려워짐
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Column 2: 훈련 */}
                    <FadeIn delay={300}>
                        <div className="border border-gray-200 bg-white rounded-[24px] p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="bg-[#333] text-white px-3 py-1 rounded-[8px] text-[13px] font-bold tracking-widest">훈련</span>
                                <h3 className="text-[#111] font-bold text-[20px] md:text-[22px] tracking-tight">자서전적 기억 훈련 작동 방식</h3>
                            </div>

                            <div className="flex-1 relative pl-4 mt-2">
                                {/* Vertical Dashed Line */}
                                <div className="absolute left-[31px] top-[24px] bottom-[40px] w-[2px] border-l-2 border-dashed border-gray-200 z-0"></div>

                                <div className="flex flex-col gap-10 relative z-10">
                                    {/* Step 1 */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white font-bold flex items-center justify-center shrink-0 text-[14px]">1</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[#111] font-bold text-[17px] mb-1">감정 단서 제시</h4>
                                            <p className="text-gray-400 font-medium text-[14px]">긍정·부정·중립 단어 / 사진</p>
                                        </div>
                                    </div>
                                    {/* Step 2 */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white font-bold flex items-center justify-center shrink-0 text-[14px]">2</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[#111] font-bold text-[17px] mb-1">일반적 기억 감지</h4>
                                            <p className="text-gray-400 font-medium text-[14px]">AI가 구체성 부족을 판단</p>
                                        </div>
                                    </div>
                                    {/* Step 3 */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white font-bold flex items-center justify-center shrink-0 text-[14px]">3</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[#111] font-bold text-[17px] mb-1">구체화 프롬프트</h4>
                                            <p className="text-gray-400 font-medium text-[14px]">언제, 어디서, 무엇을 질문</p>
                                        </div>
                                    </div>
                                    {/* Step 4 */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white font-bold flex items-center justify-center shrink-0 text-[14px]">4</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[#111] font-bold text-[17px] mb-1">구체적 기억 인출</h4>
                                            <p className="text-gray-400 font-medium text-[14px]">생생한 회상 달성</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Column 3: 효과 */}
                    <FadeIn delay={400}>
                        <div className="border border-gray-200 bg-white rounded-[24px] p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="bg-[#333] text-white px-3 py-1 rounded-[8px] text-[13px] font-bold tracking-widest">효과</span>
                                <h3 className="text-[#111] font-bold text-[20px] md:text-[22px] tracking-tight">우울 완화 메커니즘</h3>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Item 1 */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <i className="fa-solid fa-brain text-[18px] text-[#444]"></i>
                                        <span className="text-[#111] font-bold text-[16px]">부정적 반추 차단</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        기억 구체성 향상 <br />
                                        <i className="fa-solid fa-arrow-right text-gray-300 mx-1"></i> 만성적 반추 사고 감소
                                    </p>
                                </div>
                                {/* Item 2 */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <i className="fa-solid fa-network-wired text-[18px] text-[#444]"></i>
                                        <span className="text-[#111] font-bold text-[16px]">신경망 연결성 강화</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        디폴트 네트워크 모드(Default Mode Network) 연결성 증가 <br />
                                        <i className="fa-solid fa-arrow-right text-gray-300 mx-1"></i> 정서 처리 능력 향상
                                    </p>
                                </div>
                                {/* Item 3 */}
                                <div className="border border-gray-100 bg-[#FBFBFD] rounded-[16px] p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <i className="fa-solid fa-user-check text-[18px] text-[#444]"></i>
                                        <span className="text-[#111] font-bold text-[16px]">자기 통합감 형성</span>
                                    </div>
                                    <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                                        고통스러웠던 과거까지 내 인생의 일부로 수용 <br />
                                        <i className="fa-solid fa-arrow-right text-gray-300 mx-1"></i> 인생 전반에 대한 통합감으로 우울감을 근본적으로 낮추게 됨
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
export default AutobiographicalMemory;
