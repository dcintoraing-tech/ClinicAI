import { SectionWrapper } from './section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const Scope = () => {
  const includes = [
    'Módulo de registro y perfil de paciente.',
    'Sistema de triaje inteligente basado en síntomas.',
    'Herramienta de asistencia al diagnóstico para patologías comunes.',
    'Panel de control (dashboard) para personal médico.',
    'Simulación interactiva del proceso de decisión de la IA.',
  ];

  const excludes = [
    'Integración con sistemas de expedientes clínicos electrónicos (EHR) existentes.',
    'Módulo de prescripción y dispensación de medicamentos.',
    'Funcionalidades de facturación y gestión de seguros médicos.',
    'Implementación física en un entorno clínico real durante esta fase.',
    'Diagnósticos médicos definitivos o legalmente vinculantes.',
  ];

  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Alcance del Proyecto
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Definición clara de los límites y entregables del proyecto ClinicAI en su fase actual.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card className="shadow-lg border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-600">Incluye</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-red-500/50">
          <CardHeader>
            <CardTitle className="text-red-600">No Incluye</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {excludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 flex-shrink-0 text-red-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Scope;
