import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import '@fontsource-variable/lora';
import starlightImageZoom from 'starlight-image-zoom';
export default defineConfig({
	site: 'https://judaicadh.github.io',
	base: '/legacyexhibits',
	integrations: [

		starlight({
			customCss: [
				'./src/styles/tailwind.css',
				'@fontsource-variable/lora',
			],
			plugins: [
				starlightImageZoom({
					showCaptions: true,
				}),
			],
			title: 'Judaica Exhibitions',
			description: 'Online exhibitions from the Library at the Herbert D. Katz Center for Advanced Judaic Studies',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			lastUpdated: true,
			social: {
				github: 'https://github.com/judaicadh/legacyexhibits',
			},
			sidebar: [
				{
					label: 'Exhibits ',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false, // Keeps Tailwind from overriding base styles
		}),
	],
});