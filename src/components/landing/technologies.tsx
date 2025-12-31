import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, Database, MonitorSmartphone, ShieldCheck } from 'lucide-react';

const Technologies = () => {
  const techs = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: 'Inteligencia Artificial',
      description: 'Modelos de Machine Learning y Procesamiento de Lenguaje Natural (PLN) para análisis de datos y asistencia al diagnóstico.',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Bases de Datos',
      description: 'Sistemas de gestión de bases de datos relacionales y no relacionales para un almacenamiento seguro y eficiente de la información.',
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: 'Desarrollo Web',
      description: 'Frameworks modernos como Next.js y React para construir una interfaz de usuario rápida, reactiva y accesible.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Seguridad de la Información',
      description: 'Protocolos de cifrado de datos, autenticación y autorización para garantizar la confidencialidad y la integridad de los datos del paciente.',
    },
  ];
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Tecnologías Utilizadas
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          La arquitectura de ClinicAI se fundamenta en un stack tecnológico robusto, seguro y escalable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {techs.map((tech, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg transition-transform hover:-translate-y-2">
            <div className="rounded-full bg-primary/10 p-4 mb-4 text-primary">
              {tech.icon}
            </div>
            <CardHeader className="p-0">
              <CardTitle>{tech.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 flex-grow">
              {tech.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Technologies;
