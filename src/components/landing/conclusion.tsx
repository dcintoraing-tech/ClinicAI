import { SectionWrapper } from './section-wrapper';

const Conclusion = () => {
  return (
    <SectionWrapper className="bg-muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Conclusión
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          ClinicAI representa una propuesta innovadora que demuestra el potencial de la inteligencia artificial para redefinir la prestación de servicios de salud. Mediante la automatización y optimización de procesos clave, este proyecto sienta las bases para un futuro en el que la tecnología y la medicina convergen para ofrecer una atención más accesible, precisa y centrada en el ser humano, mejorando la calidad del sistema sanitario en su conjunto.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Conclusion;
