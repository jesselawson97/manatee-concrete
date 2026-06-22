import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manateeconcrete.com',
  output: 'static',
  integrations: [sitemap()],
});
