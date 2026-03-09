import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reach-study.org',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
