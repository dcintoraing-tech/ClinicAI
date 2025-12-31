import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full bg-[#A0CFEC] text-primary-foreground flex items-center justify-center text-center">
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
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          ClinicAI
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200 md:text-xl">
          Clínica Médica Inteligente Basada en Inteligencia Artificial
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-base text-slate-300">
          Un proyecto de investigación y desarrollo enfocado en la aplicación de inteligencia artificial para optimizar la gestión y atención clínica, mejorando la experiencia del paciente y la eficiencia del personal médico.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#demo">Probar la Demo</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#objetivos">Leer Más</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
