import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

type SceneData = {
    id: number;
    duration: number;
    bg: string;
};

// 1부터 11까지의 씬 정의
const SCENES: SceneData[] = [
    { id: 0, duration: 0, bg: 'bg-[#1A1A1A]' }, // 대기 상태 (Play 버튼)
    { id: 1, duration: 5000, bg: 'bg-[#FFF8E5]' },
    { id: 2, duration: 6000, bg: 'bg-[#F8FAFC]' },
    { id: 3, duration: 6000, bg: 'bg-[#F1F5F9]' },
    { id: 4, duration: 7500, bg: 'bg-gradient-to-b from-[#FFF8E5] to-[#E2E8F0]' },
    { id: 5, duration: 5000, bg: 'bg-white' },
    { id: 6, duration: 6500, bg: 'bg-[#FFF8E5]' },
    { id: 7, duration: 6500, bg: 'bg-white' },
    { id: 8, duration: 7500, bg: 'bg-gradient-to-b from-[#FFF8E5] to-[#FEF3C7]' },
    { id: 9, duration: 6500, bg: 'bg-[#F0FDF4]' },
    { id: 10, duration: 8000, bg: 'bg-gradient-to-br from-[#DCFCE7] to-[#D1FAE5]' },
    { id: 11, duration: 9000, bg: 'bg-[#2C3E2D]' },
];

// Define Bubble components OUTSIDE to prevent re-creation glitches
const AIBubble = ({ text, show = true }: { text: string, show?: boolean }) => (
    <AnimatePresence>
        {show && (
            <motion.div 
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="flex gap-4 items-start w-full"
            >
                <div className="w-10 h-10 rounded-full bg-[#FFBC00] flex shrink-0 items-center justify-center text-[18px] shadow-sm">🌱</div>
                <div className="bg-[#FFF8E5] border border-[#FFBC00]/30 text-[#111] rounded-[18px] rounded-tl-[4px] px-5 py-3.5 text-[16px] font-medium leading-relaxed max-w-[80%] shadow-sm whitespace-pre-line">
                    {text}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

const UserBubble = ({ text, show = true }: { text: string, show?: boolean }) => (
    <AnimatePresence>
        {show && (
            <motion.div 
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="flex w-full justify-end"
            >
                <div className="bg-[#1A1A1A] text-white rounded-[18px] rounded-tr-[4px] px-5 py-3.5 text-[16px] font-medium leading-relaxed max-w-[80%] shadow-sm whitespace-pre-line">
                    {text}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export const AutobiographicalMemoryScenario: React.FC = () => {
    const [scene, setScene] = useState(0);
    const [chatStep, setChatStep] = useState(0);

    useEffect(() => {
        if (scene === 0) return;

        setChatStep(0); 

        let stepTimers: NodeJS.Timeout[] = [];
        if (scene === 6 || scene === 7 || scene === 8 || scene === 9) {
            // Further slowed down as per user request (intervals increased by ~1.2s each)
            stepTimers.push(setTimeout(() => setChatStep(1), 1500));
            stepTimers.push(setTimeout(() => setChatStep(2), 3500));
            stepTimers.push(setTimeout(() => setChatStep(3), 5500));
            stepTimers.push(setTimeout(() => setChatStep(4), 7500));
        }

        return () => {
            stepTimers.forEach(clearTimeout);
        };
    }, [scene]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (scene > 0 && scene < 11) {
                if (e.key === 'ArrowRight') {
                    setScene(s => Math.min(SCENES.length - 1, s + 1));
                } else if (e.key === 'ArrowLeft') {
                    setScene(s => Math.max(0, s - 1));
                }
            } else if (scene === 0 && e.key === 'ArrowRight') {
                setScene(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [scene]);

    const currentSceneData = SCENES[scene] || SCENES[0];

    const renderSceneContent = () => {
        switch (scene) {
            case 0:
                return (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-40 bg-[#1A1A1A]">
                        <button onClick={() => setScene(1)} className="w-24 h-24 rounded-full bg-[#FFBC00] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer border-4 border-[#FFBC00]/30 outline-none">
                            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="ml-2">
                                <path d="M8 6L26 16L8 26V6Z" fill="#1A1A1A"/>
                            </svg>
                        </button>
                        <p className="text-white/60 text-[16px] mt-6 font-medium tracking-widest">시네마틱 시나리오 재생</p>
                    </div>
                );
            case 1:
                return (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}
                        className="flex flex-col items-center justify-center w-full h-full text-center px-10"
                    >
                        <div className="text-[#545045] font-bold tracking-widest text-[16px] mb-8 bg-[#FFBC00]/20 px-6 py-2 rounded-full border border-[#FFBC00]/30">이정수 씨, 73세 / 대기업 영업부 35년 근무 후 퇴직</div>
                        <h2 className="text-[56px] font-serif font-bold text-[#111] leading-snug mb-10 whitespace-pre-line tracking-tight">
                            {"퇴직하고, 무릎 수술 후,\n집에만 있는 날이 늘었다."}
                        </h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="text-[22px] text-gray-600 leading-relaxed font-medium">
                            새로운 경험이 없어지자<br/>35년의 기억이 한 문장으로 압축되기 시작했다.
                        </motion.p>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center justify-center w-full h-full px-20">
                        <div className="bg-[#333] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-12 shadow-md">기억 밀도 감소</div>
                        <div className="flex w-full max-w-[1200px] gap-10 mb-12 h-[320px]">
                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-white p-10 rounded-[24px] shadow-sm border border-gray-200">
                                <h3 className="text-gray-400 font-bold mb-6 text-[18px]">35년의 실제 기억들</h3>
                                <ul className="space-y-5 text-[19px] text-[#111] font-medium tracking-tight">
                                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 1988년 3월, 겁나던 여의도 로비</li>
                                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 박 과장이 사준 구내식당 된장찌개</li>
                                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 후배 첫 계약 성사 때의 소주 한 잔</li>
                                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 무릎 아픈데 나갔던 마지막 출장</li>
                                </ul>
                            </motion.div>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="flex-1 bg-[#1A1A1A] p-10 rounded-[24px] shadow-sm border border-gray-800 flex flex-col justify-center items-center relative overflow-hidden">
                                <h3 className="text-gray-500 font-bold mb-6 absolute top-10 left-10 text-[18px]">지금 이정수 씨 머릿속</h3>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
                                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.5, type: 'spring' }} className="bg-white/10 backdrop-blur-md rounded-[20px] p-8 text-[24px] font-bold text-white italic border border-white/20 text-center shadow-2xl z-10">
                                    "그냥 열심히 살았지 뭐."
                                </motion.div>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-center text-[20px] text-gray-600 leading-relaxed font-medium bg-white/50 backdrop-blur-sm px-10 py-5 rounded-2xl">
                            일상이 반복되고 새로운 경험이 줄자, 기억이 한 문장으로 '압축'되었다.<br/>
                            <span className="text-[#1A1A1A] font-bold">나이가 들수록 시간이 빨리 가는 느낌, 이것 때문입니다.</span>
                        </motion.div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center w-full h-full px-20 text-center">
                        <div className="bg-[#333] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-12 shadow-md">전두엽 기능 약화</div>
                        <h2 className="text-[52px] font-serif font-bold text-[#111] mb-12 tracking-tight">"떠올리려 해도, 안 떠오른다."</h2>
                        <div className="text-[20px] text-gray-600 leading-unug mb-16 space-y-2">
                            <p>노화로 인한 전두엽 기능 저하 <i className="fa-solid fa-arrow-right mx-2 text-gray-400"></i> <span className="text-[#1A1A1A] font-bold bg-[#FFBC00]/30 px-2 py-0.5 rounded">일화기억(Episodic memory) 탐색 기능 저하</span></p>
                            <p className="mt-4">'어떤 기억이 있는지'는 알지만, <span className="font-bold underline decoration-[#FFBC00] decoration-4 underline-offset-4">'그 장면을 꺼내는 능력'</span>이 줄어든다.</p>
                        </div>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: 'spring' }} className="bg-white border text-left border-gray-200 rounded-[28px] p-10 text-[26px] font-bold text-[#545045] italic shadow-xl relative max-w-[800px]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-t border-l border-gray-200 rotate-45"></div>
                            <div className="text-gray-400 text-4xl mb-2">"</div>
                            내가 기억을 잊어버린 게 아니야.<br/>
                            <span className="text-[#111]">꺼내는 방법을 잊어버린 거야.</span>
                            <div className="text-gray-400 text-4xl mt-2 text-right leading-none">"</div>
                        </motion.div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center w-full h-full px-20">
                        <div className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-10 shadow-md">기억 감소 · 일반화 → 우울 악순환</div>
                        <div className="flex flex-col items-center gap-3 text-[18px] font-bold text-[#545045] mb-12 w-full max-w-[600px]">
                            <motion.div initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}} className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-200 w-full text-center">기억이 압축됨</motion.div>
                            <motion.i initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}} className="fa-solid fa-arrow-down text-gray-300 text-xl"></motion.i>
                            <motion.div initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1.5}} className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-200 w-full text-center">"별것 없었다"는 생각이 굳어짐</motion.div>
                            <motion.i initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.0}} className="fa-solid fa-arrow-down text-gray-300 text-xl"></motion.i>
                            <motion.div initial={{y:-10, opacity:0, scale:0.95}} animate={{y:0, opacity:1, scale:1}} transition={{delay:2.5}} className="bg-red-50 text-red-600 px-8 py-4 rounded-2xl shadow-md border border-red-200 w-full text-center text-[20px]">우울감 증가</motion.div>
                            <motion.i initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.0}} className="fa-solid fa-arrow-down text-gray-300 text-xl"></motion.i>
                            <motion.div initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:3.5}} className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-200 w-full text-center">기억을 탐색하려는 의욕 저하</motion.div>
                            <motion.i initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4.0}} className="fa-solid fa-arrow-down text-gray-300 text-xl"></motion.i>
                            <motion.div initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:4.5}} className="bg-white/50 backdrop-blur px-8 py-4 rounded-2xl border border-gray-300 border-dashed w-full text-center text-gray-500">기억이 더 압축됨 (반복)</motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.5 }} className="flex flex-col gap-4 text-center">
                            <div className="text-[26px] font-bold text-[#1A1A1A] italic">"35년을 다녔는데, 끝이 그 모양이었어."</div>
                            <div className="text-[28px] font-bold text-red-600 italic tracking-tight">"나는 결국 필요 없는 사람이 된 거야."</div>
                        </motion.div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full h-full px-20 pt-20">
                        <div className="bg-[#FFBC00] text-[#111] px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-16 shadow-md">훈련 1단계 · 감정 단서 제시</div>
                        <div className="w-full max-w-[800px] flex flex-col items-center">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="bg-[#F8FAFC] border-2 border-gray-100 rounded-[32px] p-12 w-full text-center shadow-xl mb-12">
                                <div className="text-gray-500 font-bold text-[18px] mb-6 uppercase tracking-widest">오늘의 키워드</div>
                                <div className="inline-block bg-white border border-gray-200 rounded-2xl px-12 py-6 text-[42px] font-bold text-[#111] shadow-sm transform -rotate-1">
                                    첫 출근
                                </div>
                            </motion.div>
                            <AIBubble text="이 단어를 보면 어떤 기억이 떠오르세요?" show={chatStep >= 0} />
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="mt-auto mb-20 text-center bg-gray-50 px-12 py-8 rounded-[24px]">
                            <p className="text-[20px] text-gray-600 leading-relaxed font-medium">
                                "행복한 기억 떠올려봐요"처럼 막연한 질문은 우울한 사람에게 통하지 않습니다.<br/>
                                <span className="text-[#1A1A1A] font-bold">구체적인 감정 단어 하나</span>가 닫힌 기억의 문을 여는 열쇠입니다.
                            </p>
                        </motion.div>
                    </motion.div>
                );
            case 6:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full h-full px-20 pt-16">
                        <div className="bg-[#333] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-10 shadow-md">훈련 2단계 · 일반적 기억 감지</div>
                        <div className="w-full max-w-[900px] bg-white rounded-[32px] shadow-xl border border-gray-200 flex flex-col h-[560px] overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <span className="ml-4 font-bold text-gray-500 text-[14px]">다봄 AI 기억 훈련 세션</span>
                            </div>
                            <div className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto bg-white/50">
                                <AIBubble text="이 단어를 보면 어떤 기억이 떠오르세요?" show={chatStep >= 0} />
                                <UserBubble text="뭐 별 거 있었나. 시키는 대로 했지." show={chatStep >= 1} />
                                <AnimatePresence>
                                    {chatStep >= 2 && (
                                        <motion.div layout initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-col items-center my-4 overflow-hidden">
                                            <div className="text-[13px] text-[#FFBC00] font-bold mb-2 flex items-center gap-2">
                                                <i className="fa-solid fa-chart-simple"></i> AI 분석 중...
                                            </div>
                                            <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.2, ease: "linear" }}
                                                    className="h-full bg-[#FFBC00] rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence>
                                    {chatStep >= 3 && (
                                        <motion.div layout initial={{ opacity: 0, scale: 0.9, height: 0 }} animate={{ opacity: 1, scale: 1, height: 'auto' }} className="self-center bg-red-50 border border-red-200 rounded-[20px] p-6 max-w-[80%] text-center shadow-sm overflow-hidden">
                                            <p className="text-red-600 font-bold text-[18px] mb-2 leading-tight">이 답변에는 구체적인 사건이 없습니다.</p>
                                            <p className="text-red-500/80 text-[15px]">언제, 어디서, 누구와 있었는지 — 장면이 없어요.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="mt-auto mb-12 text-center">
                            <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                                다봄 AI는 14만 건 데이터로 훈련된 독자적 <span className="font-bold text-[#111]">'기억 구체성 평가 모델'</span>로<br/>
                                사용자의 답변이 일반적 기억인지 즉시 판단합니다.
                            </p>
                        </motion.div>
                    </motion.div>
                );
            case 7:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full h-full px-20 pt-16">
                        <div className="bg-[#333] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-10 shadow-md">훈련 3단계 · 구체화 프롬프트</div>
                        <div className="w-full max-w-[900px] bg-[#F8FAFC] rounded-[32px] shadow-inner border border-gray-200 flex flex-col p-8 gap-6 h-[560px] overflow-hidden justify-center">
                            <AIBubble text={`그날 어떤 계절이었어요?\n회사 건물 들어갔을 때 느낌은요?`} show={chatStep >= 0} />
                            <UserBubble text={`1988년 3월이었어요.\n여의도… 로비가 엄청 넓었어. 겁이 났지.`} show={chatStep >= 1} />
                            <AIBubble text={`어떤 옷을 입고 가셨어요?\n처음 만난 사람이 있었나요?`} show={chatStep >= 2} />
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="mt-auto mb-12 text-center">
                            <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                                막연한 답변을 받은 뒤, <span className="font-bold text-[#111]">시간·장소·감각·인물을 하나씩 물어</span><br/>기억의 빈칸을 채워나갑니다.
                            </p>
                        </motion.div>
                    </motion.div>
                );
            case 8:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full h-full px-20 pt-16 relative">
                        <div className="bg-[#333] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-10 shadow-md z-10 relative">훈련 4단계 · 구체적 기억 인출</div>
                        <div className="w-full max-w-[900px] flex flex-col gap-6 z-10 relative">
                            <UserBubble text="아버지가 사준 양복 입고 갔어요. 좀 컸는데." show={chatStep >= 0} />
                            <UserBubble text={`엘리베이터에서 '신입이냐'고 물어본 사람이\n나중에 우리 팀 박 과장이었어.`} show={chatStep >= 1} />
                            <UserBubble text={`구내식당 데려가면서\n'첫날이니까 밥은 내가 산다' 그랬어요.\n구내식당인데.`} show={chatStep >= 2} />
                        </div>
                        <AnimatePresence>
                            {chatStep >= 3 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }} 
                                    animate={{ opacity: 1, scale: 1, y: 0 }} 
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] bg-white/95 backdrop-blur-xl z-20 rounded-[40px] p-12 border border-white shadow-[0_20px_50px_rgba(255,188,0,0.2)] flex flex-col items-center justify-center text-center"
                                >
                                    <div className="text-[48px] font-bold text-[#1A1A1A] mb-6 tracking-tight">
                                        😊 이정수 씨가 웃었다.
                                    </div>
                                    <div className="text-[19px] text-gray-700 font-medium leading-relaxed">
                                        '뭐 별 거 있었나'에서<br/>
                                        <span className="font-bold text-[#FFBC00] bg-black px-2.5 py-0.5 rounded mx-1">'겁나던 로비, 좀 컸던 양복, 박 과장의 된장찌개'</span>로.<br/>
                                        <span className="text-[23px] font-bold text-[#111] mt-5 block">기억이 살아났습니다.</span>
                                    </div>
                                    <div className="absolute inset-0 bg-[#FFBC00]/5 -z-10 rounded-[40px]"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            case 9:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center w-full h-full px-20">
                        <div className="bg-green-800 text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest mb-16 shadow-md">효과 1 · 부정적 반추 차단</div>
                        <div className="flex w-full max-w-[1200px] items-stretch gap-8 mb-16">
                            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-white rounded-[32px] p-10 border-2 border-red-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-red-400"></div>
                                <h3 className="text-red-500 font-bold mb-8 text-[20px] uppercase tracking-widest text-center">Before</h3>
                                <div className="bg-red-50 rounded-2xl p-6 mb-6 text-center text-red-700 font-bold text-[18px]">
                                    "35년을 다녔는데, 끝이 그 모양이었어."
                                </div>
                                <div className="text-center text-gray-500 font-medium text-[16px] space-y-2">
                                    <p>구체적 장면 없음</p>
                                    <p><i className="fa-solid fa-arrow-down"></i></p>
                                    <p className="font-bold text-red-400">부정적 반추 지속</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} className="flex flex-col justify-center items-center">
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-green-500 text-2xl z-10 border border-gray-100">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.8 }} className="flex-1 bg-white rounded-[32px] p-10 border-2 border-green-200 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                                <h3 className="text-green-600 font-bold mb-8 text-[20px] uppercase tracking-widest text-center">After</h3>
                                <ul className="bg-green-50 rounded-2xl p-6 mb-6 text-[18px] font-bold text-green-800 space-y-3">
                                    <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 첫 출근 날 겁나던 로비</li>
                                    <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 박 과장과 먹은 구내식당 된장찌개</li>
                                    <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 후배에게 받은 감사 인사</li>
                                </ul>
                                <div className="text-center text-green-600 font-bold text-[18px]">
                                    <i className="fa-solid fa-shield-halved mr-2"></i>
                                    구체적 장면들이 <span className="underline decoration-2 underline-offset-4">반추를 끊어냅니다</span>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-center">
                            <p className="text-[20px] text-green-900 leading-relaxed font-medium bg-white/50 px-8 py-4 rounded-full">
                                과일반화된 "별것 없었다"는 반추는 <span className="font-bold">구체적 기억들이 채워질수록 자연스럽게 힘을 잃습니다.</span>
                            </p>
                        </motion.div>
                    </motion.div>
                );
            case 10:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center w-full h-full px-20">
                        <div className="flex gap-4 mb-16">
                            <div className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest shadow-md">효과 2 · 신경망 연결성 강화</div>
                            <div className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-[15px] font-bold tracking-widest shadow-md">효과 3 · 자기 통합감 형성</div>
                        </div>
                        <div className="flex w-full max-w-[1300px] items-stretch gap-10">
                            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-white/80 backdrop-blur-md rounded-[32px] p-12 border border-white shadow-2xl">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
                                    <i className="fa-solid fa-network-wired"></i>
                                </div>
                                <div className="text-[#545045] font-medium text-[20px] leading-relaxed italic mb-8">
                                    "TV만 멍하게 보던 하루가 달라졌다.<br/>
                                    '바람이 시원하다.'<br/>
                                    '손주 데리고 나가야겠다.'<br/>
                                    작은 생각들이 다시 떠오르기 시작했다."
                                </div>
                                <div className="border-t border-gray-200 pt-6 space-y-3">
                                    <div className="flex items-center gap-3 font-bold text-[18px] text-[#111]"><i className="fa-solid fa-arrow-right text-blue-500"></i> Default Mode Network 연결성 증가</div>
                                    <div className="flex items-center gap-3 font-bold text-[18px] text-[#111]"><i className="fa-solid fa-arrow-right text-blue-500"></i> 정서 처리 능력 향상</div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }} className="flex-1 bg-white/80 backdrop-blur-md rounded-[32px] p-12 border border-white shadow-2xl">
                                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
                                    <i className="fa-solid fa-puzzle-piece"></i>
                                </div>
                                <div className="text-[#545045] font-medium text-[20px] leading-relaxed italic mb-8">
                                    "승진에서 밀렸던 날,<br/>
                                    접대에 지쳤던 밤.<br/>
                                    퇴직 날 팀원들이 준비한 케이크.<br/>
                                    고통도, 보람도 — 전부 내 인생이었다."
                                </div>
                                <div className="border-t border-gray-200 pt-6 space-y-3">
                                    <div className="flex items-center gap-3 font-bold text-[18px] text-[#111]"><i className="fa-solid fa-arrow-right text-amber-500"></i> 고통스러운 과거까지 수용</div>
                                    <div className="flex items-center gap-3 font-bold text-[18px] text-[#111]"><i className="fa-solid fa-arrow-right text-amber-500"></i> 인생 전반에 대한 통합감</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            case 11:
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center w-full h-full px-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-[56px] font-serif font-bold text-white leading-tight mb-12 tracking-tight z-10">
                            "결국 밀려난 사람"이라는<br/>
                            안개 속에 묻혀 있던 35년이,
                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }} className="text-[32px] text-green-200 font-medium leading-relaxed mb-20 z-10">
                            구체적인 장면으로 되살아나며<br/>
                            다시 오늘을 살아가는 힘이 되었다.
                        </motion.p>
                        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 4.5, duration: 1 }} className="w-24 h-[1px] bg-green-500/50 mb-12 z-10 origin-center"></motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5, duration: 1 }} className="text-[20px] text-gray-400 font-medium tracking-wide z-10 space-y-2">
                            <p>"기억은 잊혀진 게 아닙니다.</p>
                            <p>꺼내는 연습이 필요했을 뿐입니다."</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 7.0 }} className="absolute bottom-16 text-[14px] text-green-700/60 font-bold tracking-widest uppercase">
                            자서전적 기억 훈련 · 고려대학교 심리학부 임상 기법
                        </motion.div>
                        <motion.button 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8.5 }}
                            onClick={() => setScene(0)}
                            className="absolute top-12 right-12 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-[15px] font-bold transition-all z-30 flex items-center gap-3 backdrop-blur-md border border-white/10"
                        >
                            다시 재생 <i className="fa-solid fa-rotate-right"></i>
                        </motion.button>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <SectionWrapper id="scenario-slide" className={currentSceneData.bg} pageNumber={14}>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={scene}
                    className="w-full h-full absolute inset-0 transition-colors duration-1000"
                >
                    {renderSceneContent()}
                </motion.div>
            </AnimatePresence>
            {scene > 0 && scene < 11 && (
                <>
                    <button 
                        onClick={() => setScene(s => Math.max(0, s - 1))}
                        className="absolute bottom-12 left-12 w-14 h-14 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md text-gray-700 border border-gray-400/20 shadow-sm flex items-center justify-center transition-all text-xl z-50 transform hover:scale-105"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button 
                        onClick={() => setScene(s => Math.min(SCENES.length - 1, s + 1))}
                        className="absolute bottom-12 right-12 w-14 h-14 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md text-gray-700 border border-gray-400/20 shadow-sm flex items-center justify-center transition-all text-xl z-50 transform hover:scale-105"
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </>
            )}
        </SectionWrapper>
    );
};

export default AutobiographicalMemoryScenario;
