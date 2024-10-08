// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-08-12',
	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	modules: ['@nuxt/eslint'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
