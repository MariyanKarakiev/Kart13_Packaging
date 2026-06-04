import { defineConfig } from 'astro/config';
  import tailwindcss from '@tailwindcss/vite';

  export default defineConfig({
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
