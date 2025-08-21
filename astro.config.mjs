import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import '@fontsource-variable/lora';
import starlightImageZoom from 'starlight-image-zoom';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';
import starlightFullViewMode from "starlight-fullview-mode";
import starlightDocSearch from '@astrojs/starlight-docsearch';

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
              starlightDocSearch({
                  appId: 'UJJJL37FU2',
                  apiKey: env.ALGOLIA_API_KEY,
                  indexName: 'netlify_0f6ccc57-e165-481b-87f3-cae3f343dfcd_main_all',
              }),
          ],
          title: 'Judaica Exhibitions',
          description: 'Online exhibitions from Judaica at Penn Libraries',
          tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 6},
          lastUpdated: true,
          logo: {src: './src/assets/pomegranate.svg'},

      }),





  ],

  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});