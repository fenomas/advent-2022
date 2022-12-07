
import { svelte } from '@sveltejs/vite-plugin-svelte'

/** @type {import('vite').UserConfig} */
export default {

	base: './',
	root: 'src/',
	publicDir: 'static',

	plugins: [svelte()],

	server: { port: 8080, },
	build: {
		target: 'es2020',
		outDir: '../docs',             // relative to root!
		emptyOutDir: true,              // since it's outside root
		minify: true,
	},

	clearScreen: false,
	logLevel: 'info',
}

