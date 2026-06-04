import { defineConfig } from 'astro/config';
  import tailwindcss from '@tailwindcss/vite';

  export default defineConfig({
    site: 'https://m-karakiev.github.io/kart13-website/',
    base: '/kart13-website',
    i18n: {
      defaultLocale: 'bg',
      locales: ['bg', 'en', 'de', 'fr', 'nl'],
      routing: {
        prefixDefaultLocale: false,
      },
    },
    vite: {
      plugins: [tailwindcss()],
      ssr: {
        external: ['aos']
      }
    }
  });
