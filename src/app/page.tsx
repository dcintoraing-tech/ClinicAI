import Benefits from '@/components/landing/benefits';
import Conclusion from '@/components/landing/conclusion';
import Header from '@/components/landing/header';
import InteractiveDemo from '@/components/landing/interactive-demo';
import InteractiveTour from '@/components/landing/interactive-tour';
import Justification from '@/components/landing/justification';
import Methodology from '@/components/landing/methodology';
import Objectives from '@/components/landing/objectives';
import ProblemStatement from '@/components/landing/problem-statement';
import Scope from '@/components/landing/scope';
import Technologies from '@/components/landing/technologies';
import TheoreticalFramework from '@/components/landing/theoretical-framework';

const Page = () => {
  return (
    <>
      <Header />
      <InteractiveTour />
      <ProblemStatement />
      <Justification />
      <Objectives />
      <InteractiveDemo />
      <TheoreticalFramework />
      <Methodology />
      <Scope />
      <Technologies />
      <Benefits />
      <Conclusion />
    </>
  );
};

export default Page;
