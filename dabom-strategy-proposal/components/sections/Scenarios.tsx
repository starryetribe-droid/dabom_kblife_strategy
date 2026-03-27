import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from './SectionWrapper';

interface ScenarioCardProps {
  icon: string;
  iconColor: string;
  title: string;
  asIs: string;
  toBe: React.ReactNode;
  aiMessage: React.ReactNode;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ icon, iconColor, title, asIs, toBe, aiMessage }) => (
  <GlassCard hoverEffect className="p-8 rounded-[2rem] flex flex-col h-full hover:bg-yellow-50/30 transition border border-transparent hover:border-kb-yellow/20">
    <div className="flex items-center mb-6">
      <div className={`w-12 h-12 rounded-2xl ${iconColor} flex items-center justify-center mr-4 text-xl shadow-sm`}>
        <i className={icon}></i>
      </div>
      <h3 className="font-bold text-xl text-kb-black">{title}</h3>
    </div>
    <div className="mb-8 text-[15px] space-y-4 flex-grow">
      <div className="flex items-start bg-gray-50 p-3 rounded-xl">
        <span className="text-gray-400 font-bold w-14 shrink-0 text-sm mt-0.5">AS-IS</span>
        <span className="text-gray-500 font-medium leading-relaxed">{asIs}</span>
      </div>
      <div className="flex items-start bg-yellow-50 p-3 rounded-xl">
        <span className="text-kb-yellow font-bold w-14 shrink-0 text-sm mt-0.5">TO-BE</span>
        <span className="text-kb-black font-medium leading-relaxed">{toBe}</span>
      </div>
    </div>
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-soft relative mt-auto">
      <div className="absolute -top-3 left-4 bg-kb-yellow text-sm font-bold text-white px-3 py-1 rounded-full shadow-sm">AI 다봄</div>
      <p className="text-[15px] text-kb-black font-medium leading-relaxed">"{aiMessage}"</p>
    </div>
  </GlassCard>
);

export const Scenarios: React.FC = () => {
  return (
    <SectionWrapper id="scenarios" className="bg-white" pageNumber={14}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-kb-yellow font-bold tracking-wider text-sm uppercase mb-2 block">Scenarios</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kb-black">유저 시나리오</h2>
            <p className="text-kb-gray mt-3 font-medium text-base md:text-lg">Physical x Mental 데이터 결합 사례</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={100} className="h-full">
            <ScenarioCard
              icon="fa-solid fa-shoe-prints"
              iconColor="bg-yellow-100 text-kb-yellow"
              title="활동량(걸음 수, 영상운동 등) 급감"
              asIs='"오늘 걸음 수가 부족해요. 더 움직여보세요." (단순 독려)'
              toBe={<span>활동 데이터 급감을 '마음의 무기력'으로 의심하고 접근</span>}
              aiMessage={<span>OO님, 요즘 움직임이 눈에 띄게 줄어드셨네요.<br /><strong>줄어든 활동량</strong>은 <strong>우울감</strong>과 관련있을 수 있어요.<br />다봄이와 기억 찾기 활동으로 우울감을 낮춰 보세요.</span>}
            />
          </FadeIn>
          <FadeIn delay={200} className="h-full">
            <ScenarioCard
              icon="fa-solid fa-moon"
              iconColor="bg-amber-100 text-amber-500"
              title="불규칙한 수면 패턴 3일 이상 지속"
              asIs='"수면 패턴 분석 결과 제공'
              toBe={<span>'3일 연속' 불규칙 패턴 감지 시, 우울·불안감 개선을 위해 대화 시도</span>}
              aiMessage={<span>OO님, 3일 연속으로 <strong>잠을 깊게 못 주무시는 것 같아</strong> 걱정돼요.<br />혹시 <strong>우울감과 불안감</strong>이 느껴지신다면<br />다봄이와 기억 찾기 활동을 해보세요.</span>}
            />
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <ScenarioCard
              icon="fa-solid fa-heart-crack"
              iconColor="bg-red-100 text-red-500"
              title="높은 스트레스 지수(HRV) 3일 이상 지속"
              asIs='스트레스 지수 그래프 확인 후 방치'
              toBe={<span>높은 스트레스 지수 3일 이상 지속 시 우울감 발생 확률이 증가하므로<br />대화 시도</span>}
              aiMessage={<span>OO님, 3일 내내 몸의 긴장도가 높아요.<br /><strong>지속적인 스트레스</strong>는 우울감을 높일 수 있어요.<br /><strong>다봄이와 행복한 기억</strong>을 떠올려 볼까요?</span>}
            />
          </FadeIn>
          <FadeIn delay={400} className="h-full">
            <ScenarioCard
              icon="fa-solid fa-hourglass-start"
              iconColor="bg-yellow-100 text-yellow-600"
              title="수면 진입 1시간 전 루틴 형성"
              asIs='[자러 가기] 버튼 클릭 → 앱 종료 (체류 시간 확보 실패)'
              toBe={<span>취침 1시간 전 알림으로, 하루를 마무리하는 '회상 루틴'을 정착시켜<br />앱 체류시간 확보</span>}
              aiMessage={<span>OO님, <strong>주무시기 1시간 전</strong>이네요. <strong>오늘 하루는 어떠셨나요?</strong><br />다봄이와 기억을 떠올리며 편안하게 하루를 마무리해요.</span>}
            />
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};