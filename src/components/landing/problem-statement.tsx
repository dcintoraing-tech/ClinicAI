'use client';

import { useState } from 'react';
import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, ClipboardX, Users, HeartPulse, AlertTriangle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const problems = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Tiempos de Espera Prolongados',
    description:
      'Largas demoras en la atención que afectan la experiencia del paciente y pueden agravar condiciones médicas.',
  },
  {
    icon: <ClipboardX className="h-8 w-8 text-primary" />,
    title: 'Diagnóstico Tardío',
    description:
      'Retrasos en la identificación de patologías críticas debido a la saturación de servicios y la falta de herramientas de apoyo.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Saturación del Sistema',
    description:
      'Sobrecarga de los servicios de salud, especialmente en atención primaria, que limita la calidad y el tiempo por paciente.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Déficit de Personal',
    description:
      'Escasez de profesionales médicos y de enfermería, lo que aumenta la carga de trabajo del personal existente.',
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-primary" />,
    title: 'Errores Humanos',
    description:
      'Fallos en diagnósticos o tratamientos derivados del agotamiento, la falta de información o la complejidad de los casos.',
  },
];

type Problem = (typeof problems)[0];

const ProblemStatement = () => {
  const [selectedCard, setSelectedCard] = useState<Problem | null>(null);

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
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelectedCard(problem)}
            className="cursor-pointer"
          >
            <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl h-full">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">{problem.icon}</div>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription className="pt-2">{problem.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <Dialog open onOpenChange={() => setSelectedCard(null)}>
            <DialogContent className="p-0 border-0 max-w-md">
                <Card className="text-center m-0">
                  <CardHeader className="items-center p-8">
                    <motion.div
                      layoutId={`icon-${problems.findIndex((p) => p.title === selectedCard.title)}`}
                      className="mb-4 rounded-full bg-primary/10 p-4"
                    >
                      {selectedCard.icon}
                    </motion.div>
                    <CardTitle className="text-2xl">{selectedCard.title}</CardTitle>
                    <CardDescription className="pt-4 text-base">
                      {selectedCard.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProblemStatement;

    