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
import { CheckCircle } from 'lucide-react';

const InteractiveTour = () => {
  return (
    <SectionWrapper
      id="interactive-tour"
      className="scroll-mt-16 overflow-hidden bg-muted py-16 md:py-24"
    >
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
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center md:p-12 min-h-[40vh] md:min-h-[60vh]">
                      <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary">
                        <Icon className="h-8 w-8 md:h-10 md:w-10" />
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                        {step.title}
                      </h2>

                      {step.content && (
                        <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
                          {step.content}
                        </p>
                      )}

                      {step.intro && (
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
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
                                  <h4 className="font-semibold">
                                    {point.title}
                                  </h4>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                  {point.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {step.conclusion && (
                        <p className="mt-8 max-w-3xl font-semibold text-foreground md:text-base">
                          {step.conclusion}
                        </p>
                      )}

                      {step.mainGoal && (
                        <p className="mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-primary md:mt-6 md:text-xl">
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
                        <ul className="mt-6 w-full max-w-2xl list-inside space-y-3 text-left text-base text-muted-foreground md:text-lg">
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
