import React from 'react';

export const Navbar: React.FC = () => {
  const menuItems = [
    { href: "#overview", label: "Overview" },
    { href: "#interim-1", label: "Part 1. 신뢰도" },
    { href: "#clinical-evidence", label: "임상 근거" },
    { href: "#mental-health-checkup", label: "마음 검진" },
    { href: "#expertise", label: "전문성" },
    { href: "#brain-fitness", label: "브레인 피트니스" },
    { href: "#interim-2", label: "Part 2. 전략" },
    { href: "#key-pillars", label: "핵심 전략" },
    { href: "#core-service", label: "핵심 서비스" },
    { href: "#strategy-1", label: "전략 1: 능동 케어" },
    { href: "#strategy-2", label: "전략 2: 데이터" },
    { href: "#strategy-3", label: "전략 3: 연결성" },
    { href: "#scenarios", label: "시나리오" },
    { href: "#tcare-index", label: "T-Care 지표" },
    { href: "#interim-3", label: "Part 3. B2B" },
    { href: "#b2b-pivot", label: "B2B Pivot" },
    { href: "#interim-4", label: "Part 4. Concept" },
    { href: "#concept-pivot", label: "Concept Pivot" },
    { href: "#gamification", label: "Gamification" },
    { href: "#digital-detox", label: "Digital Detox" },
    { href: "#ritual-life", label: "Ritual Life" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="w-full max-w-[1770px] mx-auto px-6 h-[60px] md:h-[70px] flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar pointer-events-auto gap-6 md:gap-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="group whitespace-nowrap transition-all duration-300"
          >
            <span className="text-[12px] md:text-[13px] font-medium text-[#86868b] group-hover:text-[#1d1d1f] transition-colors duration-300 tracking-[-0.01em]">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};