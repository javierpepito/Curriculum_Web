export interface Mission {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  challenges: string;
  technologies: string[];
  status: string;
  repoUrl: string;
  type: 'iot' | 'web' | 'mobile' | 'data';
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
  }[];
}

export const cvData = {
  personal: {
    name: "Javier Andres Méndez Sepulveda",
    shortName: "JAVIER",
    lastName: "MÉNDEZ",
    systemId: "JM.SYS",
    role: "ESTUDIANTE DE INGENIERÍA EN INFORMÁTICA",
    shortBio: "Construyendo soluciones, explorando tecnologías y convirtiendo ideas complejas en experiencias que funcionan.",
    fullBio: "Estudiante de ingeniería en informática apasionado por el aprendizaje, destaco por ser estructurado y organizado a la hora de resolver problemas, poseo conocimientos en tecnologías modernas, además, me caracterizo por ser responsable con mis tareas y tiempos, me adapto a diversas situaciones aprendiendo de forma autodidacta. Como diseñador de soluciones innovadoras busco conocer el mundo de la informática a profundidad.",
    education: {
      institution: "Instituto Profesional INACAP",
      campus: "Sede Renca",
      degree: "Ingeniería en Informática",
      progress: "5° Semestre de 8",
      status: "Cursando actualmente"
    },
    experience: {
      title: "Experiencia Laboral",
      status: "En búsqueda de primera práctica y desafíos profesionales",
      description: "No poseo experiencia laboral formal previa, pero sí un alto compromiso, sólida base técnica y muchas ganas de poner en práctica mis conocimientos en proyectos reales."
    },
    location: "Lampa, Santiago de Chile",
    phone: "+56 9 5310 5615",
    email: "javiermendezsepulveda19@gmail.com",
    github: "https://github.com",
  },

  attributes: [
    { name: "ORGANIZACIÓN", value: 92 },
    { name: "RESPONSABILIDAD", value: 95 },
    { name: "ADAPTABILIDAD", value: 90 },
    { name: "APRENDIZAJE", value: 94 },
  ],

  personalSkills: [
    "RESPONSABLE",
    "AUTODIDACTA",
    "ADAPTABLE",
    "ORGANIZADO",
    "INNOVADOR",
    "RESOLUCIÓN"
  ],

  technologies: [
    { name: "Python", category: "Lenguaje" },
    { name: "JavaScript", category: "Lenguaje" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Django", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Android Studio", category: "Mobile" },
    { name: "MySQL", category: "Bases de Datos" },
    { name: "MongoDB", category: "Bases de Datos" },
    { name: "Pentaho CE", category: "Datos & BI" },
    { name: "AWS", category: "Cloud" },
    { name: "Arduino", category: "IoT / Hardware" },
    { name: "Unity", category: "Desarrollo / Juegos" },
    { name: "GitHub", category: "Herramientas" },
    { name: "Windows", category: "Sistemas Operativos" },
    { name: "Ubuntu", category: "Sistemas Operativos" },
    { name: "Kali Linux", category: "Sistemas Operativos" },
  ],

  missions: [
    {
      id: "mision-01",
      number: "01",
      title: "Riego Automático IoT",
      shortDesc: "Sistema automatizado con microcontrolador ESP32, bomba de agua y control mediante protocolo IoT.",
      fullDesc: "Estación inteligente de riego automatizado capaz de censar variables de humedad de suelo y ambiente para activar una bomba de agua sumergible de precisión. El sistema se enlaza mediante microcontrolador ESP32 y arquitectura de nube IoT, permitiendo monitoreo y accionamiento remoto en tiempo real.",
      challenges: "Estabilizar la conectividad WiFi/MQTT del ESP32 frente a caídas de red, calibrar las lecturas de los sensores analógicos de humedad de suelo y aislar adecuadamente las etapas de potencia del circuito de la bomba.",
      technologies: ["ESP32", "Arduino / C++", "IoT / MQTT", "Python", "Sensores"],
      status: "PROTOTIPO FUNCIONAL",
      repoUrl: "https://github.com",
      type: "iot"
    },
    {
      id: "mision-02",
      number: "02",
      title: "Portal Web Nuam Bursátil",
      shortDesc: "Plataforma web desarrollada en Django para holding bursátil regional, trabajo colaborativo con Equipo 4F.",
      fullDesc: "Desarrollo de solución web corporativa diseñada para un holding bursátil (Nuam). Integra autenticación de usuarios, módulos de consulta de instrumentos financieros y panel administrativo con interfaz responsive y diseño estructurado.",
      challenges: "Diseño e implementación de arquitectura MVC escalable con Django, modelado de bases de datos relacionales normalizadas en MySQL y coordinación colaborativa de ramas en Git con el Equipo 4F.",
      technologies: ["Django", "Python", "MySQL", "Bootstrap", "Git / GitHub"],
      status: "CONCEPTO VALIDADO",
      repoUrl: "https://github.com",
      type: "web"
    },
    {
      id: "mision-03",
      number: "03",
      title: "App Móvil VamosJuntos",
      shortDesc: "Aplicación móvil en Flutter para coordinar salidas seguras en grupo de estudiantes de la sede INACAP.",
      fullDesc: "Solución móvil orientada a la seguridad estudiantil comunitaria. Permite a los alumnos de la sede Inacap Renca reportar horarios de salida, coordinar rutas compartidas hacia transporte público o paraderos y acompañarse en grupos en tiempo real.",
      challenges: "Gestión eficiente de estados reactivos en Flutter, diseño de interfaz intuitiva orientada a la accesibilidad en la vía pública y sincronización de puntos de encuentro entre usuarios concurrentes.",
      technologies: ["Flutter", "Dart", "Android Studio", "Firebase", "UI/UX"],
      status: "PROTOTIPO FUNCIONAL",
      repoUrl: "https://github.com",
      type: "mobile"
    },
    {
      id: "mision-04",
      number: "04",
      title: "Dashboard de Conectividad",
      shortDesc: "Arquitectura de datos y panel analítico de conectividad digital a nivel país, desarrollado con Equipo 4F.",
      fullDesc: "Pipeline completo de inteligencia de negocios para analizar y visualizar brechas de conectividad digital e infraestructura tecnológica. Involucra procesos ETL con Pentaho CE, almacenamiento estructurado y visualización analítica.",
      challenges: "Limpieza y transformación de datasets heterogéneos de telecomunicaciones mediante Pentaho Data Integration, optimización de consultas SQL complejas y diseño de métricas clave comprensibles.",
      technologies: ["Pentaho CE", "ETL", "MySQL", "Python", "Data Viz"],
      status: "ARQUITECTURA COMPLETADA",
      repoUrl: "https://github.com",
      type: "data"
    }
  ]
};
