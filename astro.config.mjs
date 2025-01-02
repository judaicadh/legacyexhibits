// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
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
