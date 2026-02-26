// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://devify.me',
	integrations: [
		starlight({
			title: 'Devify',
			logo: {
				dark: './src/assets/branding/devify-hz-colorFont.svg',
				light: './src/assets/branding/devify-hz-colorFont.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/devify-me/devify' },
			],
			customCss: [
				'./src/styles/fonts.css',
				'./src/styles/starlight-custom.css',
			],
			expressiveCode: {
				themes: ['one-dark-pro'],
				styleOverrides: {
					borderRadius: '0.5rem',
				},
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/quick-start' },
						{ slug: 'getting-started/project-structure' },
						{ slug: 'getting-started/local-development' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ slug: 'architecture/overview' },
						{ slug: 'architecture/kernel-interfaces' },
						{ slug: 'architecture/modules' },
						{ slug: 'architecture/adapters' },
						{ slug: 'architecture/eventbus' },
					],
				},
				{
					label: 'Module Development',
					items: [
						{ slug: 'module-development/creating-a-module' },
						{ slug: 'module-development/module-structure' },
						{ slug: 'module-development/routes-and-handlers' },
						{ slug: 'module-development/services' },
						{ slug: 'module-development/repositories' },
						{ slug: 'module-development/migrations' },
						{ slug: 'module-development/events' },
						{ slug: 'module-development/middleware' },
						{ slug: 'module-development/module-communication' },
					],
				},
				{
					label: 'Built-in Modules',
					items: [
						{ slug: 'built-in-modules/auth' },
						{ slug: 'built-in-modules/rbac' },
						{ slug: 'built-in-modules/tenant' },
						{ slug: 'built-in-modules/billing' },
						{ slug: 'built-in-modules/notification' },
						{ slug: 'built-in-modules/apikey' },
						{ slug: 'built-in-modules/webhook' },
						{ slug: 'built-in-modules/audit' },
						{ slug: 'built-in-modules/pwa' },
					],
				},
				{ label: 'CLI Reference', slug: 'cli-reference' },
				{
					label: 'Configuration',
					items: [
						{ slug: 'configuration/toml-file' },
						{ slug: 'configuration/environment-variables' },
						{ slug: 'configuration/module-config' },
					],
				},
				{
					label: 'Database Guide',
					items: [
						{ slug: 'database-guide/postgresql' },
						{ slug: 'database-guide/mysql' },
						{ slug: 'database-guide/sqlite' },
						{ slug: 'database-guide/mongodb' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ slug: 'deployment/building' },
						{ slug: 'deployment/docker' },
					],
				},
			],
		}),
	],
});
