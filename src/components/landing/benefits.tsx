import { UserCheck, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';

const Benefits = () => {
  const patientBenefits = [
    'Reducción de tiempos de espera en la atención primaria.',
    'Acceso rápido a una orientación médica preliminar 24/7.',
    'Mayor involucramiento y control sobre su información de salud.',
    'Optimización del seguimiento de condiciones crónicas.',
  ];

  const staffBenefits = [
    'Optimización del flujo de trabajo y priorización de casos urgentes.',
    'Herramienta de apoyo para la toma de decisiones clínicas.',
    'Reducción significativa de la carga administrativa y tareas repetitivas.',
    'Disminución del agotamiento profesional (burnout) al automatizar procesos.',
  ];

  return (
    <SectionWrapper className="bg-muted">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Beneficios Esperados
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Impacto positivo en la calidad de la atención tanto para pacientes como para el personal sanitario.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Para Pacientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {patientBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Para Personal Médico</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {staffBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;
