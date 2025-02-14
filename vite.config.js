import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@gs': path.resolve(__dirname, 'src/styles/globalStyles.css'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@mocks': path.resolve(__dirname, 'src/mocks'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@context': path.resolve(__dirname, 'src/context'),
			'@api': path.resolve(__dirname, 'src/services/api.js'),
		},
	},
})
