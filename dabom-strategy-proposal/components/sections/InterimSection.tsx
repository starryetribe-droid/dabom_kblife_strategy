import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

interface InterimSectionProps {
    id: string;
    title: string;
    description: string;
    pageNumber: number;
    theme?: 'dark' | 'light' | 'blue';
    label?: string;
}

export const InterimSection: React.FC<InterimSectionProps> = ({
    id,
    title,
    description,
    pageNumber,
    theme = 'dark',
    label
}) => {
    const bgClass = theme === 'blue'
        ? 'bg-kb-yellow'
        : theme === 'light'
            ? 'bg-gray-100'
            : 'bg-kb-black';

    const textClass = 'text-[#545045]';
    const descClass = 'text-[#545045]';

    return (
        <SectionWrapper id={id} className={bgClass} pageNumber={pageNumber}>
            <div className="h-full flex flex-col justify-center items-center text-center px-6">
                <FadeIn>
                    <div className="relative">
                        {/* Decorative Line */}
                        <div className={`w-1 bg-gradient-to-b from-transparent ${theme === 'light' ? 'via-kb-yellow' : 'via-white'} to-transparent h-20 mx-auto mb-8 opacity-50`}></div>

                        {label && (
                            <span className={`block text-xl md:text-2xl font-bold mb-4 tracking-widest uppercase opacity-80 ${textClass}`}>
                                {label}
                            </span>
                        )}

                        <h2 className={`text-4xl md:text-6xl font-extrabold ${textClass} mb-6 leading-tight tracking-tight whitespace-pre-line`}>
                            {title.split(/\\n|\n/).map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>

                        <p className={`text-xl md:text-2xl ${descClass} max-w-2xl mx-auto font-medium leading-relaxed`}>
                            {description.split(/\\n|\n/).map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
