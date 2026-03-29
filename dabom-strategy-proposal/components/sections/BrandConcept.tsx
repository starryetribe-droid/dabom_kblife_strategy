import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

export const BrandConcept: React.FC = () => {
    return (
        <SectionWrapper id="brand-concept" className="bg-[#F0F4E8]">

            {/* Top-left Label */}
            <div className="absolute top-12 left-10 md:top-16 md:left-16 z-20 hidden md:block">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="apple-subtitle text-[#1d1d1f] ] pb-2 border-b-2 border-[#354526] inline-block"
                >
                    Brand Concept
                </motion.h3>
            </div>

            {/* Background Graphic (Clover shape) */}
            <div className="absolute right-0 top-1/2 -translate-y-[45%] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] translate-x-[20%] pointer-events-none z-0">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center text-[#E0E8D1]"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                        <circle cx="50" cy="25" r="25" />
                        <circle cx="50" cy="75" r="25" />
                        <circle cx="25" cy="50" r="25" />
                        <circle cx="75" cy="50" r="25" />
                        <rect x="49" y="49" width="2" height="2" />
                    </svg>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1440px] w-full mx-auto md:px-16 relative z-10 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-8"
                >
                    <p className="text-xl md:text-2xl text-[#556748] font-medium mb-2 tracking-tight italic break-keep">
                        마음 건강과 두뇌 건강까지 — 내 인생의 두 번째 성장기를 위한,
                    </p>
                    <h2 className="apple-title text-[#1d1d1f] mb-4">
                        나만의 자기돌봄 가이드
                    </h2>

                    <div className="text-xl md:text-[24px] text-[#425533] tracking-tight break-keep">
                        <span className="font-normal mr-2 inline-block">전문성에 재미 요소를 더한,</span>
                        <span className="font-extrabold text-[#293B1F] inline-block">시니어 멘탈케어 패키지</span>
                    </div>
                </motion.div>

                {/* Cards Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full bg-white/50 border border-white backdrop-blur-md rounded-[2rem] p-4 md:p-6 shadow-sm relative z-20"
                >
                    {/* Grid wrapper for perfect layout wrapping instead of row overflow */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5 items-stretch h-full">

                        {/* Card 1: 마음 건강 (Takes up 3 columns out of 6 on extra large screens) */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 bg-white rounded-[20px] shadow-[0_4px_16px_rgb(0,0,0,0.03)] border-2 border-white/50 flex flex-col p-4 md:p-5">
                            <div className="w-full bg-[#3D5A21] text-white rounded-[12px] py-[14px] px-4 text-center font-bold text-lg md:text-xl shadow-sm mb-6 md:mb-8">
                                마음 건강
                            </div>
                            <div className="grid grid-cols-3 gap-2 flex-1 items-start">
                                {/* Item 1 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#45612A] text-2xl md:text-3xl">
                                        <i className="fa-solid fa-comments"></i>
                                    </div>
                                    <p className="text-[#555] font-semibold text-[13px] md:text-[15px] leading-snug break-keep">
                                        자서전적<br />기억 훈련<br />AI 챗봇
                                    </p>
                                </div>
                                {/* Item 2 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#45612A] text-2xl md:text-3xl">
                                        <i className="fa-solid fa-heart-pulse"></i>
                                    </div>
                                    <p className="text-[#555] font-semibold text-[13px] md:text-[15px] leading-snug break-keep">
                                        마음 건강<br />검진
                                    </p>
                                </div>
                                {/* Item 3 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#45612A] text-2xl md:text-3xl">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                    <p className="text-[#555] font-semibold text-[13px] md:text-[15px] leading-snug break-keep">
                                        마음 컨디션<br />리포트
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: 두뇌 건강 */}
                        <div className="col-span-1 lg:col-span-1 xl:col-span-1 bg-white rounded-[20px] shadow-[0_4px_16px_rgb(0,0,0,0.03)] border-2 border-white/50 flex flex-col p-4 md:p-5">
                            <div className="w-full bg-[#65853D] text-white rounded-[12px] py-[14px] px-4 text-center font-bold text-lg md:text-xl shadow-sm mb-6 md:mb-8">
                                두뇌 건강
                            </div>
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#65853D] text-2xl md:text-3xl">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <p className="text-[#555] font-semibold text-sm md:text-[15px] leading-snug break-keep">
                                    두뇌 건강<br />운동
                                </p>
                            </div>
                        </div>

                        {/* Card 3: 게이미피케이션 & 리워드 */}
                        <div className="col-span-1 lg:col-span-1 xl:col-span-1 bg-white rounded-[20px] shadow-[0_4px_16px_rgb(0,0,0,0.03)] border-2 border-white/50 flex flex-col p-4 md:p-5">
                            <div className="w-full bg-[#D57B34] text-white rounded-[12px] py-[6px] md:py-2 px-2 text-center font-bold text-base md:text-lg shadow-sm mb-6 md:mb-8 flex flex-col justify-center min-h-[52px] md:min-h-[56px] leading-tight">
                                <span>게이미피케이션</span>
                                <span className="text-sm md:text-base opacity-90">&amp; 리워드</span>
                            </div>
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#65853D] text-2xl md:text-3xl">
                                    <i className="fa-solid fa-seedling"></i>
                                </div>
                                <p className="text-[#555] font-semibold text-sm md:text-[15px] leading-snug break-keep">
                                    기억의 정원
                                </p>
                            </div>
                        </div>

                        {/* Card 4: 리마인드 */}
                        <div className="col-span-1 lg:col-span-1 xl:col-span-1 bg-white rounded-[20px] shadow-[0_4px_16px_rgb(0,0,0,0.03)] border-2 border-white/50 flex flex-col p-4 md:p-5">
                            <div className="w-full bg-[#7C8F70] text-white rounded-[12px] py-[14px] px-4 text-center font-bold text-lg md:text-xl shadow-sm mb-6 md:mb-8">
                                리마인드
                            </div>
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#EAF0E1] flex items-center justify-center mb-4 md:mb-6 text-[#7C8F70] text-2xl md:text-3xl">
                                    <i className="fa-solid fa-images"></i>
                                </div>
                                <p className="text-[#555] font-semibold text-sm md:text-[15px] leading-snug break-keep">
                                    사진첩
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>

        </SectionWrapper>
    );
};
