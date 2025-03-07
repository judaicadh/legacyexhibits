// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
// https://astro.build/config
export default defineConfig({
	site: 'https://judaicadh.github.io',
	base: 'legacyexhibits',
	integrations: [
		starlight({
			plugins: [starlightImageZoom({
				showCaptions: true,
				}),

			],
			title: 'Exhibits',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			social: {
				github: 'https://github.com/judaicadh/legacyexhibits',
			},
			sidebar: [
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},*/
				{
					label: 'Exhibits',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
