import React, { useEffect, useState } from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  hidePageNumber?: boolean;
  pageNumber?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', hidePageNumber = false, pageNumber }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 1770;
      const scaleY = window.innerHeight / 940;
      // 0.95 gives a 5% safety margin so nothing hits the very edge
      setScale(Math.min(scaleX, scaleY) * 0.95);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id={id}
      className={`relative w-full h-[100dvh] shrink-0 flex items-center justify-center snap-start snap-always overflow-hidden ${hidePageNumber ? '' : 'slide-with-number'} ${className}`}
    >
      <div
        style={{
          width: '1770px',
          height: '940px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
      >
        <div className="w-full h-full flex flex-col justify-center relative mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};