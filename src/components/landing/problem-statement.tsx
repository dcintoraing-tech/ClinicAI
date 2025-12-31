import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, ClipboardX, Users, HeartPulse, AlertTriangle } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Tiempos de Espera Prolongados',
      description: 'Largas demoras en la atención que afectan la experiencia del paciente y pueden agravar condiciones médicas.',
    },
    {
      icon: <ClipboardX className="h-8 w-8 text-primary" />,
      title: 'Diagnóstico Tardío',
      description: 'Retrasos en la identificación de patologías críticas debido a la saturación de servicios y la falta de herramientas de apoyo.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Saturación del Sistema',
      description: 'Sobrecarga de los servicios de salud, especialmente en atención primaria, que limita la calidad y el tiempo por paciente.',
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      title: 'Déficit de Personal',
      description: 'Escasez de profesionales médicos y de enfermería, lo que aumenta la carga de trabajo del personal existente.',
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: 'Errores Humanos',
      description: 'Fallos en diagnósticos o tratamientos derivados del agotamiento, la falta de información o la complejidad de los casos.',
    },
  ];

  return (
    <SectionWrapper id="problema" className="scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Planteamiento del Problema
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Los sistemas de salud tradicionales enfrentan desafíos críticos que impactan la eficiencia y la calidad de la atención.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <Card key={index} className="text-center transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader className="items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                {problem.icon}
              </div>
              <CardTitle>{problem.title}</CardTitle>
              <CardDescription className="pt-2">{problem.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProblemStatement;
