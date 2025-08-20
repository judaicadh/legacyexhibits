import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import '@fontsource-variable/lora';
import starlightImageZoom from 'starlight-image-zoom';
import netlify from '@astrojs/netlify';

export default defineConfig({
    site: 'https://exhibits.judaicadhpenn.org',

    integrations: [
        starlight({
            customCss: [
                './src/styles/tailwind.css',
                '@fontsource-variable/lora',
            ],
            plugins: [
                starlightImageZoom({ showCaptions: true }),
            ],
            title: 'Judaica Exhibitions',
            description: 'Online exhibitions from the Library at the Herbert D. Katz Center for Advanced Judaic Studies',
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
            lastUpdated: true,
            logo: { src: './src/assets/pomegranate.svg' },
            social: { github: 'https://github.com/judaicadh/legacyexhibits' },
            sidebar: [
                { label: 'Exhibits', autogenerate: { directory: 'reference' } },
            ],

            // ✅ FIX: pagefind must be an object, not an array
            pagefind: {
                // optional global tuning
                ranking: { pageLength: 0.7, termFrequency: 1.0, termSaturation: 0.9, termSimilarity: 1.0 },

                // pull the main site index into this site’s search
                mergeIndex: [
                    {
                        bundlePath: 'https://judaicadhpenn.org/pagefind/',
                        baseUrl: 'https://judaicadhpenn.org',
                        indexWeight: 1.0,
                        mergeFilter: { site: 'Main' },
                        language: 'en',
                    },
                ],
            },
        }),

        tailwind({ applyBaseStyles: false }),
    ],

    adapter: netlify(),
});