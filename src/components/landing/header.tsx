import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11.2 5.2a1.6 1.6 0 0 0-2.4 0l-.5.5c-2.4 2.4-2.4 6.3 0 8.7l.5.5a1.6 1.6 0 0 0 2.4 0l.5-.5c.8-.8.8-2 0-2.8l-2.2-2.2c-.8-.8-2-2-2.8 0L6 10" />
    <path d="M12.8 5.2a1.6 1.6 0 0 1 2.4 0l.5.5c2.4 2.4 2.4 6.3 0 8.7l-.5.5a1.6 1.6 0 0 1-2.4 0l-.5-.5c-.8-.8-.8-2 0-2.8l2.2-2.2c.8-.8 2-2 2.8 0L18 10" />
    <path d="m15.5 13.5 1-1" />
    <path d="m8.5 13.5-1-1" />
    <path d="M12 18.5c-2 0-4-1-4-4h8c0 3-2 4-4 4Z" />
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
