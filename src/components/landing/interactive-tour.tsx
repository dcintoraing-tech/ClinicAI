'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, AlertTriangle, Target, Lightbulb, ListChecks, ListX, Rocket, Award, Users, FileText, Package, Bot, BarChart, Bell, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const tourSteps = [
    {
      icon: Award,
      title: 'El futuro de la clínica universitaria comienza hoy',
      content:
        'La salud y la educación están cambiando. La forma en que gestionamos la información, organizamos los recursos y atendemos a los pacientes ya no puede depender de procesos manuales y dispersos. Hoy, la inteligencia artificial y las tecnologías digitales nos permiten dar un paso adelante: mejorar la atención al paciente, optimizar el trabajo clínico y fortalecer la formación de los futuros profesionales. \n\n 👉 Bienvenido a CLINIC AI, una propuesta que transforma la gestión clínica universitaria.',
      buttonText: 'Comenzar recorrido',
    },
    {
      icon: Brain,
      title: '¿Por qué es importante adaptarnos a la tecnología?',
      content:
        'En un entorno clínico universitario convergen pacientes, estudiantes, docentes y personal administrativo. Cuando la información no fluye de manera ordenada, aparecen retrasos, errores y sobrecarga de trabajo. \n\n La tecnología —y en especial la inteligencia artificial— permite: \n ✔ Centralizar la información \n ✔ Reducir tiempos administrativos \n ✔ Tomar decisiones basadas en datos \n ✔ Mejorar la experiencia del paciente y del estudiante \n\n CLINIC AI nace como respuesta a estos desafíos.',
      buttonText: 'Conocer el problema actual',
    },
    {
      icon: AlertTriangle,
      title: '¿Qué está pasando hoy en la clínica?',
      intro:
        'La Clínica Universitaria cumple una doble misión: atender a la comunidad y formar profesionales en un entorno real supervisado. Sin embargo, en la práctica diaria surgen dificultades que afectan la continuidad y calidad del servicio.',
      subPoints: [
        { icon: Users, title: 'Registro de pacientes irregular', text: 'La información se captura en una bitácora digital sin un formato estandarizado, lo que provoca citas duplicadas, datos incompletos y reprogramaciones frecuentes.' },
        { icon: Bot, title: 'Asignación ineficiente de alumnos', text: 'La distribución manual de estudiantes genera saturación en algunos consultorios y subutilización en otros, afectando la experiencia formativa y el uso de los espacios.' },
        { icon: FileText, title: 'Información clínica dispersa', text: 'Los expedientes se encuentran fragmentados entre formatos físicos, archivos digitales e imágenes independientes, dificultando el seguimiento y la trazabilidad del tratamiento.' },
        { icon: FileText, title: 'Expedientes manuales y lentos', text: 'La revisión y firma de documentos requiere presencia física del docente, lo que retrasa autorizaciones y aumenta la carga administrativa.' },
        { icon: Package, title: 'Control limitado del inventario', text: 'El manejo manual de insumos genera faltantes inesperados, diferencias de stock y retrasos en los procedimientos clínicos.' },
      ],
      conclusion: 'Estas situaciones generan ineficiencia operativa, afectan la atención al paciente y limitan el potencial formativo de los alumnos.',
      buttonText: 'Hacia una solución',
    },
    {
      icon: Target,
      title: '¿Qué busca CLINIC AI?',
      mainGoal:
        'Desarrollar un sistema de información centralizado que integre los procesos clínicos, administrativos y operativos de la clínica universitaria, optimizando la organización del servicio y fortaleciendo la calidad de la atención.',
      subTitle: '¿Cómo lo lograremos?',
      goals: [
        'Gestión integral de pacientes y citas',
        'Control de pagos y movimientos financieros',
        'Administración inteligente del inventario',
        'Comunicación fluida entre alumnos, docentes y personal',
        'Coordinación eficiente de recursos y roles',
        'Uso de inteligencia artificial para apoyar decisiones',
        'Análisis de datos e indicadores de desempeño',
        'Alertas tempranas mediante machine learning',
      ],
      buttonText: '¿Por qué es importante implementarlo?',
    },
    {
      icon: Lightbulb,
      title: '¿Por qué CLINIC AI es la mejor decisión ahora?',
      content:
        'CLINIC AI permite centralizar toda la operación clínica en una sola plataforma, reduciendo tiempos, errores y carga administrativa. \n\n La digitalización de procesos facilita: \n ✔ Atención más ágil y organizada \n ✔ Información disponible en tiempo real \n ✔ Mayor control y trazabilidad clínica \n ✔ Mejor supervisión docente \n\n Además, la inteligencia artificial aporta un valor estratégico al analizar datos, detectar patrones, anticipar necesidades y apoyar la toma de decisiones operativas. Implementar esta solución hoy significa avanzar hacia una clínica moderna, eficiente y alineada con las tendencias actuales del sector salud y educativo.',
      buttonText: '¿Hasta dónde llega el sistema?',
    },
    {
      icon: ListChecks,
      title: '¿Qué incluye CLINIC AI?',
      list: [
        'Gestión centralizada de pacientes, citas e historial clínico',
        'Registro de pagos y movimientos financieros',
        'Control de inventario por tratamiento',
        'Comunicación digital entre todos los actores',
        'Reportes y dashboards interactivos',
        'Análisis de datos para planeación y mejora continua',
      ],
      note: 'El sistema apoya la gestión y análisis, sin intervenir en la toma de decisiones médicas directas.',
      buttonText: 'Conocer las limitaciones',
    },
    {
      icon: ListX,
      title: 'Uso responsable de la tecnología',
      list: [
        'Aplicación exclusiva en la clínica odontológica universitaria',
        'La IA no realiza diagnósticos ni sugiere tratamientos',
        'El control de inventario depende del registro correcto del personal',
        'Acceso a reportes según perfiles autorizados',
        'Dependencia de infraestructura y conectividad institucional',
        'Implementación inicial en una sola sede',
      ],
      buttonText: 'Finalizar recorrido',
    },
    {
      icon: Rocket,
      title: 'CLINIC AI: tecnología al servicio de la educación y la salud',
      content:
        'CLINIC AI no solo mejora procesos. Transforma la forma en que aprendemos, atendemos y gestionamos la clínica universitaria. \n\n Una solución pensada para hoy… y preparada para el futuro.',
      buttonText: 'Volver al inicio',
    },
  ];

const InteractiveTour = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleNext = () => {
      if (currentStep < tourSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(0); // Loop back to the start
      }
    };
  
    const step = tourSteps[currentStep];
    const Icon = step.icon;

  return (
    <section id="interactive-tour" className="scroll-mt-16 overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col items-center text-center"
          >
            <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary">
              <Icon className="h-10 w-10" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{step.title}</h2>

            {step.content && <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground">{step.content}</p>}
            
            {step.intro && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{step.intro}</p>}
            
            {step.subPoints && (
              <div className="mt-8 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
                {step.subPoints.map((point, index) => {
                  const SubIcon = point.icon;
                  return (
                    <div key={index} className="rounded-lg border bg-card p-4">
                      <div className="flex items-center gap-3">
                         <SubIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                         <h4 className="font-semibold">{point.title}</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            )}
             {step.conclusion && <p className="mt-8 max-w-3xl font-semibold text-foreground">{step.conclusion}</p>}


            {step.mainGoal && <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-primary">{step.mainGoal}</p>}
            {step.subTitle && <h3 className="mt-8 text-2xl font-bold">{step.subTitle}</h3>}
            {step.goals && (
              <div className="mt-6 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
                {step.goals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            )}

            {step.list && (
                <ul className="mt-6 w-full max-w-2xl list-inside list-disc space-y-3 text-left text-lg text-muted-foreground">
                    {step.list.map((item, index) => <li key={index} className="flex items-start gap-3">
                        {step.icon === ListChecks ? <ListChecks className="mt-1 h-5 w-5 flex-shrink-0 text-primary" /> : <ListX className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />}
                        <span>{item}</span>
                    </li>)}
                </ul>
            )}
            {step.note && <p className="mt-6 max-w-3xl text-sm font-semibold text-muted-foreground">{step.note}</p>}


            <Button onClick={handleNext} className="mt-10" size="lg">
              {step.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveTour;
