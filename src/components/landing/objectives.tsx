import { CheckCircle, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';

const Objectives = () => {
  const specificObjectives = [
    'Diseñar una arquitectura de sistema escalable, modular y segura para la gestión de datos clínicos.',
    'Implementar un modelo de Machine Learning para el análisis sintomático y la asistencia en el pre-diagnóstico.',
    'Desarrollar una interfaz de usuario intuitiva y accesible para pacientes y personal médico.',
    'Crear un sistema de triaje automatizado que clasifique a los pacientes según la urgencia de sus síntomas.',
    'Evaluar la eficacia y precisión del sistema en un entorno de simulación controlado con datos anonimizados.',
  ];

  return (
    <SectionWrapper id="objetivos" className="scroll-mt-16 bg-muted">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Objetivos del Proyecto
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Definimos metas claras para guiar el desarrollo y la implementación de ClinicAI.
            </p>
          </div>
        </div>
        <div className="space-y-8 md:col-span-7">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Objetivo General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Desarrollar e implementar un prototipo de sistema de gestión clínica inteligente (ClinicAI) que utilice algoritmos de inteligencia artificial para optimizar los procesos de diagnóstico preliminar, triaje de pacientes y gestión de recursos hospitalarios.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8 text-primary" />
                Objetivos Específicos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {specificObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckCircle className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Objectives;
