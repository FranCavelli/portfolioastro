import { defineConfig } from 'astro/config';

// ========================================
// GitHub Pages · Ajustá según tu repo
// ----------------------------------------
// Repo de PROYECTO (ej: FranCavelli/porfolioastroc)
//   site: 'https://FranCavelli.github.io'
//   base: '/porfolioastroc'
//
// Repo de USUARIO (ej: FranCavelli/FranCavelli.github.io)
//   site: 'https://FranCavelli.github.io'
//   base: '/'
// ========================================

export default defineConfig({
  site: 'https://FranCavelli.github.io',
  base: '/portfolioastro',
  trailingSlash: 'never',

  server: {
    port: 4321,
    host: true,
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
