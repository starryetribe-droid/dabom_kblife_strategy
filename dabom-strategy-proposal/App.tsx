import React from 'react';
import { Navbar } from './components/Navigation';

import { Expertise } from './components/sections/Expertise';
import { Hero } from './components/sections/Hero';
import { InterimSection } from './components/sections/InterimSection';

import { CoreService } from './components/sections/CoreService';
import { KeyPillars } from './components/sections/KeyPillars';

import { StrategyThree } from './components/sections/StrategyThree';
import { Scenarios } from './components/sections/Scenarios';
import { DabomTCareIndex } from './components/sections/DabomTCareIndex';
import { ClinicalEvidence } from './components/sections/ClinicalEvidence';
import { MentalHealthCheckup } from './components/sections/MentalHealthCheckup';
import { BrainFitness } from './components/sections/BrainFitness';

import { Footer } from './components/sections/Footer';
import { RitualLife } from './components/sections/RitualLife';

import { Overview } from './components/sections/Overview';
import BrandStory from './components/sections/BrandStory';

function App() {
  return (
    <div className="relative h-screen w-full bg-kb-bg text-kb-black font-sans overflow-hidden">
      <Navbar />

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar">
        <Hero />
        <Overview />
        <BrandStory />

        {/* Interim 1: Before Clinical Evidence */}
        <InterimSection
          id="interim-1"
          title="과학·전문적 멘탈 케어"
          description="자서전적 기억 훈련과 인지 훈련을 통해\n정서와 인지 기능을 개선합니다."
          pageNumber={3}
          theme="blue"
          label="Part 1"
        />
        <ClinicalEvidence />
        <MentalHealthCheckup />
        <Expertise />
        <BrainFitness />

        {/* Interim 2: Before Key Pillars */}
        <InterimSection
          id="interim-2"
          title="능동적 케어를 통한\n핵심 전략"
          description="데이터 기반으로 필요한 순간에 즉각 개입하여\n행동 변화를 이끌어냅니다."
          pageNumber={8}
          theme="blue"
          label="Part 2"
        />
        <KeyPillars />
        <CoreService />
        <StrategyThree />
        <Scenarios />
        <DabomTCareIndex />
        <RitualLife />
        <Footer />
      </main>
    </div>
  );
}

export default App;
