'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Suggestions = () => {
  const [submitted, setSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim() === '') return;
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="sugerencias" className="scroll-mt-16">
      <Card className="mx-auto max-w-2xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl">Sugerencias y Observaciones</CardTitle>
          <CardDescription className="pt-2 text-lg">
            Tu opinión es importante para nosotros. ¡Déjanos tus comentarios!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-hidden">
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="flex flex-col items-center justify-center text-center p-8 min-h-[240px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.2, type: 'spring' } }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </motion.div>
                  <h3 className="mt-4 text-2xl font-semibold">¡Gracias!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Hemos recibido tus comentarios.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setSuggestion('');
                    }}
                    className="mt-6"
                    variant="outline"
                  >
                    Enviar otra sugerencia
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: 'absolute', width: '100%' }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid w-full gap-2">
                    <Label htmlFor="suggestion" className="sr-only">Sugerencia</Label>
                    <Textarea
                      id="suggestion"
                      placeholder="Escribe aquí tu sugerencia..."
                      rows={6}
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={!suggestion.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default Suggestions;
