import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.franciscocavelli.com',
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