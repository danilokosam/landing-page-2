// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Replace with your site's URL
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});