/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.{js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				grow: 'grow .5s ease-in-out 1s'
			}
		},
		keyframes: {
			grow: {
				'0%': { transform: 'scale(1) translateY(-50%)', opacity: 0 },
				'100%': { transform: 'scale(2) translateY(-50%)', opacity: 1 }
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
