import { SectionWrapper } from './section-wrapper';
import { Search, LayoutTemplate, Code, ClipboardCheck, Rocket } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Análisis',
      description: 'Investigación de requerimientos, análisis de viabilidad y estudio del estado del arte en IA aplicada a la salud.',
    },
    {
      icon: <LayoutTemplate className="h-8 w-8" />,
      title: 'Diseño',
      description: 'Definición de la arquitectura del sistema, diseño de la base de datos y creación de los mockups y prototipos de la interfaz de usuario.',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Desarrollo',
      description: 'Codificación de los módulos del backend y frontend. Entrenamiento y ajuste de los modelos de Machine Learning.',
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: 'Pruebas',
      description: 'Verificación funcional, pruebas de integración, validación de la precisión de los modelos y tests de usabilidad con usuarios piloto.',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Implementación',
      description: 'Despliegue del prototipo en un entorno de servidor para la demostración y evaluación final del proyecto.',
    },
  ];

  return (
    <SectionWrapper id="metodologia" className="scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Metodología
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Nuestro proyecto se desarrolla siguiendo un enfoque estructurado y por fases para garantizar la calidad y robustez del sistema.
        </p>
      </div>
      <div className="relative mt-12">
        <div
          className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-0.5 -translate-x-1/2 bg-border md:block"
          aria-hidden="true"
        />
        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center md:flex-row md:items-start md:space-y-0"
            >
              <div
                className={`flex w-full items-center text-center md:w-1/2 md:text-left ${
                  index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'
                }`}
              >
                <div
                  className={`w-full max-w-md rounded-lg bg-card p-6 shadow-lg ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>

              <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl my-4 md:my-0 md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2">
                {step.icon}
              </div>

              <div
                className={`hidden w-1/2 md:block ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Methodology;
