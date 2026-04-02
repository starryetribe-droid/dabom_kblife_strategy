import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';

export const Overview: React.FC = () => {
    const parts = [
        {
            part: "Part 1",
            title: "브랜드 스토리 및\n 서비스 개요",
            desc: "다봄이 지향하는 가치와\n서비스 구성을 소개합니다.",
            icon: "fa-book-open",
            color: "text-yellow-600",
            bg: "bg-yellow-50",
            id: "interim-overview"
        },
        {
            part: "Part 2",
            title: "과학·전문적\n멘탈 케어",
            desc: "임상과 특허·논문 기반의\n신뢰할 수 있는 멘탈케어입니다.",
            icon: "fa-user-doctor",
            color: "text-amber-500",
            bg: "bg-amber-50",
            id: "interim-1"
        },
        {
            part: "Part 3",
            title: "과학적 원리 및\n상세 기능",
            desc: "핵심 기능의 과학적 원리와\n상세한 구성을 소개합니다.",
            icon: "fa-microscope",
            color: "text-blue-500",
            bg: "bg-blue-50",
            id: "interim-service-details"
        },
        {
            part: "Part 4",
            title: "KB골든라이프와\n다봄의 만남",
            desc: "다봄이 가져다주는\n세 가지 가치를 제안합니다.",
            icon: "fa-handshake",
            color: "text-purple-500",
            bg: "bg-purple-50",
            id: "interim-3"
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionWrapper id="overview" className="bg-[#545045]" pageNumber={1}>
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                    <FadeIn>
                        <h2 className="apple-title text-kb-yellow ">
                            Overview
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {parts.map((item, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <GlassCard
                                className="p-8 h-full flex flex-col items-center text-center cursor-pointer hover:border-kb-yellow/30 hover:shadow-lg transition-all group relative overflow-hidden"
                                onClick={() => scrollToSection(item.id)}
                            >
                                {/* Background Decor */}
                                <div className={`absolute top-0 left-0 w-full h-1 ${item.bg.replace('bg-', 'bg-gradient-to-r from-transparent via-')}-400 to-transparent opacity-50`}></div>

                                <div className="mt-4">
                                    <span className="text-[16px] font-bold text-gray-400 mb-2 uppercase tracking-wider block">{item.part}</span>
                                    <h3 className="apple-subtitle text-[#1d1d1f] mb-4 group-hover: transition-colors whitespace-pre-line">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 font-medium leading-relaxed whitespace-pre-line text-[16px] break-keep">
                                        {item.desc}
                                    </p>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
