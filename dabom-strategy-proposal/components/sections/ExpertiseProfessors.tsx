import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

export const ExpertiseProfessors: React.FC = () => {
    return (
        <SectionWrapper id="expertise-professors" className="bg-white">

            <div className="max-w-[1640px] mx-auto px-10 w-full relative z-10">
                {/* Header */}
                <div className="text-left mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 inline-block">
                            Expertise
                        </span>
                        <h2 className="apple-title text-[#111] leading-snug tracking-tight">
                            고려대학교 심리학부 교수진이 설계한<br /> 멘탈케어 서비스
                        </h2>
                    </motion.div>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-8">
                    {/* Left Column: Prof Choi */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col lg:border-r border-gray-200 lg:pr-14"
                    >
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-6">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[20px] overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm border border-gray-100">
                                <img src="/images/prof_choi.png" alt="최기홍 교수" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex flex-col pt-2">
                                <h3 className="apple-subtitle text-[#1d1d1f] mb-2">최기홍</h3>
                                <h4 className="text-[12px] font-semibold text-gray-400 tracking-widest mb-2">PROFILE</h4>
                                <ul className="apple-body text-[14.5px] space-y-1.5 leading-relaxed font-semibold">
                                    <li>현) 고려대학교 심리학부 교수</li>
                                    <li>현) 한국심리학회 부회장</li>
                                    <li>현) KU마음건강연구소 소장</li>
                                    <li>현) MINDEEP 인지행동치료센터 센터장</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-2">
                            <div className="flex flex-col">
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">CAREER</h4>
                                    <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed opacity-80">
                                        <li>전) 미국 웨슬리안 대학 풀브라이트 방문 교수</li>
                                        <li>전) 미국 예일대학교 병원 정신과 연구교수</li>
                                        <li>전) 미국 컬럼비아 대학병원 마리-케슬 팰로우</li>
                                        <li>전) 한국임상심리학회 정책 및 제도 이사</li>
                                        <li>전) 한국인지행동치료학회 총무 이사</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">EDUCATION</h4>
                                    <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed opacity-80">
                                        <li>미국 네브래스카 주립대학교 임상심리 박사</li>
                                        <li>고려대학교 심리학과 임상 및 상담심리 석사</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">AWARDS</h4>
                                    <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed opacity-80">
                                        <li>2025 통일부 장관 표창</li>
                                        <li>2023 보건복지부 장관 표창</li>
                                        <li>2017~2023 석탑연구상 (4회)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">CERTIFICATE</h4>
                                    <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed font-medium">
                                        <li>임상심리전문가 (한국심리학회 공인)</li>
                                        <li>Licensed Psychologist (미국 주정부 공인)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Prof Park */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col lg:pl-10 mt-8 lg:mt-0"
                    >
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-6">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[20px] overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm border border-gray-100">
                                <img src="/images/prof_park.png" alt="박용천 교수" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex flex-col pt-2">
                                <h3 className="apple-subtitle text-[#1d1d1f] mb-2">박용천</h3>
                                <h4 className="text-[12px] font-semibold text-gray-400 tracking-widest mb-2">PROFILE</h4>
                                <ul className="apple-body text-[14.5px] space-y-1.5 leading-relaxed font-semibold">
                                    <li>현) 고려대학교 심리학부 연구교수</li>
                                    <li>현) KU마음건강연구소 CTO</li>
                                    <li>전) 삼성서울병원 정신건강의학과 임상연구원</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col mt-2">
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">EDUCATION</h4>
                                <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed opacity-80">
                                    <li>고려대학교 심리학과 임상 및 상담심리학 박사</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-3">CERTIFICATE</h4>
                                <ul className="apple-body text-[14px] md:text-[15px] space-y-1.5 leading-relaxed font-medium">
                                    <li>임상심리전문가(한국심리학회 공인)</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Page Number mimicking the reference */}
            <div className="absolute bottom-0 right-6 text-lg font-bold text-gray-400 opacity-60 z-20">
                11
            </div>

        </SectionWrapper>
    );
};
