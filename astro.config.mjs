import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yapper689.github.io',
  base: 'Wuthering-Waves-Damage-Calculator',
});