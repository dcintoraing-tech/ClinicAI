import Benefits from '@/components/landing/benefits';
import Conclusion from '@/components/landing/conclusion';
import Header from '@/components/landing/header';
import Justification from '@/components/landing/justification';
import Methodology from '@/components/landing/methodology';
import Objectives from '@/components/landing/objectives';
import ProblemStatement from '@/components/landing/problem-statement';
import Scope from '@/components/landing/scope';
import Suggestions from '@/components/landing/suggestions';
import Technologies from '@/components/landing/technologies';
import TheoreticalFramework from '@/components/landing/theoretical-framework';

const Page = () => {
  return (
    <>
      <Header />
      <ProblemStatement />
      <Justification />
      <Objectives />
      <TheoreticalFramework />
      <Methodology />
      <Scope />
      <Technologies />
      <Benefits />
      <Suggestions />
      <Conclusion />
    </>
  );
};

export default Page;
