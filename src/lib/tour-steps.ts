import {
    Award,
    Brain,
    AlertTriangle,
    Target,
    Lightbulb,
    ListChecks,
    ListX,
    Rocket,
    Users,
    FileText,
    Package,
    Bot,
  } from 'lucide-react';
  
  export const tourSteps = [
    {
      icon: Award,
      title: 'El futuro de la clínica universitaria comienza hoy',
      content:
        'La salud y la educación están cambiando. La forma en que gestionamos la información, organizamos los recursos y atendemos a los pacientes ya no puede depender de procesos manuales y dispersos. \n\n 👉 Bienvenido a CLINIC AI, una propuesta que transforma la gestión clínica universitaria.',
    },
    {
      icon: Brain,
      title: '¿Por qué es importante adaptarnos a la tecnología?',
      content:
        'En un entorno clínico universitario convergen pacientes, estudiantes, docentes y personal administrativo. Cuando la información no fluye de manera ordenada, aparecen retrasos, errores y sobrecarga de trabajo. \n\n La tecnología —y en especial la inteligencia artificial— permite: \n ✔ Centralizar la información \n ✔ Reducir tiempos administrativos \n ✔ Tomar decisiones basadas en datos \n ✔ Mejorar la experiencia del paciente y del estudiante \n\n CLINIC AI nace como respuesta a estos desafíos.',
    },
    {
      icon: AlertTriangle,
      title: '¿Qué está pasando hoy en la clínica?',
      intro:
        'La Clínica Universitaria cumple una doble misión: atender a la comunidad y formar profesionales en un entorno real supervisado. Sin embargo, en la práctica diaria surgen dificultades que afectan la continuidad y calidad del servicio.',
      subPoints: [
        {
          icon: Users,
          title: 'Registro de pacientes irregular',
          text: 'La información se captura en una bitácora digital sin un formato estandarizado, lo que provoca citas duplicadas, datos incompletos y reprogramaciones frecuentes.',
        },
        {
          icon: Bot,
          title: 'Asignación ineficiente de alumnos',
          text: 'La distribución manual de estudiantes genera saturación en algunos consultorios y subutilización en otros, afectando la experiencia formativa y el uso de los espacios.',
        },
        {
          icon: FileText,
          title: 'Información clínica dispersa',
          text: 'Los expedientes se encuentran fragmentados entre formatos físicos, archivos digitales e imágenes independientes, dificultando el seguimiento y la trazabilidad del tratamiento.',
        },
        {
          icon: FileText,
          title: 'Expedientes manuales y lentos',
          text: 'La revisión y firma de documentos requiere presencia física del docente, lo que retrasa autorizaciones y aumenta la carga administrativa.',
        },
        {
          icon: Package,
          title: 'Control limitado del inventario',
          text: 'El manejo manual de insumos genera faltantes inesperados, diferencias de stock y retrasos en los procedimientos clínicos.',
        },
      ],
      conclusion:
        'Estas situaciones generan ineficiencia operativa, afectan la atención al paciente y limitan el potencial formativo de los alumnos.',
    },
    {
      icon: Target,
      title: '¿Qué busca CLINIC AI?',
      mainGoal:
        'Desarrollar un sistema de información centralizado que integre los procesos clínicos, administrativos y operativos de la clínica universitaria, optimizando la organización del servicio y fortaleciendo la calidad de la atención.',
      subTitle: '¿Cómo lo lograremos?',
      goals: [
        'Gestión integral de pacientes y citas',
        'Control de pagos y movimientos financieros',
        'Administración inteligente del inventario',
        'Comunicación fluida entre alumnos, docentes y personal',
        'Coordinación eficiente de recursos y roles',
        'Uso de inteligencia artificial para apoyar decisiones',
        'Análisis de datos e indicadores de desempeño',
        'Alertas tempranas mediante machine learning',
      ],
    },
    {
      icon: Lightbulb,
      title: '¿Por qué CLINIC AI es la mejor decisión ahora?',
      content:
        'CLINIC AI permite centralizar toda la operación clínica en una sola plataforma, reduciendo tiempos, errores y carga administrativa. \n\n La digitalización de procesos facilita: \n ✔ Atención más ágil y organizada \n ✔ Información disponible en tiempo real \n ✔ Mayor control y trazabilidad clínica \n ✔ Mejor supervisión docente \n\n Además, la inteligencia artificial aporta un valor estratégico al analizar datos, detectar patrones, anticipar necesidades y apoyar la toma de decisiones operativas. Implementar esta solución hoy significa avanzar hacia una clínica moderna, eficiente y alineada con las tendencias actuales del sector salud y educativo.',
    },
    {
      icon: ListChecks,
      title: '¿Qué incluye CLINIC AI?',
      list: [
        'Gestión centralizada de pacientes, citas e historial clínico',
        'Registro de pagos y movimientos financieros',
        'Control de inventario por tratamiento',
        'Comunicación digital entre todos los actores',
        'Reportes y dashboards interactivos',
        'Análisis de datos para planeación y mejora continua',
      ],
      listIcon: ListChecks,
      listIconColor: 'text-primary',
      note: 'El sistema apoya la gestión y análisis, sin intervenir en la toma de decisiones médicas directas.',
    },
    {
      icon: ListX,
      title: 'Uso responsable de la tecnología',
      list: [
        'Aplicación exclusiva en la clínica odontológica universitaria',
        'La IA no realiza diagnósticos ni sugiere tratamientos',
        'El control de inventario depende del registro correcto del personal',
        'Acceso a reportes según perfiles autorizados',
        'Dependencia de infraestructura y conectividad institucional',
        'Implementación inicial en una sola sede',
      ],
      listIcon: ListX,
      listIconColor: 'text-red-500',
    },
    {
      icon: Rocket,
      title: 'CLINIC AI: tecnología al servicio de la educación y la salud',
      content:
        'CLINIC AI no solo mejora procesos. Transforma la forma en que aprendemos, atendemos y gestionamos la clínica universitaria. \n\n Una solución pensada para hoy… y preparada para el futuro.',
    },
  ];  
