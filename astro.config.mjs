import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import '@fontsource-variable/lora';
import starlightImageZoom from 'starlight-image-zoom';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';
import starlightFullViewMode from "starlight-fullview-mode";

import starlightScrollToTop from 'starlight-scroll-to-top';
import partytown from '@astrojs/partytown';
export default defineConfig({
  site: 'https://exhibits.judaicadhpenn.org',

  integrations: [partytown(), starlight({

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
      head: [

          {
              tag: "meta",
              attrs: {
                  name: "google-site-verification",
                  content: "I12kxjUxAiWXA-c35BszIwMeXWpZWPmVmAc629r4r4g", // paste from Search Console
              },
          },

          // 📊 Google Tag Manager (via Partytown)
          {
              tag: "script",
              attrs: { type: "text/partytown" },
              content: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TDVCXG29');
  `,
          },
      ],
  }), ],

  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});