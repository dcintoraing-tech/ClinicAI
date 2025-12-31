import { SectionWrapper } from './section-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BrainCog, Bot, HeartPulse, BookOpen } from 'lucide-react';

const TheoreticalFramework = () => {
  const concepts = [
    {
      icon: <BrainCog className="h-5 w-5 mr-3 text-primary" />,
      title: 'Inteligencia Artificial (IA)',
      content:
        'Una rama de la informática dedicada a la creación de agentes inteligentes, que son sistemas que pueden razonar, aprender y actuar de forma autónoma. En ClinicAI, la IA se utiliza para la toma de decisiones clínicas asistidas.',
    },
    {
      icon: <Bot className="h-5 w-5 mr-3 text-primary" />,
      title: 'Machine Learning (ML)',
      content:
        'Un subcampo de la IA que se centra en el desarrollo de algoritmos que permiten a los ordenadores aprender de los datos y mejorar con la experiencia. Nuestros modelos de ML se entrenan para identificar patrones en datos clínicos y predecir posibles patologías.',
    },
    {
      icon: <BookOpen className="h-5 w-5 mr-3 text-primary" />,
      title: 'Sistemas Expertos',
      content:
        'Programas informáticos que emulan la capacidad de toma de decisiones de un experto humano en un dominio específico. ClinicAI actúa como un sistema experto que asiste al personal médico, basándose en una base de conocimiento y reglas inferenciales.',
    },
    {
      icon: <HeartPulse className="h-5 w-5 mr-3 text-primary" />,
      title: 'Salud Digital (eHealth)',
      content:
        'El uso de las tecnologías de la información y la comunicación (TIC) en apoyo de la salud y los ámbitos relacionados con ella. ClinicAI es un ejemplo de eHealth, aplicando tecnología para mejorar la eficiencia y accesibilidad de la atención médica.',
    },
  ];

  return (
    <SectionWrapper className="bg-muted">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Marco Teórico
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Los conceptos fundamentales que sustentan el desarrollo tecnológico y la base científica de ClinicAI.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {concepts.map((concept, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-background rounded-lg mb-4 px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <div className="flex items-center">
                    {concept.icon} {concept.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {concept.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TheoreticalFramework;
