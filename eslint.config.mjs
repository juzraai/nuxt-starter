import tailwind from 'eslint-plugin-tailwindcss';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
	...tailwind.configs['flat/recommended'],
	{
		rules: {
			'no-var': 'error',
			'prefer-const': 'error',
			'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
			'vue/padding-line-between-blocks': ['error', 'always'],
		},
	},
]);
