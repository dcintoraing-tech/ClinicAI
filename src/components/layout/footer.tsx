import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ClinicAI. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          Proyecto de Tesis - Desarrollo de una Clínica Inteligente Basada en Inteligencia Artificial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
