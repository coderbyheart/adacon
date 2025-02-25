import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import ssr from 'vike/plugin'
import { homepage, version } from './siteInfo'

// https://vitejs.dev/config/
// biome-ignore lint/style/noDefaultExport: needed by vite
export default defineConfig({
	plugins: [
		preact(),
		ssr({
			prerender: true,
			includeAssetsImportedByServer: true,
		}),
	],
	base: `${(process.env.BASE_URL ?? '').replace(/\/+$/, '')}/`,
	preview: {
		host: 'localhost',
		port: 8080,
	},
	server: {
		host: 'localhost',
		port: 8080,
	},
	resolve: {
		alias: [
			{ find: '#components/', replacement: '/src/components/' },
			{ find: '#context/', replacement: '/src/context/' },
			{ find: '#utils/', replacement: '/src/utils/' },
			{ find: '#page/', replacement: '/src/page/' },
		],
	},
	build: {
		outDir: './build',
		sourcemap: true,
	},
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
	// string values will be used as raw expressions, so if defining a string constant, it needs to be explicitly quoted
	define: {
		HOMEPAGE: JSON.stringify(homepage),
		VERSION: JSON.stringify(version),
		BUILD_TIME: JSON.stringify(new Date().toISOString()),
	},
})
