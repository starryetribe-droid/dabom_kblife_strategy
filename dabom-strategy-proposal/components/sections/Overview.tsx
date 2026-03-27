import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';

export const Overview: React.FC = () => {
    const parts = [
        {
            part: "Part 1",
            title: "핵심 기능 소개",
            desc: "전문가가 설계한\n멘탈 케어 솔루션",
            icon: "fa-user-doctor",
            color: "text-yellow-600",
            bg: "bg-yellow-50",
            id: "interim-1"
        },
        {
            part: "Part 2",
            title: "핵심 전략",
            desc: "데이터 기반의\n능동적 개입",
            icon: "fa-chess-knight",
            color: "text-amber-500",
            bg: "bg-indigo-50",
            id: "interim-2"
        },
        {
            part: "Part 3",
            title: "B2B 확장",
            desc: "전 임직원을 위한\n보편적 웰니스",
            icon: "fa-building",
            color: "text-purple-500",
            bg: "bg-purple-50",
            id: "interim-3"
        },
        {
            part: "Part 4",
            title: "전 연령대 확장",
            desc: "몰입을 만드는\n즐거운 경험 설계",
            icon: "fa-gamepad",
            color: "text-pink-500",
            bg: "bg-pink-50",
            id: "interim-4"
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionWrapper id="overview" className="bg-[#545045]" pageNumber={2}>
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-kb-yellow leading-tight">
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
                                    <span className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider block">{item.part}</span>
                                    <h3 className="text-xl font-extrabold text-kb-black mb-4 group-hover:text-kb-yellow transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 font-medium leading-relaxed whitespace-pre-line text-[15px]">
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
