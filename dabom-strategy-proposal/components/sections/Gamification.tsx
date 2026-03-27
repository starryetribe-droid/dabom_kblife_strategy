import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const Gamification: React.FC = () => {
    return (
        <SectionWrapper id="gamification" className="bg-gray-50" pageNumber={21}>
            <div className="max-w-[1400px] mx-auto px-6 w-full h-full flex flex-col justify-center">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <span className="text-kb-yellow font-bold tracking-wider text-[15px] uppercase mb-2 block">STRATEGY 02</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-kb-black leading-tight mb-4">
                            게이미피케이션 요소 강화
                        </h2>
                        <p className="text-gray-500 text-[18px]">
                            뉴트로 감성과 수집의 재미를 결합한 능동적 참여 유도
                        </p>
                    </div>
                </FadeIn>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                    <FadeIn delay={100} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm h-full flex flex-col items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <i className="fa-solid fa-compact-disc text-yellow-600 text-2xl"></i>
                                <h3 className="text-xl font-bold text-gray-900 word-keep">전 연령대가 즐기는 아이템</h3>
                            </div>
                            <p className="text-gray-500 text-[15px] leading-relaxed word-keep">
                                LP판으로 MZ세대에게는 뉴트로 감성을,<br />
                                시니어에게는 추억의 향수를 불러 일으킵니다.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm h-full flex flex-col items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <i className="fa-solid fa-dice text-purple-500 text-2xl"></i>
                                <h3 className="text-xl font-bold text-gray-900 word-keep">가챠 형식의 리워드 지급</h3>
                            </div>
                            <p className="text-gray-500 text-[15px] leading-relaxed word-keep">
                                훈련 성공 시 테마별 LP판 랜덤 지급으로<br />
                                수집의 재미를 제공합니다.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm h-full flex flex-col items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <i className="fa-solid fa-link text-green-500 text-2xl"></i>
                                <h3 className="text-xl font-bold text-gray-900 word-keep">리워드-콘텐츠 연계</h3>
                            </div>
                            <p className="text-gray-500 text-[15px] leading-relaxed word-keep">
                                LP판 리워드와 더헬스 ASMR, 명상 콘텐츠를
                                <br />매칭하여 제공합니다.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className="h-full">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm h-full flex flex-col items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <i className="fa-solid fa-gift text-pink-500 text-2xl"></i>
                                <h3 className="text-xl font-bold text-gray-900 word-keep">소셜 기능 강화</h3>
                            </div>
                            <p className="text-gray-500 text-[15px] leading-relaxed word-keep mb-3">
                                열심히 모은 LP를 친구들에게 자랑하거나 선물하며 소중한 추억을 나눌 수 있습니다.
                            </p>
                            <ul className="text-gray-500 text-[13px] space-y-1 ml-1">
                                <li className="flex items-center gap-2">
                                    <i className="fa-solid fa-check text-pink-300 text-xs"></i> 나만의 컬렉션 공유하기
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fa-solid fa-check text-pink-300 text-xs"></i> 친구에게 응원의 LP 선물
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>

                {/* Bottom Section: LP Collection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Deep Focus: Geometric Abstraction (Target/Eye) */}
                    <FadeIn delay={400}>
                        <div className="group cursor-pointer">
                            <div className="relative mb-6 mx-auto max-w-[220px]">
                                {/* Vinyl Record - Always visible */}
                                <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gray-950 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-[20deg] z-0">
                                    <div className="w-[98%] h-[98%] rounded-full border border-gray-800 opacity-60" style={{ background: 'repeating-radial-gradient(#0a0a0a 0, #0a0a0a 2px, #1a1a1a 3px, #1a1a1a 4px)' }}></div>
                                    <div className="absolute w-1/3 h-1/3 bg-indigo-700 rounded-full flex items-center justify-center shadow-inner">
                                        <div className="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Vintage Sleeve */}
                                <div className="relative z-10 aspect-square bg-[#e8e4dc] rounded-sm shadow-xl overflow-hidden flex flex-col justify-between p-3 border border-gray-400/20 group-hover:-translate-y-1 transition-transform duration-300">
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>
                                    <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>

                                    <div className="absolute inset-0 bg-amber-800 z-0">
                                        <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #4f46e5 0%, transparent 60%)' }}></div>
                                        <div className="absolute w-[180%] h-[180%] -left-[40%] -top-[40%] border-[40px] border-yellow-500/10 rounded-full"></div>
                                        <div className="absolute w-[100%] h-[100%] left-0 top-0 border-[60px] border-indigo-600/20 rounded-full mix-blend-screen scale-75"></div>
                                    </div>

                                    {/* Logo/ Branding minimal */}
                                    <div className="absolute bottom-2 right-2 z-30 opacity-50">
                                        <div className="w-4 h-4 border-2 border-white/40 rounded-full"></div>
                                    </div>

                                    <div className="relative z-30 mt-2">
                                        <div className="border-b border-white/30 pb-1 mb-1 w-6">
                                            <span className="text-[6px] text-white font-bold tracking-widest uppercase">STEREO</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-black text-white leading-none tracking-tighter mix-blend-hard-light">
                                            DEEP<br />FOCUS
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Album Details Below */}
                            <div className="text-center mt-6 px-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Deep Focus</h4>
                                <p className="text-xs text-indigo-600 font-medium mb-4 tracking-tight whitespace-pre-line">
                                    산만한 세상 속,<br />
                                    오직 나에게만 주파수를 맞추는 시간
                                </p>

                                <div className="border-t border-gray-200 pt-3">
                                    <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">TRACKLIST</p>
                                    <ul className="text-xs text-gray-600 space-y-1.5 font-mono">
                                        <li className="flex justify-center items-center group-hover:text-indigo-600 transition-colors">
                                            <span>1. 0.1초의 몰입</span>
                                        </li>
                                        <li className="flex justify-center items-center group-hover:text-indigo-600 transition-colors">
                                            <span>2. 노이즈 캔슬링</span>
                                        </li>
                                        <li className="flex justify-center items-center group-hover:text-indigo-600 transition-colors">
                                            <span>3. 뉴런의 리듬</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Memory Lane: Abstract Composition */}
                    <FadeIn delay={500}>
                        <div className="group cursor-pointer">
                            <div className="group cursor-pointer">
                                <div className="relative mb-6 mx-auto max-w-[220px]">
                                    {/* Vinyl Record - Always visible */}
                                    <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gray-950 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-[20deg] z-0">
                                        <div className="w-[98%] h-[98%] rounded-full border border-gray-800 opacity-60" style={{ background: 'repeating-radial-gradient(#0a0a0a 0, #0a0a0a 2px, #1a1a1a 3px, #1a1a1a 4px)' }}></div>
                                        <div className="absolute w-1/3 h-1/3 bg-orange-700 rounded-full flex items-center justify-center shadow-inner">
                                            <div className="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Vintage Sleeve */}
                                    <div className="relative z-10 aspect-square bg-[#f0e6d2] rounded-sm shadow-xl overflow-hidden flex flex-col justify-between p-3 border border-gray-400/20 group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="absolute inset-0 z-20 pointer-events-none opacity-30 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>

                                        <div className="absolute inset-0 z-0">
                                            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-orange-800 rounded-bl-[80px]"></div>
                                            <div className="absolute bottom-[10%] left-[10%] w-[60%] h-[60%] border-[2px] border-orange-950 rounded-full mix-blend-difference"></div>
                                            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[120%] bg-amber-600/80 -rotate-12 mix-blend-multiply"></div>
                                        </div>

                                        {/* Minimal Decor */}
                                        <div className="absolute bottom-2 left-2 z-30 opacity-60">
                                            <span className="text-[6px] text-orange-900 font-mono">EST. 1988</span>
                                        </div>

                                        <div className="relative z-30 mt-2 self-end text-right">
                                            <div className="border-b border-orange-900/30 pb-1 mb-1 w-6 ml-auto">
                                                <span className="text-[6px] text-orange-900 font-bold tracking-widest uppercase">STEREO</span>
                                            </div>
                                            <h3 className="text-xl font-serif font-black text-orange-950 leading-none tracking-tighter mix-blend-multiply">
                                                MEMORY<br />LANE
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Album Details Below */}
                                <div className="text-center mt-6 px-1">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Memory Lane</h4>
                                    <p className="text-xs text-orange-700 font-medium mb-4 tracking-tight whitespace-pre-line">
                                        희미해진 어제보다<br />
                                        더 선명하게 빛나는 오늘의 나
                                    </p>

                                    <div className="border-t border-gray-200 pt-3">
                                        <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">TRACKLIST</p>
                                        <ul className="text-xs text-gray-600 space-y-1.5 font-mono">
                                            <li className="flex justify-center items-center group-hover:text-orange-700 transition-colors">
                                                <span>1. 그때 그 거리</span>
                                            </li>
                                            <li className="flex justify-center items-center group-hover:text-orange-700 transition-colors">
                                                <span>2. 잊혀진 퍼즐 조각</span>
                                            </li>
                                            <li className="flex justify-center items-center group-hover:text-orange-700 transition-colors">
                                                <span>3. 오래된 사진첩</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Golden Hour: Abstract Composition */}
                    <FadeIn delay={600}>
                        <div className="group cursor-pointer">
                            <div className="group cursor-pointer">
                                <div className="relative mb-6 mx-auto max-w-[220px]">
                                    {/* Vinyl Record - Always visible */}
                                    <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gray-950 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-[20deg] z-0">
                                        <div className="w-[98%] h-[98%] rounded-full border border-gray-800 opacity-60" style={{ background: 'repeating-radial-gradient(#0a0a0a 0, #0a0a0a 2px, #1a1a1a 3px, #1a1a1a 4px)' }}></div>
                                        <div className="absolute w-1/3 h-1/3 bg-yellow-600 rounded-full flex items-center justify-center shadow-inner">
                                            <div className="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Vintage Sleeve */}
                                    <div className="relative z-10 aspect-square bg-[#1a1a1a] rounded-sm shadow-xl overflow-hidden flex flex-col justify-between p-3 border border-gray-400/20 group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>

                                        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                                            <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,#d97706_0deg,#b45309_30deg,#f59e0b_60deg,#d97706_90deg,#b45309_120deg,#f59e0b_150deg,#d97706_180deg,#b45309_210deg,#f59e0b_240deg,#d97706_270deg,#b45309_300deg,#f59e0b_330deg,#d97706_360deg)] opacity-60 animate-spin-slow duration-[30s]"></div>
                                            <div className="absolute w-[60%] h-[60%] bg-gradient-to-tr from-yellow-300 to-yellow-600 rounded-full border-[6px] border-[#1a1a1a]"></div>
                                        </div>

                                        <div className="relative z-30 mt-2">
                                            <div className="border-b border-white/30 pb-1 mb-1 w-6">
                                                <span className="text-[6px] text-white font-bold tracking-widest uppercase">STEREO</span>
                                            </div>
                                            <h3 className="text-xl font-serif font-black text-white leading-none tracking-tighter mix-blend-overlay drop-shadow-md">
                                                GOLDEN<br />HOUR
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Album Details Below */}
                                <div className="text-center mt-6 px-1">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Golden Hour</h4>
                                    <p className="text-xs text-yellow-600 font-medium mb-4 tracking-tight whitespace-pre-line">
                                        가장 눈부신 오늘의 당신,<br />
                                        이 찬란한 기록의 주인공입니다
                                    </p>

                                    <div className="border-t border-gray-200 pt-3">
                                        <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">TRACKLIST</p>
                                        <ul className="text-xs text-gray-600 space-y-1.5 font-mono">
                                            <li className="flex justify-center items-center group-hover:text-yellow-600 transition-colors">
                                                <span>1. 찬란한 정점</span>
                                            </li>
                                            <li className="flex justify-center items-center group-hover:text-yellow-600 transition-colors">
                                                <span>2. 골든 스테이지</span>
                                            </li>
                                            <li className="flex justify-center items-center group-hover:text-yellow-600 transition-colors">
                                                <span>3. 빛나는 나의 하루</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Healing Vibe: Abstract Composition */}
                    <FadeIn delay={700}>
                        <div className="group cursor-pointer">
                            <div className="relative mb-6 mx-auto max-w-[220px]">
                                {/* Vinyl Record - Always visible */}
                                <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gray-950 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-[20deg] z-0">
                                    <div className="w-[98%] h-[98%] rounded-full border border-gray-800 opacity-60" style={{ background: 'repeating-radial-gradient(#0a0a0a 0, #0a0a0a 2px, #1a1a1a 3px, #1a1a1a 4px)' }}></div>
                                    <div className="absolute w-1/3 h-1/3 bg-emerald-700 rounded-full flex items-center justify-center shadow-inner">
                                        <div className="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Vintage Sleeve */}
                                <div className="relative z-10 aspect-square bg-[#f5f5f0] rounded-sm shadow-xl overflow-hidden flex flex-col justify-between p-3 border border-gray-400/20 group-hover:-translate-y-1 transition-transform duration-300">
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>

                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute w-[80%] h-[80%] -right-[20%] -top-[10%] bg-emerald-200 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-multiply"></div>
                                        <div className="absolute w-[60%] h-[60%] -left-[10%] bottom-[10%] bg-teal-300 rounded-[50%_50%_30%_70%/50%_30%_70%_60%] mix-blend-multiply opacity-80"></div>
                                    </div>

                                    {/* Minimal Decor */}
                                    <div className="absolute top-2 left-2 z-30 opacity-40">
                                        <div className="w-6 h-1 bg-emerald-900/20"></div>
                                    </div>

                                    <div className="relative z-30 mt-auto mb-2 ml-2">
                                        <div className="border-b border-emerald-900/30 pb-1 mb-1 w-6">
                                            <span className="text-[6px] text-emerald-900 font-bold tracking-widest uppercase">STEREO</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-black text-emerald-950 leading-none tracking-tighter mix-blend-multiply">
                                            HEALING<br />VIBE
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Album Details Below */}
                            <div className="text-center mt-6 px-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Healing Vibe</h4>
                                <p className="text-xs text-emerald-700 font-medium mb-4 tracking-tight whitespace-pre-line">
                                    가끔은 멈춰도 괜찮아요,<br />
                                    당신의 계절은 충분히 아름다우니까
                                </p>

                                <div className="border-t border-gray-200 pt-3">
                                    <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">TRACKLIST</p>
                                    <ul className="text-xs text-gray-600 space-y-1.5 font-mono">
                                        <li className="flex justify-center items-center group-hover:text-emerald-700 transition-colors">
                                            <span>1. 숨 가쁜 오후의 쉼표</span>
                                        </li>
                                        <li className="flex justify-center items-center group-hover:text-emerald-700 transition-colors">
                                            <span>2. 초록색 위로</span>
                                        </li>
                                        <li className="flex justify-center items-center group-hover:text-emerald-700 transition-colors">
                                            <span>3. 다 괜찮다는 말</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
