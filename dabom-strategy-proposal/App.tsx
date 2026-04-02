import React from 'react';
import { LNB } from './components/Navigation/LNB';

import { Expertise } from './components/sections/Expertise';
import { Hero } from './components/sections/Hero';
import { InterimSection } from './components/sections/InterimSection';
import { CoreService } from './components/sections/CoreService';
import { ClinicalEvidence } from './components/sections/ClinicalEvidence';
import { MentalHealthCheckup } from './components/sections/MentalHealthCheckup';
import { BidirectionalCorrelation } from './components/sections/BidirectionalCorrelation';
import { BrainFitness } from './components/sections/BrainFitness';
import { Gamification } from './components/sections/Gamification';
import { ValueProposition } from './components/sections/ValueProposition';
import { IntegrationFlexibility } from './components/sections/IntegrationFlexibility';
import { AutobiographicalMemoryScenario } from './components/sections/AutobiographicalMemoryScenario';
import { Footer } from './components/sections/Footer';
import { Overview } from './components/sections/Overview';
import BrandStory from './components/sections/BrandStory';
import { BrandConcept } from './components/sections/BrandConcept';
import { ClinicalTestResult } from './components/sections/ClinicalTestResult';
import { ExpertiseProfessors } from './components/sections/ExpertiseProfessors';
import AutobiographicalMemory from './components/sections/AutobiographicalMemory';
import { CompetitorAnalysis } from './components/sections/CompetitorAnalysis';

import { HealthOn } from './components/sections/HealthOn';
import { KnowledgePensionOn } from './components/sections/KnowledgePensionOn';
import { CareVillageOn } from './components/sections/CareVillageOn';
import { RetentionStrategy } from './components/sections/RetentionStrategy';
import { RewardEcosystem } from './components/sections/RewardEcosystem';
import { RiskControl } from './components/sections/RiskControl';
import { FilialPietyInsurance } from './components/sections/FilialPietyInsurance';
import { NewProductDevelopment } from './components/sections/NewProductDevelopment';
import { ImpactSummary } from './components/sections/ImpactSummary';
import { ClosingMessage } from './components/sections/ClosingMessage';

function App() {
  return (
    <div className="relative h-screen w-full bg-[#FBFBFD] text-[#1d1d1f] font-sans overflow-hidden">
      <LNB />
      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar snap-y snap-mandatory relative z-10">
        <Hero />
        <Overview />
        <InterimSection
          id="interim-overview"
          title="브랜드 스토리 및\n서비스 개요"
          description="다봄이 지향하는 가치와\n서비스의 핵심 구성을 소개합니다."
          pageNumber={2}
          theme="yellow"
          label="Part. 1"
        />
        <BrandStory />
        <BrandConcept />
        {/* Interim 1: Before Clinical Evidence */}
        <InterimSection
          id="interim-1"
          title="과학·전문적 멘탈 케어"
          description="고려대학교 심리학부가 설계하고,\n임상과 특허·논문 기반으로 신뢰할 수 있는 멘탈케어 서비스입니다."
          pageNumber={5}
          theme="yellow"
          label="Part 2"
        />
        <ExpertiseProfessors />
        <Expertise />
        <ClinicalTestResult />
        <InterimSection
          id="interim-service-details"
          title="과학적 원리 및\n상세 서비스 소개"
          description="다봄이 제공하는 핵심 기능들이 작동하는 과학적 원리와\n상세한 서비스 구성을 소개합니다."
          pageNumber={7}
          theme="yellow"
          label="Part. 3"
        />
        <AutobiographicalMemory />
        <AutobiographicalMemoryScenario />
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
          pageNumber={17}
          theme="yellow"
          label="Part 4"
        />
        <CoreService />
        <ValueProposition />

        {/* Interim 4: Before Competitor Analysis */}
        <InterimSection
          id="interim-competitor"
          title="플랫폼 경쟁력 강화"
          description="국내 유일, 다른 보험 앱에 없는\n시니어 멘탈케어 패키지를 제안합니다."
          theme="purple"
          label="Value 1"
          hidePageNumber={true}
        />

        <CompetitorAnalysis />

        {/* Section 1: 유기적 통합 전략 */}
        <InterimSection
          id="interim-section-1"
          title="기억 데이터 중심\n통합 라이프케어"
          description="KB골든라이프의 기존 서비스에 다봄의 기억 데이터를 결합하여\n초개인화된 라이프케어를 제공합니다."
          pageNumber={21}
          theme="blue"
          label="VALUE 2"
        />
        <HealthOn />
        <KnowledgePensionOn />
        <CareVillageOn />

        {/* Section 2: 시너지 가속 */}
        <InterimSection
          id="interim-section-2"
          title="플랫폼 활성화 및\n서비스 시너지 창출"
          description="데일리 정서 루틴 형성을 통한 리텐션 강화로\n서비스 시너지가 창출됩니다."
          pageNumber={24}
          label="VALUE 3"
        />
        <RetentionStrategy />
        <RewardEcosystem />

        {/* Section 3: 비즈니스 고도화 - 숨김 처리 (28~31쪽) */}
        {/* <InterimSection
          id="interim-section-3"
          title="데이터 기반\n비즈니스 모델 고도화"
          description="선제적 리스크 관리와 신규 상품 개발을 통해\n보험업의 미래 데이터를 확보합니다."
          pageNumber={28}
          theme="green"
          label="Section 3"
        />
        <RiskControl />
        <FilialPietyInsurance />
        <NewProductDevelopment /> */}

        {/* Section 4: 기대효과 - 숨김 처리 (32~33쪽) */}
        {/* <InterimSection
          id="interim-impact"
          title="프로젝트 기대효과 및\n마무리"
          description="다봄 도입을 통한 KB라이프의 디지털 전환 성과와\n미래 비전을 요약합니다."
          pageNumber={32}
          theme="yellow"
          label="Part 7"
        />
        <ImpactSummary /> */}
        <IntegrationFlexibility />
        <ClosingMessage />

        <Footer />
      </main>
    </div>
  );
}

export default App;
