import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        previous: resolve('previous.html'),
        concepts: resolve('concepts/index.html'),
        editorial: resolve('concepts/editorial.html'),
        scrapbook: resolve('concepts/scrapbook.html'),
        gallery: resolve('concepts/gallery.html'),
      },
    },
  },
});
