import { SectionWrapper } from './section-wrapper';
import { Lightbulb } from 'lucide-react';

const Justification = () => {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-4">
                <Lightbulb className="h-8 w-8 text-primary" />
            </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Justificación
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          La inteligencia artificial (IA) emerge como una solución transformadora en el sector salud. Su capacidad para procesar grandes volúmenes de datos, identificar patrones complejos y asistir en la toma de decisiones clínicas permite mitigar los problemas endémicos de los sistemas tradicionales. La implementación de la IA no solo optimiza recursos, sino que también eleva la calidad y precisión de la atención médica, abriendo el camino hacia una medicina más predictiva, personalizada y eficiente.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Justification;
