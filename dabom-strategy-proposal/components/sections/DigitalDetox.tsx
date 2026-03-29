import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const DigitalDetox: React.FC = () => {
    return (
        <SectionWrapper id="digital-detox" className="bg-white" pageNumber={22}>
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center items-center">
                <FadeIn>
                    <div className="mb-6 text-center">
                        <span className="inline-block bg-red-50 text-red-500 font-bold px-4 py-1.5 rounded-full text-[15px] mb-4 border border-red-100">
                            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                            2024년 스마트폰 과의존 위험군 22.9% 기록
                        </span>
                        <h2 className="apple-title text-[#1d1d1f] mb-4">
                            <span className="text-yellow-600">디지털 디톡스</span> 퀘스트
                        </h2>
                        <p className="text-gray-500 text-[18px] max-w-2xl mx-auto word-keep">
                            '하지 마라'는 규제가 아닌 <span className="font-bold text-gray-800">보상(LP판)</span>을 통한 자발적 참여를 유도하며<br />
                            수면의 질적 향상과 플랫폼 체류 시간을 관리합니다.
                        </p>
                    </div>
                </FadeIn>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center w-full mb-8">
                    {/* Left: Mobile App Screen (Swapped from Right) */}
                    <div className="w-full max-w-[380px] order-1">
                        <FadeIn delay={200}>
                            <div className="relative bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[8px] border-white overflow-hidden aspect-[9/18]">
                                {/* Status Bar */}
                                <div className="h-12 flex justify-between items-center px-6 pt-2">
                                    <div className="w-12 h-4 bg-gray-100 rounded-full"></div>
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                                        <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="px-6 py-4 flex items-center justify-center relative">
                                    <button className="absolute left-6 text-gray-400">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <h3 className="apple-subtitle text-[#1d1d1f] ">수면 측정 준비</h3>
                                </div>

                                {/* Content */}
                                <div className="px-8 mt-8 flex flex-col items-center text-center h-full">
                                    <h2 className="apple-title text-[#1d1d1f] mb-6 word-keep">
                                        수면을 통한 하루 에너지 충전!<br />
                                        취침 준비 되셨나요?
                                    </h2>

                                    {/* Main Dial */}
                                    <div className="relative w-48 h-48 mb-6">
                                        <div className="absolute inset-0 bg-purple-50 rounded-full"></div>
                                        <div className="absolute inset-4 bg-purple-100 rounded-full flex items-center justify-center shadow-inner">
                                            <div className="w-16 h-2 bg-purple-900 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Bottom Card */}
                                    <div className="w-full bg-gray-50 rounded-3xl p-6 mb-4">
                                        <p className="text-sm font-bold text-gray-800 mb-4 word-keep">
                                            수면 중 디지털 디톡스를 시작할까요?
                                        </p>
                                        <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-gray-100 mb-4">
                                            <span className="text-xs text-gray-500 font-medium ml-2 whitespace-nowrap">디지털 디톡스 모드</span>
                                            <div className="w-12 h-6 bg-purple-900 rounded-full relative p-1 cursor-pointer">
                                                <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-[#310b7e] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#24065e] transition-colors">
                                            수면 분석 시작하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Center: Connection Design (New) */}
                    <FadeIn delay={300} className="w-full lg:w-auto flex justify-center order-2">
                        <div className="flex flex-col items-center justify-center shrink-0 z-10 py-6 lg:py-0 w-full lg:w-[160px]">
                            {/* Success Badge */}
                            <div className="bg-white px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-purple-100 flex items-center gap-3 mb-6 relative z-10">
                                <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center">
                                    <i className="fa-solid fa-moon text-purple-600 text-[14px]"></i>
                                </div>
                                <span className="text-[16px] font-bold text-gray-900 whitespace-nowrap">디톡스 성공</span>
                            </div>

                            {/* Arrow Container */}
                            <div className="relative flex flex-col items-center justify-center gap-2 mb-2">
                                <div className="hidden lg:block w-[1px] h-8 bg-gray-200"></div>
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-10">
                                    <i className="fa-solid fa-arrow-right hidden lg:block text-gray-400 text-[14px]"></i>
                                    <i className="fa-solid fa-arrow-down lg:hidden text-gray-400 text-[14px]"></i>
                                </div>
                                <div className="hidden lg:block w-[1px] h-8 bg-gray-200"></div>
                            </div>

                            <div className="text-center mt-3">
                                <span className="text-[13px] text-gray-400 font-bold uppercase tracking-wider block mb-3">REWARD</span>
                                <div className="bg-[#FFF9DB] text-[#8c6b1f] font-bold text-[16px] px-6 py-3 rounded-xl border border-[#FFE082] shadow-sm whitespace-nowrap">
                                    Deep Night Badge LP 획득
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Limited LP Card (Swapped from Left) */}
                    <div className="w-full max-w-[400px] lg:max-w-[480px] order-3">
                        <FadeIn delay={400}>
                            <div className="relative group cursor-pointer">
                                {/* Vintage LP Construction (Scaled up for feature) */}
                                <div className="relative mb-8 mx-auto w-[85%]">
                                    {/* Vinyl Record - Always visible (50%) */}
                                    <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gray-950 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-[20deg] z-0">
                                        <div className="w-[98%] h-[98%] rounded-full border border-gray-800 opacity-60" style={{ background: 'repeating-radial-gradient(#0a0a0a 0, #0a0a0a 2px, #1a1a1a 3px, #1a1a1a 4px)' }}></div>
                                        <div className="absolute w-1/3 h-1/3 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
                                            <div className="text-[8px] font-bold text-black uppercase tracking-widest leading-tight text-center">DEEP<br />NIGHT</div>
                                        </div>
                                    </div>

                                    {/* Vintage Sleeve */}
                                    <div className="relative z-10 aspect-square bg-[#1e1b4b] rounded-sm shadow-2xl overflow-hidden flex flex-col justify-between p-6 border border-gray-400/20 group-hover:-translate-y-2 transition-transform duration-300">
                                        {/* Texture */}
                                        <div className="absolute inset-0 z-20 pointer-events-none opacity-30 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>

                                        {/* Limited Banner */}
                                        <div className="absolute top-6 -right-12 bg-yellow-400 w-40 py-1 text-center rotate-45 z-30 shadow-md">
                                            <span className="text-[10px] font-bold text-black uppercase tracking-widest">DEEP NIGHT</span>
                                        </div>

                                        {/* Abstract Art: Night Sky */}
                                        <div className="absolute inset-0 z-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] to-[#312e81]"></div>
                                            {/* Moon */}
                                            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-24 h-24 rounded-full bg-white blur-[2px] shadow-[0_0_40px_rgba(255,255,255,0.3)]"></div>
                                            <div className="absolute top-[20%] left-[53%] -translate-x-1/2 w-20 h-20 rounded-full bg-[#1e1b4b]"></div>
                                            {/* Stars */}
                                            <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-yellow-200 rounded-full animate-pulse"></div>
                                            <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75"></div>
                                            <div className="absolute bottom-[40%] left-[15%] w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-150"></div>
                                            <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-yellow-100 rounded-full blur-[1px]"></div>

                                            {/* Bed/Sleep Icon Abstract */}
                                            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 opacity-20">
                                                <i className="fa-solid fa-bed text-6xl text-white"></i>
                                            </div>
                                        </div>

                                        {/* Typography */}
                                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center mt-8">
                                            <div className="text-[#fbbf24] text-xs tracking-widest font-bold mb-2 uppercase">Dabom</div>
                                            <h3 className="apple-subtitle text-[#1d1d1f] drop-shadow-lg">
                                                DEEP SLEEP<br />NOCTURNE
                                            </h3>
                                        </div>

                                        {/* Decoration */}
                                        <div className="relative z-30 flex justify-between w-full">
                                            <div className="text-yellow-500/50 text-xl">✦</div>
                                            <div className="text-yellow-500/50 text-xl">✦</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Deep Sleep Nocturne</h4>
                                    <p className="text-gray-500 text-[15px] mb-6">
                                        세상의 연결을 끄고 나서야 비로소 시작되는,<br />
                                        가장 고요한 나만의 선율.
                                    </p>

                                    <div className="inline-block bg-gray-50 rounded-xl px-8 py-4 border border-gray-100">
                                        <div className="text-[13px] text-gray-400 tracking-widest font-bold uppercase mb-3 border-b border-gray-200 pb-1">Track List</div>
                                        <ol className="text-[15px] text-gray-700 space-y-2 font-medium font-serif text-left">
                                            <li><span className="text-yellow-600 mr-2">1.</span> Moonlight Serenade</li>
                                            <li><span className="text-yellow-600 mr-2">2.</span> Digital Silence</li>
                                            <li><span className="text-yellow-600 mr-2">3.</span> Midnight Dream</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Footer: Strategic Value */}
                <FadeIn delay={600} className="w-full text-center mt-4">
                    <h3 className="apple-subtitle text-[#1d1d1f] word-keep">
                        '수면 시작 - 기상' 루틴을 앱과 함께하며<br />
                        <span className="text-yellow-600 relative inline-block mt-2">
                            DAU 및 체류 시간 확보
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-100 -z-10 bg-opacity-60"></span>
                        </span>
                    </h3>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
