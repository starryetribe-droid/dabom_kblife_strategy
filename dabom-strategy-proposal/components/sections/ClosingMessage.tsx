import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const ClosingMessage: React.FC = () => {
    return (
        <SectionWrapper id="closing-message" className="bg-[#111] text-white overflow-hidden" pageNumber={36}>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kb-yellow opacity-10 blur-[160px] rounded-full"></div>
            
            <div className="max-w-[1400px] mx-auto px-10 w-full h-full flex flex-col justify-center items-center text-center relative z-10">
                <FadeIn>
                    <div className="w-20 h-1.5 bg-kb-yellow mx-auto mb-16 rounded-full"></div>
                    <blockquote className="text-[32px] md:text-[42px] font-black leading-[1.4] mb-20 tracking-tight text-white">
                        "고객의 마음을 데이터로 이해할 수 있다면,<br />
                        보험은 보상을 넘어 <span className="text-kb-yellow underline decoration-4 underline-offset-8">케어</span>가 됩니다."
                    </blockquote>
                </FadeIn>

                <div className="max-w-4xl mx-auto">
                    <FadeIn delay={100}>
                        <p className="text-[22px] text-white/70 leading-relaxed font-medium mb-12">
                            KB라이프가 다봄을 도입하는 것은 단순한 부가 서비스가 아닙니다.<br />
                            <strong>인지 훈련, AI 대화, 마음 건강 검진</strong>이라는 세 축의 데이터 자산이 확보되고,<br />
                            이를 리스크 통제와 고객 케어, 상품 혁신의 기반으로 전환하는 것입니다.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={300}>
                    <div className="flex items-center gap-6 mt-12">
                        <div className="h-[1px] w-24 bg-white/20"></div>
                        <span className="text-[24px] font-black tracking-[0.3em] text-white/40 uppercase italic">KB Life x DABOM</span>
                        <div className="h-[1px] w-24 bg-white/20"></div>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
