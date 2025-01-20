import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ca3634',
					light: '#990000',
					dark: '#79201f'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
