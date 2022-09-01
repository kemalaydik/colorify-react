/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.{js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle .15s ease-in-out infinite'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)', transformOrigin: '-5% -10%' },
					'50%': { transform: 'rotate(3deg)' }
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
