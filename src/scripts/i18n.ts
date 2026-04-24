export type Lang = "es" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    "nav.experience": "Experiencia",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Stack",
    "nav.cta": "Start →",

    // SideDots
    "dots.home": "Inicio",
    "dots.experience": "Experiencia",
    "dots.about": "Sobre mí",
    "dots.projects": "Proyectos",
    "dots.skills": "Stack",
    "dots.contact": "Contacto",

    // Hero
    "hero.eyebrow": "Desarrollo de personaje",
    "hero.subtitle": "Desarrollador fullstack",
    "hero.paragraph":
      "Más de 3 años diseñando y manteniendo aplicaciones fullstack: desde integraciones con APIs y pipelines CI/CD, hasta interfaces modernas en Astro, React y Angular. Actualmente trabajo en Correo Argentino y proyectos on-demand, buscando ampliar mis horizontes.",
    "hero.cta.projects": "▶ Ver proyectos",
    "hero.cta.contact": "Contactar",
    "hero.status": "PLAYER 1 · ONLINE",

    // Earth panel
    "earth.name": "TIERRA · BASE",
    "earth.status": "señal ONLINE",
    "earth.horizon": "TRANSMITIENDO DESDE 34°35′ S",

    // Experience
    "exp.eyebrow": "Experiencia · Bitácora de viaje",
    "exp.h2.a": "Aterrizajes en ",
    "exp.h2.b": "distintos mundos",
    "exp.h2.c": ".",
    "exp.paragraph":
      "Cada planeta, una misión distinta: un stack, un equipo, un sistema que sostener en producción.",
    "exp.launcher": "AHORA · 2026",

    // About
    "about.eyebrow": "Sobre mí",
    "about.h2":
      "Desarrollo producto end-to-end, con foco en que el sistema siga andando el lunes a las 9.",
    "about.p1":
      "Soy desarrollador de software con más de 3 años de experiencia en proyectos fullstack. Lideré reestructuraciones de sistemas y maquetación de interfaces modernas. Implementé facturación electrónica mediante la API de AFIP en diversas organizaciones.",
    "about.p2":
      "También coordiné el área de soporte, resolviendo y asignando incidencias críticas con foco en tiempos de respuesta óptimos. Hoy divido mi tiempo entre Correo Argentino y proyectos CMS on-demand.",
    "about.stats.label": "STATS",
    "about.stats.key.exp": "EXP",
    "about.stats.key.region": "REGIÓN",
    "about.stats.key.class": "CLASE",
    "about.stats.key.lang": "IDIOMAS",
    "about.stats.val.exp": "3+ años fullstack",
    "about.stats.val.region": "Argentina",
    "about.stats.val.class": "Ing. Informática · UNNOBA",
    "about.stats.val.lang": "ES nativo · EN intermedio",
    "about.stats.ready": ">> READY",

    // Projects
    "projects.eyebrow": "Proyectos seleccionados",
    "projects.h2.a": "Código que ",
    "projects.h2.b": "mostrar",
    "projects.h2.c": ".",
    "projects.paragraph":
      "Seleccionados por arquitectura, integraciones interesantes o decisiones de stack que valen la pena revisar.",
    "projects.more": "Ver todos en GitHub →",

    // Skills
    "skills.eyebrow": "Stack técnico · Class panels",
    "skills.h2.a": "Herramientas que uso ",
    "skills.h2.b": "a diario",
    "skills.h2.c": ".",
    "skills.paragraph":
      "Tres clases, del servidor al despliegue. Aprendo rápido lo que el proyecto pida.",

    // Contact
    "contact.eyebrow": "Contacto",
    "contact.h2.a": "¿Tenés un proyecto? ",
    "contact.h2.b": "Hablemos",
    "contact.h2.c": ".",
    "contact.paragraph":
      "Disponible para trabajos fullstack, integraciones con APIs, migraciones y reestructuraciones. Respondo mails en menos de 24 h o su pizza es gratis. También me interesa colaborar en proyectos open-source o iniciativas comunitarias relacionadas con el desarrollo web y la tecnología. ¡No dudes en contactarme!",
    "contact.ch.email": "Email",
    "contact.ch.linkedin": "LinkedIn",
    "contact.ch.github": "GitHub",
    "contact.sig.role": "Fullstack Developer",
    "contact.sig.main": "Main",
    "contact.sig.region": "Región",
    "contact.sig.exp": "Exp.",
    "contact.sig.mode": "Modo",
    "contact.sig.expVal": "3+ años",
    "contact.sig.modeVal": "Remoto/Presencial",
    "contact.sig.available": "Disponible para proyectos",
    "contact.sig.chip": "OPEN TO WORK",

    // Footer
    "footer.built": "Construido con Astro + GSAP",
  },

  en: {
    // Navbar
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Stack",
    "nav.cta": "Start →",

    // SideDots
    "dots.home": "Home",
    "dots.experience": "Experience",
    "dots.about": "About",
    "dots.projects": "Projects",
    "dots.skills": "Stack",
    "dots.contact": "Contact",

    // Hero
    "hero.eyebrow": "Character development",
    "hero.subtitle": "Fullstack developer",
    "hero.paragraph":
      "3+ years building and maintaining fullstack applications: from API integrations and CI/CD pipelines, to modern interfaces in Astro, React and Angular. Currently working at Correo Argentino and on-demand projects, looking to broaden my horizons.",
    "hero.cta.projects": "▶ See projects",
    "hero.cta.contact": "Get in touch",
    "hero.status": "PLAYER 1 · ONLINE",

    // Earth panel
    "earth.name": "EARTH · BASE",
    "earth.status": "SIGNAL ONLINE",
    "earth.horizon": "TRANSMITTING FROM 34°35′ S",

    // Experience
    "exp.eyebrow": "Experience · Travel log",
    "exp.h2.a": "Landings on ",
    "exp.h2.b": "different worlds",
    "exp.h2.c": ".",
    "exp.paragraph":
      "Each planet, a different mission: a stack, a team, a system to keep running in production.",
    "exp.launcher": "NOW · 2026",

    // About
    "about.eyebrow": "About me",
    "about.h2":
      "I build product end-to-end, focused on the system still running Monday at 9am.",
    "about.p1":
      "Software developer with 3+ years of experience in fullstack projects. I led system refactors and built modern interfaces. I implemented electronic invoicing via the AFIP API across multiple organizations.",
    "about.p2":
      "I also coordinated support, resolving and routing critical incidents with focus on optimal response times. Today I split my time between Correo Argentino and on-demand CMS projects.",
    "about.stats.label": "STATS",
    "about.stats.key.exp": "EXP",
    "about.stats.key.region": "REGION",
    "about.stats.key.class": "CLASS",
    "about.stats.key.lang": "LANGS",
    "about.stats.val.exp": "3+ years fullstack",
    "about.stats.val.region": "Argentina",
    "about.stats.val.class": "CS Engineering · UNNOBA",
    "about.stats.val.lang": "ES native · EN intermediate",
    "about.stats.ready": ">> READY",

    // Projects
    "projects.eyebrow": "Selected projects",
    "projects.h2.a": "Code to ",
    "projects.h2.b": "show",
    "projects.h2.c": ".",
    "projects.paragraph":
      "Picked by architecture, interesting integrations, or stack decisions worth reviewing.",
    "projects.more": "See all on GitHub →",

    // Skills
    "skills.eyebrow": "Tech stack · Class panels",
    "skills.h2.a": "Tools I use ",
    "skills.h2.b": "daily",
    "skills.h2.c": ".",
    "skills.paragraph":
      "Three classes, from server to deploy. I pick up whatever the project needs, fast.",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.h2.a": "Got a project? ",
    "contact.h2.b": "Let's talk",
    "contact.h2.c": ".",
    "contact.paragraph":
      "Available for fullstack work, API integrations, migrations and refactors. I reply to emails in under 24 h or your pizza is free. I'm also interested in collaborating on open-source or community initiatives around web dev and tech. Reach out!",
    "contact.ch.email": "Email",
    "contact.ch.linkedin": "LinkedIn",
    "contact.ch.github": "GitHub",
    "contact.sig.role": "Fullstack Developer",
    "contact.sig.main": "Main",
    "contact.sig.region": "Region",
    "contact.sig.exp": "Exp.",
    "contact.sig.mode": "Mode",
    "contact.sig.expVal": "3+ years",
    "contact.sig.modeVal": "Remote/On-site",
    "contact.sig.available": "Available for projects",
    "contact.sig.chip": "OPEN TO WORK",

    // Footer
    "footer.built": "Built with Astro + GSAP",
  },
};

export function getLang(): Lang {
  if (typeof window === "undefined") return "es";
  return (localStorage.getItem("lang") as Lang) || "es";
}

export function applyLang(lang: Lang) {
  if (typeof document === "undefined") return;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key && dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lang-set]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langSet === lang);
  });
}
