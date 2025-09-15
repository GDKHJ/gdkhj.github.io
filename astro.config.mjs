import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://gdkhj.github.io',
  integrations: [
    mdx(),
    react(),
  ],
});
