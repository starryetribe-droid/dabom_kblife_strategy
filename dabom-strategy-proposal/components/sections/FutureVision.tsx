import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const FutureVision: React.FC = () => {
    return (
        <SectionWrapper id="future-vision" className="bg-kb-bg overflow-hidden relative" pageNumber={26}>
            {/* Background Decor - Nature/Warm theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-100/40 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-100/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <FadeIn>
                        <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 block">Next Generation AI 다봄</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-kb-black">
                            목소리로 교감하는<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Speech-to-Speech</span><br />
                            시니어 리빙 메이트, 다봄
                        </h2>
                        <p className="text-kb-gray text-lg leading-relaxed mb-8 break-keep">
                            마치 숲속에서 친구와 산책하듯,<br />
                            <strong>실시간 음성 대화</strong>로 마음을 나누세요.<br />
                            딱딱한 텍스트가 아닌, 따뜻한 목소리로 위로합니다.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <div className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-3xl border border-orange-100 shadow-sm flex items-center gap-4 hover:bg-orange-50/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xl">
                                    <i className="fa-solid fa-microphone-lines"></i>
                                </div>
                                <div className="text-left">
                                    <span className="block font-bold text-kb-black">Real-time Voice</span>
                                    <span className="text-xs text-gray-500">지연 없는 실시간 대화</span>
                                </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-3xl border border-green-100 shadow-sm flex items-center gap-4 hover:bg-green-50/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xl">
                                    <i className="fa-solid fa-leaf"></i>
                                </div>
                                <div className="text-left">
                                    <span className="block font-bold text-kb-black">Cozy Healing</span>
                                    <span className="text-xs text-gray-500">편안한 힐링 인터페이스</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Mockup Content */}
                <div className="flex-1 flex justify-center order-1 md:order-2">
                    <FadeIn delay={200}>
                        {/* Smartphone Mockup - Clean White/Beige look */}
                        <div className="relative w-[320px] h-[640px] bg-white rounded-[3.5rem] border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-gray-200 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">

                            {/* Screen Content - Cozy Garden Scene */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#EBF4FF] via-[#E6F7E6] to-[#E6F7E6]">

                                {/* Background Elements (Nature) */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {/* Clouds */}
                                    <div className="absolute top-10 right-[-20px] w-32 h-12 bg-white rounded-full opacity-60 blur-md animate-[pulse_8s_infinite]"></div>
                                    <div className="absolute top-24 left-[-10px] w-24 h-10 bg-white rounded-full opacity-40 blur-md animate-[pulse_6s_infinite]"></div>

                                    {/* Sun */}
                                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl"></div>

                                    {/* Hills/Ground */}
                                    <div className="absolute bottom-0 w-full h-[45%] bg-[#CDE8D4] rounded-t-[50%] scale-150 translate-y-10"></div>
                                    <div className="absolute bottom-0 w-full h-[35%] bg-[#B5E0BF] rounded-t-[40%] scale-125 translate-y-4"></div>
                                </div>

                                {/* Character (Peach/Sprout based on image) */}
                                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                                    {/* Floating Animation */}
                                    <div className="relative animate-[bounce_4s_infinite]">
                                        {/* Character Body (Peach Shape) */}
                                        <div className="w-40 h-36 rounded-[45%] bg-gradient-to-br from-[#FFD1A9] via-[#FFB7B2] to-[#FF9E9E] shadow-lg relative flex items-center justify-center">

                                            {/* Sprout on Head */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                                <div className="w-1 h-4 bg-[#8DA548]"></div>
                                                <div className="flex">
                                                    <div className="w-6 h-6 rounded-full rounded-br-none bg-[#8DA548] -rotate-12 -ml-2 -mt-2"></div>
                                                    <div className="w-5 h-5 rounded-full rounded-bl-none bg-[#A1BD53] rotate-12 -mr-2 -mt-1"></div>
                                                </div>
                                            </div>

                                            {/* Face */}
                                            <div className="flex flex-col items-center gap-2 mt-2">
                                                {/* Eyes */}
                                                <div className="flex gap-8">
                                                    <div className="w-2.5 h-3.5 bg-[#4A3B32] rounded-full animate-[blink_4s_infinite]"></div>
                                                    <div className="w-2.5 h-3.5 bg-[#4A3B32] rounded-full animate-[blink_4s_infinite]"></div>
                                                </div>
                                                {/* Blush */}
                                                <div className="absolute top-[45%] left-4 w-4 h-2 bg-[#FF7E7E] rounded-full opacity-40 blur-[2px]"></div>
                                                <div className="absolute top-[45%] right-4 w-4 h-2 bg-[#FF7E7E] rounded-full opacity-40 blur-[2px]"></div>
                                                {/* Mouth */}
                                                <div className="w-3 h-1.5 border-b-2 border-[#4A3B32] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shadow */}
                                    <div className="w-24 h-4 bg-[#8CA692] rounded-[50%] blur-sm mt-6 opacity-30 scale-y-50"></div>
                                </div>

                                {/* Top HUD - Minimal */}
                                <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
                                    <div className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-xs font-bold text-gray-600">다봄이와 연결됨</span>
                                    </div>
                                </div>

                                {/* Bottom Dialogue UI (Speech-to-Speech Interface) */}
                                <div className="absolute bottom-10 left-6 right-6 z-20">
                                    <div className="flex flex-col items-center gap-4">

                                        {/* Voice Wave Visualization */}
                                        <div className="flex items-center justify-center gap-1 h-8">
                                            <div className="w-1 h-3 bg-white rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                                            <div className="w-1 h-6 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                                            <div className="w-1 h-4 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                                            <div className="w-1 h-7 bg-white rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
                                            <div className="w-1 h-3 bg-white rounded-full animate-[pulse_0.9s_ease-in-out_infinite]"></div>
                                        </div>

                                        {/* Floating Captions (Speech Bubble) */}
                                        <div className="bg-white/90 backdrop-blur-xl px-5 py-4 rounded-3xl rounded-tr-none shadow-soft text-center w-full relative">
                                            <p className="text-sm text-gray-700 font-medium leading-relaxed">
                                                OO님, 3일 내내 몸의 긴장도가 높아요.<br />지속적인 스트레스는 우울감을 높일 수 있어요.<br />
                                                다봄이와 <span className="text-orange-500 font-bold">행복한 기억을 떠올려 볼까요?</span>
                                            </p>
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                                        </div>

                                        {/* Mic Button */}
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 shadow-lg shadow-orange-200 flex items-center justify-center text-white text-2xl transform active:scale-95 transition-transform cursor-pointer ring-4 ring-white hover:scale-105">
                                            <i className="fa-solid fa-microphone"></i>
                                        </div>
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