'use client';

import { tourSteps } from '@/lib/tour-steps';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CheckCircle, Hand } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const InteractiveTour = () => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000); // The hint will disappear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper
      id="interactive-tour"
      className="scroll-mt-16 overflow-hidden bg-muted py-16 md:py-24 relative"
    >
      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center md:hidden pointer-events-none"
          >
            <motion.div
              animate={{
                x: [-20, 20, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Hand className="h-10 w-10 text-primary" fill="currentColor" />
            </motion.div>
            <p className="mt-2 text-sm font-semibold text-primary bg-background/80 px-2 py-1 rounded-md">
              Desliza
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {tourSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <CarouselItem key={index}>
                <div className="flex justify-center p-1">
                  <Card className="w-full max-w-4xl overflow-hidden shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center md:p-12 min-h-[40vh] md:min-h-[50vh]">
                      <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary">
                        <Icon className="h-8 w-8 md:h-10 md:w-10" />
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                        {step.title}
                      </h2>

                      {step.content && (
                        <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
                          {step.content}
                        </p>
                      )}

                      {step.intro && (
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
                          {step.intro}
                        </p>
                      )}

                      {step.subPoints && (
                        <div className="mt-8 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
                          {step.subPoints.map((point, i) => {
                            const SubIcon = point.icon;
                            return (
                              <div
                                key={i}
                                className="rounded-lg border bg-card p-4"
                              >
                                <div className="flex items-center gap-3">
                                  <SubIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                                  <h4 className="font-semibold text-sm">
                                    {point.title}
                                  </h4>
                                </div>
                                <p className="mt-2 text-xs text-muted-foreground">
                                  {point.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {step.conclusion && (
                        <p className="mt-8 max-w-3xl font-semibold text-foreground md:text-base text-sm">
                          {step.conclusion}
                        </p>
                      )}

                      {step.mainGoal && (
                        <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-primary md:mt-6 md:text-lg">
                          {step.mainGoal}
                        </p>
                      )}
                      {step.subTitle && (
                        <h3 className="mt-8 text-xl font-bold md:text-2xl">
                          {step.subTitle}
                        </h3>
                      )}
                      {step.goals && (
                        <div className="mt-6 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
                          {step.goals.map((goal, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 rounded-lg border bg-card p-4"
                            >
                              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span className="text-sm">{goal}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.list && (
                        <ul className="mt-6 w-full max-w-2xl list-inside space-y-3 text-left text-sm text-muted-foreground md:text-base">
                          {step.list.map((item, i) => {
                             const ListIcon = step.listIcon;
                             return (
                            <li key={i} className="flex items-start gap-3">
                              <ListIcon className={`mt-1 h-5 w-5 flex-shrink-0 ${step.listIconColor}`} />
                              <span>{item}</span>
                            </li>
                             )
                          })}
                        </ul>
                      )}
                      {step.note && (
                        <p className="mt-6 max-w-3xl text-xs font-semibold text-muted-foreground md:text-sm">
                          {step.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
};

export default InteractiveTour;
