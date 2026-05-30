import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

export default defineConfig({
	base: '/',
	plugins: [
		react(),
		tailwindcss(),
		babel({ presets: [reactCompilerPreset()] }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@layout': path.resolve(__dirname, './src/components/layout'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@sections': path.resolve(__dirname, './src/sections'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@data': path.resolve(__dirname, './src/data'),
			'@types': path.resolve(__dirname, './src/types'),
			'@context': path.resolve(__dirname, './src/context'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
})
