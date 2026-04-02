import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

interface InterimSectionProps {
    id: string;
    title: string;
    description: string;
    pageNumber?: number;
    theme?: 'dark' | 'light' | 'blue' | 'green' | 'yellow' | 'purple';
    label?: string;
    hidePageNumber?: boolean;
}

export const InterimSection: React.FC<InterimSectionProps> = ({
    id,
    title,
    description,
    pageNumber,
    theme = 'yellow',
    label,
    hidePageNumber
}) => {
    const themeConfig = {
        yellow: {
            bg: 'bg-kb-yellow',
            text: 'text-[#545045]',
            accent: 'bg-[#545045]/20'
        },
        blue: {
            bg: 'bg-blue-600',
            text: 'text-white',
            accent: 'bg-white/20'
        },
        green: {
            bg: 'bg-green-600',
            text: 'text-white',
            accent: 'bg-white/20'
        },
        light: {
            bg: 'bg-gray-100',
            text: 'text-gray-900',
            accent: 'bg-gray-400/20'
        },
        dark: {
            bg: 'bg-gray-900',
            text: 'text-white',
            accent: 'bg-white/20'
        },
        purple: {
            bg: 'bg-purple-900',
            text: 'text-white',
            accent: 'bg-white/20'
        }
    };

    const config = themeConfig[theme as keyof typeof themeConfig] || themeConfig.yellow;

    return (
        <SectionWrapper id={id} className={config.bg} pageNumber={pageNumber} hidePageNumber={hidePageNumber}>
            <div className="h-full flex flex-col justify-center items-center text-center px-6">
                <FadeIn>
                    <div className="relative">
                        {/* Decorative Line */}
                        <div className={`w-1 bg-gradient-to-b from-transparent ${theme === 'light' ? 'via-kb-yellow' : 'via-white/40'} to-transparent h-20 mx-auto mb-8 opacity-50`}></div>

                        {label && (
                            <span className={`block text-xl md:text-2xl font-bold mb-4 tracking-widest uppercase opacity-80 ${config.text}`}>
                                {label}
                            </span>
                        )}

                        <h2 className={`text-4xl md:text-6xl font-extrabold ${config.text} mb-6 leading-tight tracking-tight whitespace-pre-line`}>
                            {title.split(/\\n|\n/).map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>

                        <p className={`text-xl md:text-2xl ${config.text} opacity-80 max-w-2xl mx-auto font-medium leading-relaxed`}>
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
