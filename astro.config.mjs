import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import '@fontsource-variable/lora';
import starlightImageZoom from 'starlight-image-zoom';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';
import starlightFullViewMode from "starlight-fullview-mode";

import starlightScrollToTop from 'starlight-scroll-to-top';
export default defineConfig({
  site: 'https://exhibits.judaicadhpenn.org',

  integrations: [
      starlight({
          customCss: [
              './src/styles/global.css',

          ],
          plugins: [
              starlightImageZoom({showCaptions: true}),
              starlightFullViewMode({}),
              starlightScrollToTop(),


          ],
          pagefind: {
              ranking: {
                  pageLength: 0.7,
                  termFrequency: 1.0,
                  termSaturation: 0.9,
                  termSimilarity: 1.0,
              },
              mergeIndex: [
                  {
                      bundlePath: 'https://exhibits.judaicadhpenn.org/pagefind/',
                      baseUrl: 'https://exhibits.judaicadhpenn.org',
                      indexWeight: 1.0,
                      mergeFilter: { site: 'Exhibits Website' },
                      language: 'en'
                  },
                  {
                      bundlePath: 'https://judaicadhpenn.org/pagefind/',
                      baseUrl: 'https://judaicadhpenn.org',
                      indexWeight: 0.8, // local content weighted highest
                      mergeFilter: { site: 'Judaica Website' },
                      language: 'en',
                  },
              ],
          },
          title: 'Judaica Exhibitions',
          description: 'Online exhibitions from Judaica at Penn Libraries',
          tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 6},
          lastUpdated: true,
          favicon: './assets/favicon.ico',
          logo: {src: './src/assets/pomegranate.svg'},

      }),





  ],

  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});