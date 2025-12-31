import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.8 2.3c-1.3-1.1-3.2-1.4-4.8-0.9C11.4 2.1 10.3 3.3 10 5c-0.3-1.7-1.4-2.9-3-3.6C5.4 0.9 3.5 1.1 2.2 2.3c-1.4 1.3-2 3.2-1.7 5.1C1.2 10.7 3.6 14.2 8 17.1c0.5 1.3 1.2 2.6 2 3.8h4c0.8-1.2 1.5-2.5 2-3.8 4.4-2.9 6.8-6.4 7.5-9.7 0.3-1.9-0.3-3.8-1.7-5.1zM16 14.4c-1.1 1-2.4 1.7-3.8 2.1 0 0 0 0 0 0 -0.1 0-0.2 0-0.2 0s-0.1 0-0.2 0c0 0 0 0 0 0 -1.4-0.4-2.7-1.1-3.8-2.1 -2.9-2.5-4.8-5-5.2-7.4C2.7 6 3 5.1 3.7 4.5c0.7-0.6 1.7-0.8 2.6-0.5C7.8 4.6 8.6 6 9 7.4c0.1 0.4 0.5 0.6 0.9 0.6h4c0.4 0 0.8-0.2 0.9-0.6 0.4-1.4 1.2-2.8 2.8-3.5 0.9-0.3 1.9-0.2 2.6 0.5 0.7 0.6 1 1.5 0.8 2.5C20.8 9.4 18.9 11.9 16 14.4z" />
  </svg>
);

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
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 md:px-6">
        <div className="mb-4 rounded-full bg-primary/20 p-4 text-white">
          <ToothIcon className="h-10 w-10" />
        </div>
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
