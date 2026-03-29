import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

// Static Images
import findingMemoriesImg from '../../src/assets/finding_memories_header_or_full.png';
import checkupMockup from '../../src/assets/mental_health_checkup_mockup.png';
import albumUi from '../../src/assets/images/photo-album/album_ui.png';

// Brain Health Slides
import brain1 from '../../src/assets/images/brain-health/slide1.png';
import brain2 from '../../src/assets/images/brain-health/slide2.png';
import brain3 from '../../src/assets/images/brain-health/slide3.png';
import brain4 from '../../src/assets/images/brain-health/slide4.png';
import brain5 from '../../src/assets/images/brain-health/slide5.png';
import brain6 from '../../src/assets/images/brain-health/slide6.png';
const brainSlides = [brain1, brain2, brain3, brain4, brain5, brain6];

// Mental Health Slides
import mental1 from '../../src/assets/images/mental-health/slide1.png';
import mental2 from '../../src/assets/images/mental-health/slide2.png';
const mentalSlides = [mental1, mental2];

// Memory Garden Slides
import garden1 from '../../src/assets/images/memory-garden/slide1.png';
import garden2 from '../../src/assets/images/memory-garden/slide2.png';
import garden3 from '../../src/assets/images/memory-garden/slide3.png';
import garden4 from '../../src/assets/images/memory-garden/slide4.png';
import garden5 from '../../src/assets/images/memory-garden/slide5.png';
const gardenSlides = [garden1, garden2, garden3, garden4, garden5];

export const AllInOneSolution: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            icon: "fa-comment-dots",
            title: "다봄이와 기억 찾기",
            desc: "대규모 자서전적 기억 데이터 기반 AI 챗봇",
            bgValues: "bg-green-50 text-green-500",
            screenBg: "bg-green-500",
            iconColor: "text-green-500"
        },
        {
            icon: "fa-clipboard-check",
            title: "마음 건강 검진",
            desc: "과학적으로 검증된 국내 표준 도구 기반 평가",
            bgValues: "bg-orange-50 text-orange-500",
            screenBg: "bg-orange-500",
            iconColor: "text-orange-500"
        },
        {
            icon: "fa-brain",
            title: "두뇌 건강 운동",
            desc: "난이도가 자동 조절되는 맞춤형 게임",
            bgValues: "bg-yellow-50 text-yellow-600",
            screenBg: "bg-yellow-500",
            iconColor: "text-yellow-600"
        },
        {
            icon: "fa-file-lines",
            title: "마음 컨디션 리포트",
            desc: "마음 건강 상태를 한눈에 보는 리포트",
            bgValues: "bg-purple-50 text-purple-500",
            screenBg: "bg-purple-500",
            iconColor: "text-purple-500"
        },
        {
            icon: "fa-seedling",
            title: "기억의 정원",
            desc: "동기 부여를 위한 캐릭터 성장과 리워드",
            bgValues: "bg-yellow-50 text-yellow-500",
            screenBg: "bg-yellow-500",
            iconColor: "text-yellow-500"
        },
        {
            icon: "fa-images",
            title: "사진첩",
            desc: "떠올린 기억을 기록하고 리마인드",
            bgValues: "bg-pink-50 text-pink-500",
            screenBg: "bg-pink-500",
            iconColor: "text-pink-500"
        }
    ];

    // Auto-cycle slides
    useEffect(() => {
        // Always reset to first slide when switching cards
        setCurrentSlide(0);

        let interval: NodeJS.Timeout;

        if (activeIndex === 2) {
            // Brain Health Exercise: 6 slides, 1800ms
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % 6);
            }, 1800);
        } else if (activeIndex === 3) {
            // Mind Condition Report (Moved from Mental Health Checkup): 2 slides, 1800ms
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % 2);
            }, 1800);
        } else if (activeIndex === 4) {
            // Memory Garden: 5 slides, 1800ms
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % 5);
            }, 1800);
        }

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <SectionWrapper id="all-in-one" className="bg-[#F8F9FA]" pageNumber={6}>
            <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6 md:mb-8 w-full">
                    <FadeIn>
                        <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-3 block">
                            All-in-One Solution
                        </span>
                        <h2 className="apple-title text-[#1d1d1f] mb-6 hidden md:block">
                            전문성에 재미를 더한<br />
                            <span className="text-kb-yellow">올인원 멘탈케어 패키지</span>
                        </h2>
                        {/* Mobile simplified header */}
                        <h2 className="apple-title text-[#1d1d1f] mb-4 md:hidden">
                            전문성에 재미를 더한<br />
                            <span className="text-kb-yellow">올인원 패키지</span>
                        </h2>

                        <p className="text-kb-gray font-medium text-[16px] md:text-[20px] leading-relaxed break-keep">
                            예방부터 진단, 관리, 그리고 즐거움까지.<br />
                            시니어 멘탈케어에 필요한 모든 기능을 하나의 앱에 담았습니다.
                        </p>
                    </FadeIn>
                </div>

                {/* Split Layout Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 w-full items-start">

                    {/* Left: Cards Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                        {cards.map((card, index) => (
                            <FadeIn key={index} delay={index * 50} className="h-full">
                                <div
                                    className={`
                    relative rounded-[2rem] p-8 border transition-all duration-300 h-full flex flex-col cursor-pointer
                    ${activeIndex === index
                                            ? 'bg-white border-kb-yellow shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] ring-1 ring-kb-yellow/20 scale-[1.02]'
                                            : 'bg-white border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:bg-gray-50'
                                        }
                  `}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <div className={`w-14 h-14 rounded-2xl ${card.bgValues} flex items-center justify-center text-2xl transition-transform duration-300 ${activeIndex === index ? 'scale-110' : ''}`}>
                                            <i className={`fa-solid ${card.icon}`}></i>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-xl font-extrabold mb-2 transition-colors ${activeIndex === index ? 'text-kb-black' : 'text-gray-700'}`}>
                                            {card.title}
                                        </h3>
                                        <p className="text-[16px] text-kb-gray font-medium break-keep leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Right: Phone Preview (Sticky) */}
                    <div className="hidden lg:block w-1/2 sticky top-24">
                        <FadeIn delay={200} className="w-full flex justify-center">
                            {/* Mockup Frame */}
                            <div className="relative w-[300px] md:w-[320px] h-[580px] md:h-[650px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-200 overflow-hidden transform transition-all duration-500">
                                {/* Screen Area */}
                                <div className="w-full h-full bg-[#FFFBF5] relative flex flex-col font-sans">

                                    {/* Status Bar Mock */}
                                    {activeIndex !== 0 && activeIndex !== 1 && activeIndex !== 2 && activeIndex !== 3 && activeIndex !== 4 && activeIndex !== 5 && (
                                        <div className="w-full h-full max-h-12 flex justify-between items-center px-6 pt-3 select-none z-20">
                                            <span className="text-xs font-bold text-gray-900">9:41</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-4 h-2.5 rounded-[1px] border border-gray-900 bg-gray-900"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Header */}
                                    {activeIndex !== 0 && activeIndex !== 1 && activeIndex !== 2 && activeIndex !== 3 && activeIndex !== 4 && activeIndex !== 5 && (
                                        <div className="px-5 pb-4 flex items-center gap-3 z-20 bg-[#FFFBF5]">
                                            <i className="fa-solid fa-chevron-left text-lg text-gray-800"></i>
                                            <h2 className="apple-title text-[#1d1d1f] ">
                                                {cards[activeIndex].title}
                                            </h2>
                                        </div>
                                    )}

                                    {/* CONTENT BODY */}
                                    <div className="flex-1 overflow-hidden relative">

                                        {/* Default Abstract View (For other cards) */}
                                        {activeIndex !== 0 && activeIndex !== 1 && activeIndex !== 2 && activeIndex !== 3 && activeIndex !== 4 && activeIndex !== 5 && (
                                            <div className="w-full h-full bg-gray-50 rounded-t-[2.5rem] p-6 shadow-inner relative overflow-hidden flex flex-col items-center justify-center text-center">
                                                <div className={`absolute top-0 right-0 w-64 h-64 ${cards[activeIndex].bgValues} opacity-10 blur-[80px] rounded-full transition-colors duration-500`}></div>

                                                <div className={`w-24 h-24 rounded-3xl ${cards[activeIndex].bgValues} flex items-center justify-center text-5xl shadow-lg ring-4 ring-white transition-all duration-500 animate-bounce-soft mb-6`}>
                                                    <i className={`fa-solid ${cards[activeIndex].icon}`}></i>
                                                </div>

                                                <div className="space-y-3 w-full opacity-60">
                                                    <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
                                                    <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
                                                    <div className="h-20 bg-gray-200 rounded-2xl w-full mt-4"></div>
                                                </div>

                                                <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-full ${cards[activeIndex].screenBg} text-white flex items-center justify-center shadow-lg transition-colors duration-500`}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        )}

                                        {/* Specific Chat UI (Card 0) */}
                                        {activeIndex === 0 && (
                                            <div className="w-full h-full animate-fade-in relative block">
                                                <img
                                                    src={findingMemoriesImg}
                                                    alt="Memory Finding Chat UI"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        )}

                                        {/* Mental Health Checkup (Card 1) - Reverted to Static Image */}
                                        {activeIndex === 1 && (
                                            <div className="w-full h-full animate-fade-in relative block">
                                                <img
                                                    src={checkupMockup}
                                                    alt="Mental Health Checkup UI"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        )}

                                        {/* Mind Condition Report (Card 3) - Uses Mental Health Images */}
                                        {activeIndex === 3 && (
                                            <div className="w-full h-full animate-fade-in relative block bg-white">
                                                {mentalSlides.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`Mind Condition Report Slide ${i + 1}`}
                                                        className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Memory Garden (Card 4) */}
                                        {activeIndex === 4 && (
                                            <div className="w-full h-full animate-fade-in relative block bg-white">
                                                {gardenSlides.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`Memory Garden Slide ${i + 1}`}
                                                        className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Photo Album (Card 5) */}
                                        {activeIndex === 5 && (
                                            <div className="w-full h-full animate-fade-in relative block">
                                                <img
                                                    src={albumUi}
                                                    alt="Photo Album UI"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        )}

                                        {/* Brain Health Exercise Carousel (Card 2) */}
                                        {activeIndex === 2 && (
                                            <div className="w-full h-full animate-fade-in relative block bg-white">
                                                {brainSlides.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`Brain Health Exercise Slide ${i + 1}`}
                                                        className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}

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

