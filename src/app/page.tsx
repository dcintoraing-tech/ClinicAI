import Header from '@/components/landing/header';
import ProblemStatement from '@/components/landing/problem-statement';
import Justification from '@/components/landing/justification';
import Objectives from '@/components/landing/objectives';
import Scope from '@/components/landing/scope';
import TheoreticalFramework from '@/components/landing/theoretical-framework';
import Methodology from '@/components/landing/methodology';
import Benefits from '@/components/landing/benefits';
import Technologies from '@/components/landing/technologies';
import InteractiveDemo from '@/components/landing/interactive-demo';
import Conclusion from '@/components/landing/conclusion';

export default function Home() {
  return (
    <>
      <Header />
      <ProblemStatement />
      <Justification />
      <Objectives />
      <Scope />
      <TheoreticalFramework />
      <Methodology />
      <Benefits />
      <Technologies />
      <InteractiveDemo />
      <Conclusion />
    </>
  );
}
