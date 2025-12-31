import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center bg-[#A0CFEC] text-center text-primary-foreground md:h-[60vh]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          ClinicAI
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 md:text-xl">
          Clínica Médica Inteligente Basada en Inteligencia Artificial
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300">
          Un proyecto de investigación y desarrollo enfocado en la aplicación de inteligencia artificial para optimizar la gestión y atención clínica, mejorando la experiencia del paciente y la eficiencia del personal médico.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#interactive-tour">Probar el Recorrido</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link href="#objetivos">Leer Más</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
