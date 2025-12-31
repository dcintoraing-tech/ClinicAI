'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { interactiveAIDemo, type InteractiveAIDemoOutput } from '@/ai/flows/interactive-ai-demo';
import { SectionWrapper } from './section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  symptoms: z.string().min(10, { message: 'Por favor, describa los síntomas con más detalle.' }),
  medicalHistory: z.string().optional(),
  diagnosticTests: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const InteractiveDemo = () => {
  const [result, setResult] = useState<InteractiveAIDemoOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      symptoms: '',
      medicalHistory: '',
      diagnosticTests: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await interactiveAIDemo({
        symptoms: data.symptoms,
        medicalHistory: data.medicalHistory || 'Ninguno',
        diagnosticTests: data.diagnosticTests || 'Ninguno',
      });
      setResult(response);
    } catch (error) {
      console.error('Error en la demo interactiva:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo obtener una respuesta de la IA. Por favor, inténtelo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="demo" className="scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Demo Interactiva
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Experimente cómo ClinicAI procesa la información para asistir en la toma de decisiones.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Información del Paciente (Simulación)</CardTitle>
            <CardDescription>
              Ingrese los datos para que la IA genere un análisis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Síntomas del Paciente</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: Fiebre alta (39°C) desde hace 2 días, tos seca persistente, dolor de cabeza y fatiga extrema."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="medicalHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Historial Médico Relevante (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: Paciente con asma, sin alergias conocidas."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="diagnosticTests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resultados de Pruebas (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: Prueba rápida de antígenos negativa para influenza."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generar Análisis
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card className="flex-1 shadow-lg">
            <CardHeader>
              <CardTitle>Razonamiento de la IA</CardTitle>
              <CardDescription>
                Análisis paso a paso basado en los datos proporcionados.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : result ? (
                <p className="whitespace-pre-wrap">{result.reasoning}</p>
              ) : (
                <p className="text-muted-foreground">El razonamiento de la IA aparecerá aquí.</p>
              )}
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-lg">
            <CardHeader>
              <CardTitle>Recomendación</CardTitle>
              <CardDescription>
                Sugerencia de próximos pasos o diagnóstico preliminar.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : result ? (
                <p className="whitespace-pre-wrap font-medium">{result.recommendation}</p>
              ) : (
                <p className="text-muted-foreground">La recomendación de la IA aparecerá aquí.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InteractiveDemo;
