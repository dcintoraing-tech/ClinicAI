import { CheckCircle, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';

const Objectives = () => {
  const specificObjectives = [
    'Gestionar el registro, seguimiento y control de pacientes, incluyendo citas e historiales clínicos, con el fin de centralizar la información y garantizar continuidad en la atención.',
    'Gestionar el registro y la identificación de pagos y movimientos financieros relacionados con los tratamientos, permitiendo un control contable claro dentro de la clínica.',
    'Integrar un sistema de inventario que permita registrar, monitorear y optimizar el stock de insumos odontológicos de acuerdo con la demanda real de los tratamientos.',
    'Facilitar la comunicación interna entre estudiantes, docentes y personal administrativo, así como la comunicación externa con los pacientes, mediante un módulo de interacción eficiente.',
    'Establecer un sistema operativo centralizado que coordine de manera organizada los recursos, procesos y roles que intervienen en el funcionamiento clínico.',
    'Incorporar herramientas de inteligencia artificial para apoyar la toma de decisiones en los procesos clínicos y administrativos, favoreciendo la mejora continua del servicio.',
    'Analizar los datos clínicos, administrativos y financieros generados por el sistema, con el propósito de obtener indicadores de desempeño e identificar patrones de uso que contribuyan a la evaluación y optimización de la operación clínica.',
    'Integrar un módulo de machine learning para alertas tempranas, que permita detectar incidencias o desviaciones en los procesos clínicos y administrativos, anticipando fallas y favoreciendo la eficiencia operativa.',
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
                Desarrollar un sistema de información centralizado para la gestión integral de los procesos clínicos, administrativos y operativos de la Clínica Universitaria, que permita optimizar la organización del servicio y fortalecer la calidad de la atención brindada.
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
