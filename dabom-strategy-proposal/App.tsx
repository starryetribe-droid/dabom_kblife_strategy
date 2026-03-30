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
import { BidirectionalCorrelation } from './components/sections/BidirectionalCorrelation';
import { BrainFitness } from './components/sections/BrainFitness';
import { Gamification } from './components/sections/Gamification';
import { ValueProposition } from './components/sections/ValueProposition';

import { Footer } from './components/sections/Footer';
import { RitualLife } from './components/sections/RitualLife';

import { Overview } from './components/sections/Overview';
import BrandStory from './components/sections/BrandStory';
import { BrandConcept } from './components/sections/BrandConcept';
import { ClinicalTestResult } from './components/sections/ClinicalTestResult';
import { ExpertiseProfessors } from './components/sections/ExpertiseProfessors';
import AutobiographicalMemory from './components/sections/AutobiographicalMemory';

function App() {
  return (
    <div className="relative h-screen w-full bg-[#FBFBFD] text-[#1d1d1f] font-sans overflow-hidden">

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar snap-y snap-mandatory relative z-10">
        <Hero />
        <Overview />
        <InterimSection
          id="interim-overview"
          title="브랜드 스토리 및\n서비스 개요"
          description="다봄이 지향하는 가치와\n서비스의 핵심 구성을 소개합니다."
          pageNumber={1}
          theme="blue"
          label="Part. 0"
        />
        <BrandStory />
        <BrandConcept />
        {/* Interim 1: Before Clinical Evidence */}
        <InterimSection
          id="interim-1"
          title="과학·전문적 멘탈 케어"
          description="고려대학교 심리학부가 설계하고,\n임상과 특허·논문 기반으로 신뢰할 수 있는 멘탈케어 서비스입니다."
          pageNumber={3}
          theme="blue"
          label="Part 1"
        />
        <ExpertiseProfessors />
        <Expertise />
        <ClinicalTestResult />
        <InterimSection
          id="interim-service-details"
          title="과학적 원리 및\n상세 서비스 소개"
          description="다봄이 제공하는 핵심 기능들이 작동하는 과학적 원리와\n상세한 서비스 구성을 소개합니다."
          pageNumber={7}
          theme="blue"
          label="Part. 2"
        />
        <AutobiographicalMemory />
        <ClinicalEvidence />
        <MentalHealthCheckup />
        <BidirectionalCorrelation />
        <BrainFitness />
        <Gamification />

        {/* Interim 3: Before Key Pillars */}
        <InterimSection
          id="interim-3"
          title="KB골든라이프와\n다봄의 만남"
          description="시니어 케어는 마음까지 확장되고,\n고객 데이터는 밀도가 높아집니다."
          pageNumber={9}
          theme="blue"
          label="Part 3"
        />
        <ValueProposition />
        {/* <KeyPillars /> */}
        <CoreService />
        {/* <StrategyThree />
        <Scenarios />
        <DabomTCareIndex />
        <RitualLife /> */}
        <Footer />
      </main>

    </div>
  );
}

export default App;
