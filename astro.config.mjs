import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	site: 'https://judaicadh.github.io',
	base: '/legacyexhibits',
	integrations: [

		starlight({
			customCss: ['./src/styles/tailwind.css', '@fontsource-variable/lora' ],
			plugins: [
				starlightImageZoom({
					showCaptions: true,
				}),
			],
			title: 'Exhibits',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			social: {
				github: 'https://github.com/judaicadh/legacyexhibits',
			},
			sidebar: [
				{
					label: 'Exhibits',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false, // Keeps Tailwind from overriding base styles
		}),
	],
});