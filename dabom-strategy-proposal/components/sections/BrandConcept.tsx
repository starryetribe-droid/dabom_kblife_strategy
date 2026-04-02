import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

export const BrandConcept: React.FC = () => {
    return (
        <SectionWrapper id="brand-concept" className="bg-[#F0F4E8] overflow-hidden" pageNumber={4}>

            {/* Background Graphic (Subtle refined pattern) */}
            <div className="absolute right-0 top-1/2 -translate-y-[45%] w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] translate-x-[20%] pointer-events-none z-0 opacity-40">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[#DCE4CD]"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                        <circle cx="50" cy="25" r="25" />
                        <circle cx="50" cy="75" r="25" />
                        <circle cx="25" cy="50" r="25" />
                        <circle cx="75" cy="50" r="25" />
                    </svg>
                </motion.div>
            </div>

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center py-20">
                
                {/* 1. Centered Header Area */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 flex justify-center"
                    >
                        {/* 3. DABOM Badge Style */}
                        <span className="bg-[#354526] text-white px-6 py-1.5 rounded-full text-[14px] font-black tracking-[0.2em] uppercase shadow-lg shadow-green-900/20">
                            DABOM
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl text-[#556748] font-medium mb-4 tracking-tight break-keep">
                            마음 건강과 두뇌 건강까지 — 내 인생의 두 번째 성장기를 위한,
                        </p>
                        <h2 className="text-[52px] md:text-[80px] font-black text-[#1d1d1f] leading-tight tracking-tighter mb-4">
                            나만의 자기돌봄 가이드
                        </h2>
                    </motion.div>
                </div>

                {/* 2 & 4. Grouped Cards Section with Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative"
                >
                    {/* Integrated Subtitle for Grouping */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                        <span className="text-xl md:text-2xl text-[#627555] font-medium">전문성에 재미 요소를 더한,</span>
                        <div className="h-px w-8 bg-gray-300 hidden md:block"></div>
                        <span className="text-2xl md:text-3xl font-black text-[#293B1F] px-4 py-1 border-b-4 border-kb-yellow">
                            시니어 멘탈케어 패키지
                        </span>
                    </div>

                    {/* Premium Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Card 1: 마음 건강 (Multi-item card redesigned) */}
                        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-[24px] p-8 shadow-[0_20px_50px_rgba(53,69,38,0.08)] border border-white/80 flex flex-col transition-all hover:translate-y-[-5px] hover:shadow-[0_30px_60px_rgba(53,69,38,0.12)]">
                            <h4 className="text-[20px] font-black text-[#3D5A21] mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#3D5A21] rounded-full"></span>
                                마음 건강
                            </h4>
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { icon: "fa-comments", label: <>자서전적 기억 훈련<br />AI 챗봇</> },
                                    { icon: "fa-heart-pulse", label: "마음 건강 검진" },
                                    { icon: "fa-arrow-trend-up", label: "마음 컨디션 리포트" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F7F9F2] flex items-center justify-center mb-4 text-[#45612A] text-xl shadow-inner border border-[#EDF2E6]">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>
                                        <p className="text-[#333] font-black text-[15px] md:text-[17px] leading-snug break-keep text-center tracking-tight opacity-90">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: 두뇌 건강 */}
                        <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_50px_rgba(101,133,61,0.08)] border border-white/80 flex flex-col items-center text-center transition-all hover:translate-y-[-5px] hover:shadow-[0_30px_60px_rgba(101,133,61,0.12)]">
                            <h4 className="text-[20px] font-black text-[#65853D] self-start mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#65853D] rounded-full"></span>
                                두뇌 건강
                            </h4>
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F7F9F2] flex items-center justify-center mb-6 text-[#65853D] text-xl shadow-inner border border-[#EDF2E6]">
                                <i className="fa-solid fa-brain"></i>
                            </div>
                            <p className="text-[#333] font-black text-[16px] md:text-[18px] tracking-tight">두뇌 건강 운동</p>
                        </div>

                        {/* Card 3: 리마인드 */}
                        <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_50px_rgba(124,143,112,0.08)] border border-white/80 flex flex-col transition-all hover:translate-y-[-5px] hover:shadow-[0_30px_60px_rgba(124,143,112,0.12)]">
                            <h4 className="text-[20px] font-black text-[#7C8F70] mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#7C8F70] rounded-full"></span>
                                리마인드
                            </h4>
                            <div className="flex flex-col gap-6 w-full">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F7F9F2] flex items-center justify-center text-[#7C8F70] text-lg md:text-xl shadow-sm border border-[#EDF2E6] shrink-0">
                                        <i className="fa-solid fa-seedling"></i>
                                    </div>
                                    <div className="text-left overflow-hidden">
                                        <p className="text-[#333] font-black text-[16px] md:text-[18px] tracking-tight truncate">기억의 정원</p>
                                        <p className="text-[12px] md:text-[13px] text-gray-400 font-medium truncate">게이미피케이션 & 리워드</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F7F9F2] flex items-center justify-center text-[#7C8F70] text-lg md:text-xl shadow-sm border border-[#EDF2E6] shrink-0">
                                        <i className="fa-solid fa-images"></i>
                                    </div>
                                    <div className="text-left overflow-hidden">
                                        <p className="text-[#333] font-black text-[16px] md:text-[18px] tracking-tight truncate">사진첩</p>
                                        <p className="text-[12px] md:text-[13px] text-gray-400 font-medium truncate">라이프 로그 아카이빙</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
