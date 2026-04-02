import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
    title: string;
    id?: string;
    children?: MenuItem[];
}

const menuData: MenuItem[] = [
    {
        title: "Pages",
        children: [
            {
                title: "Part 0. 브랜드 스토리 및 개요",
                children: [
                    { title: "Overview", id: "overview" },
                    { title: "Brand Story", id: "brand-story" },
                    { title: "Brand Concept", id: "brand-concept" },
                ]
            },
            {
                title: "Part 1. 과학·전문적 케어",
                children: [
                    { title: "전문 교수진", id: "expertise-professors" },
                    { title: "전문성 소개", id: "expertise" },
                    { title: "임상 실험 결과", id: "clinical-test-result" },
                ]
            },
            {
                title: "Part 2. 서비스 상세",
                children: [
                    { title: "자서전적 기억 훈련", id: "autobiographical-memory" },
                    { title: "서비스 시나리오", id: "autobiographical-memory-scenario" },
                    { title: "임상 근거", id: "clinical-evidence" },
                    { title: "마음 건강 검진", id: "mental-health-checkup" },
                    { title: "상호 상관관계", id: "bidirectional-correlation" },
                    { title: "브레인 피트니스", id: "brain-fitness" },
                    { title: "게이미피케이션", id: "gamification" },
                ]
            },
            {
                title: "Part 3. KB골든라이프와 다봄의 만남",
                children: [
                    { title: "핵심 서비스 결합", id: "core-service" },
                    { title: "가치 제안", id: "value-proposition" },
                    { title: "경쟁사 분석", id: "competitor-analysis" },
                ]
            },
            {
                title: "Section 1. 통합 라이프케어 전략",
                children: [
                    { title: "Health-On 연계", id: "health-on" },
                    { title: "Pension-On 연계", id: "knowledge-pension-on" },
                    { title: "Village-On 연계", id: "care-village-on" },
                ]
            },
            {
                title: "Section 2. 플랫폼 활성화 전략",
                children: [
                    { title: "리텐션 전략", id: "retention-strategy" },
                    { title: "리워드 에코시스템", id: "reward-ecosystem" },
                ]
            },
            {
                title: "기타",
                children: [
                    { title: "도입 유연성", id: "integration-flexibility" },
                    { title: "클로징 메시지", id: "closing-message" },
                ]
            }
        ]
    }
];

const AccordionItem: React.FC<{ item: MenuItem; depth: number }> = ({ item, depth }) => {
    const [isOpen, setIsOpen] = useState(depth === 0); // Root is open by default
    const hasChildren = item.children && item.children.length > 0;

    const handleClick = (e: React.MouseEvent) => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        } else if (item.id) {
            const element = document.getElementById(item.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div 
                onClick={handleClick}
                className={`
                    cursor-pointer flex items-center py-1 px-2 transition-all duration-300
                    ${hasChildren ? 'font-bold' : 'font-medium'}
                    hover:text-kb-black rounded
                `}
                style={{ paddingLeft: `${depth * 8 + 8}px` }}
            >
                {hasChildren && (
                    <i className={`fa-solid fa-chevron-right text-[8px] mr-1.5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
                )}
                <span className="truncate">{item.title}</span>
            </div>
            
            <AnimatePresence>
                {isOpen && hasChildren && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {item.children!.map((child, idx) => (
                            <AccordionItem key={idx} item={child} depth={depth + 1} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const LNB: React.FC = () => {
    return (
        <nav 
            className="fixed top-0 left-0 h-screen w-[200px] z-[90] flex flex-col pt-[60px] pb-10 
                       text-[10px] text-gray-400 select-none pointer-events-auto
                       bg-transparent
                       opacity-[0.12] hover:opacity-100 transition-opacity duration-500 ease-in-out"
        >
            <div className="flex-1 overflow-y-auto no-scrollbar px-4">
                {menuData.map((item, idx) => (
                    <AccordionItem key={idx} item={item} depth={0} />
                ))}
            </div>
            
            {/* Subtle help text */}
            <div className="px-6 py-4 opacity-50 italic text-[9px]">
                Hover to reveal menu
            </div>
        </nav>
    );
};
