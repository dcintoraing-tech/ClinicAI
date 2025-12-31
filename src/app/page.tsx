'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, AlertTriangle, Target, Lightbulb, ListChecks, ListX, Rocket, Check, Award, Users, FileText, Package, Bot, BarChart, Bell } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const tourSteps = [
  {
    id: 'intro',
    title: 'El futuro de la clínica universitaria comienza hoy',
    content: (
      <>
        <p className="text-lg text-slate-300 md:text-xl">
          La salud y la educación están cambiando. La forma en que gestionamos la información, organizamos los recursos y atendemos a los pacientes ya no puede depender de procesos manuales y dispersos.
        </p>
        <p className="mt-4 text-lg text-slate-300 md:text-xl">
          Hoy, la inteligencia artificial y las tecnologías digitales nos permiten dar un paso adelante: mejorar la atención al paciente, optimizar el trabajo clínico y fortalecer la formación de los futuros profesionales.
        </p>
        <p className="mt-6 font-semibold text-xl text-white">
          👉 Bienvenido a CLINIC AI, una propuesta que transforma la gestión clínica universitaria.
        </p>
      </>
    ),
    buttonText: 'Comenzar recorrido',
  },
  {
    id: 'why',
    title: 'Adaptarse ya no es una opción, es una necesidad',
    icon: <Brain className="h-12 w-12" />,
    content: (
      <>
        <p>
          En un entorno clínico universitario convergen pacientes, estudiantes, docentes y personal administrativo. Cuando la información no fluye de manera ordenada, aparecen retrasos, errores y sobrecarga de trabajo.
        </p>
        <p className="mt-4">
          La tecnología —y en especial la inteligencia artificial— permite:
        </p>
        <ul className="mt-4 space-y-2 list-inside list-disc marker:text-blue-400">
          <li>Centralizar la información</li>
          <li>Reducir tiempos administrativos</li>
          <li>Tomar decisiones basadas en datos</li>
          <li>Mejorar la experiencia del paciente y del estudiante</li>
        </ul>
        <p className="mt-6 font-semibold">
          CLINIC AI nace como respuesta a estos desafíos.
        </p>
      </>
    ),
    buttonText: 'Conocer el problema actual',
  },
  {
    id: 'problem',
    title: '¿Qué está pasando hoy en la clínica?',
    icon: <AlertTriangle className="h-12 w-12" />,
    content: (
      <>
        <p>La Clínica Universitaria cumple una doble misión: atender a la comunidad y formar profesionales en un entorno real supervisado. Sin embargo, en la práctica diaria surgen dificultades que afectan la continuidad y calidad del servicio.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-background/10 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-primary-foreground/90">🔹 Registro de pacientes irregular</h3>
                <p className="text-sm mt-1">La información se captura sin un formato estandarizado, lo que provoca citas duplicadas y datos incompletos.</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-primary-foreground/90">🔹 Asignación ineficiente de alumnos</h3>
                <p className="text-sm mt-1">La distribución manual genera saturación en algunos consultorios y subutilización en otros.</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-primary-foreground/90">🔹 Información clínica dispersa</h3>
                <p className="text-sm mt-1">Los expedientes están fragmentados, dificultando el seguimiento del tratamiento.</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-primary-foreground/90">🔹 Expedientes manuales y lentos</h3>
                <p className="text-sm mt-1">La revisión y firma de documentos requiere presencia física del docente, causando retrasos.</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg sm:col-span-2 text-left">
                <h3 className="font-semibold text-primary-foreground/90">🔹 Control limitado del inventario</h3>
                <p className="text-sm mt-1">El manejo manual de insumos genera faltantes inesperados y retrasos en procedimientos.</p>
            </div>
        </div>
        <p className="mt-6 font-semibold">Estas situaciones generan ineficiencia, afectan la atención y limitan el potencial formativo.</p>
      </>
    ),
    buttonText: 'Hacia una solución',
  },
  {
    id: 'objective',
    title: '¿Qué busca CLINIC AI?',
    icon: <Target className="h-12 w-12" />,
    content: (
      <>
        <div className="bg-background/20 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-white">Objetivo General</h3>
            <p className="mt-2 text-base">Desarrollar un sistema de información centralizado que integre los procesos clínicos, administrativos y operativos, optimizando la organización y fortaleciendo la calidad de la atención.</p>
        </div>
        <h4 className="font-semibold mt-8 mb-4">¿Cómo lo lograremos?</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Users className="h-7 w-7"/><span>Gestión de pacientes</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><FileText className="h-7 w-7"/><span>Control financiero</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Package className="h-7 w-7"/><span>Inventario inteligente</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Award className="h-7 w-7"/><span>Coordinación de recursos</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Bot className="h-7 w-7"/><span>Apoyo con IA</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><BarChart className="h-7 w-7"/><span>Análisis de datos</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Bell className="h-7 w-7"/><span>Alertas tempranas (ML)</span></div>
            <div className="flex flex-col items-center p-2 rounded-lg gap-2"><Users className="h-7 w-7"/><span>Comunicación fluida</span></div>
        </div>
      </>
    ),
    buttonText: '¿Por qué es importante?',
  },
  {
    id: 'justification',
    title: '¿Por qué CLINIC AI es la mejor decisión ahora?',
    icon: <Lightbulb className="h-12 w-12" />,
    content: (
       <>
        <p>CLINIC AI permite centralizar toda la operación clínica en una sola plataforma, reduciendo tiempos, errores y carga administrativa.</p>
        <p className="mt-4 font-semibold">La digitalización de procesos facilita:</p>
        <ul className="mt-2 space-y-1 list-inside list-disc marker:text-blue-400">
          <li>Atención más ágil y organizada</li>
          <li>Información disponible en tiempo real</li>
          <li>Mayor control y trazabilidad clínica</li>
          <li>Mejor supervisión docente</li>
        </ul>
        <p className="mt-4">Además, la inteligencia artificial aporta un valor estratégico al analizar datos, detectar patrones, anticipar necesidades y apoyar la toma de decisiones operativas.</p>
        <p className="mt-4 font-semibold">Implementar esta solución hoy significa avanzar hacia una clínica moderna y eficiente.</p>
      </>
    ),
    buttonText: '¿Hasta dónde llega?',
  },
   {
    id: 'scope',
    title: '¿Qué incluye CLINIC AI?',
    icon: <ListChecks className="h-12 w-12" />,
    content: (
        <>
            <ul className="space-y-3 text-base text-left">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Gestión centralizada de pacientes, citas e historial clínico</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Registro de pagos y movimientos financieros</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Control de inventario por tratamiento</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Comunicación digital entre todos los actores</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Reportes y dashboards interactivos</span></li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" /><span>Análisis de datos para planeación y mejora continua</span></li>
            </ul>
            <p className="mt-6 text-sm text-slate-300/80 bg-background/10 p-3 rounded-lg">
                <strong>Nota aclaratoria:</strong> El sistema apoya la gestión y análisis, sin intervenir en la toma de decisiones médicas directas.
            </p>
        </>
    ),
    buttonText: 'Conocer las limitaciones',
  },
  {
    id: 'limitations',
    title: 'Uso responsable de la tecnología',
    icon: <ListX className="h-12 w-12" />,
    content: (
        <>
            <p>CLINIC AI está diseñado con límites claros para garantizar un uso ético y adecuado:</p>
            <ul className="mt-4 space-y-3 text-base text-left">
                <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>Aplicación exclusiva en la clínica odontológica universitaria.</span></li>
                <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>La IA no realiza diagnósticos ni sugiere tratamientos.</span></li>
                <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>El control de inventario depende del registro correcto del personal.</span></li>
                <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>Acceso a reportes según perfiles autorizados.</span></li>
                <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>Dependencia de infraestructura y conectividad institucional.</span></li>
                 <li className="flex items-start gap-3"><ListX className="h-5 w-5 flex-shrink-0 text-amber-400 mt-1" /><span>Implementación inicial en una sola sede.</span></li>
            </ul>
        </>
    ),
    buttonText: 'Finalizar recorrido',
  },
  {
    id: 'conclusion',
    title: 'CLINIC AI: tecnología al servicio de la educación y la salud',
    icon: <Rocket className="h-12 w-12" />,
    content: (
      <>
        <p className="text-lg">
          CLINIC AI no solo mejora procesos. Transforma la forma en que aprendemos, atendemos y gestionamos la clínica universitaria.
        </p>
        <p className="mt-6 font-semibold text-xl text-white">
          Una solución pensada para hoy… y preparada para el futuro.
        </p>
      </>
    ),
    buttonText: 'Volver al inicio',
  },
];


const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0); // Loop back to the start
    }
  };

  const step = tourSteps[currentStep];
  const isIntro = step.id === 'intro';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-slate-300 p-4 transition-all duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center">
            {step.icon && (
              <div className="flex justify-center mb-6 text-blue-400">
                {step.icon}
              </div>
            )}
            <h1 className={`font-bold tracking-tight text-white ${isIntro ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
              {step.title}
            </h1>
            <div className={`mt-6 mx-auto ${isIntro ? 'max-w-3xl' : 'max-w-2xl text-lg'}`}>
              {step.content}
            </div>
            <div className="mt-10">
              <Button onClick={handleNext} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transform hover:scale-105 transition-transform duration-300">
                {step.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {tourSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentStep === index ? 'w-6 bg-blue-500' : 'bg-gray-500 hover:bg-gray-400'}`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
