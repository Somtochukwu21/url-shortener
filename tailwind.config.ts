import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			maxWidth: {
				custom: "1235px",
			},
			colors: {
				gray: "hsl(0, 0%, 75%)",
				"very-dark-blue": "hsl(255, 11%, 22%)",
				"grayish-violet": "hsl(257, 7%, 63%)",
			},
			borderColor: {
				cyan: "hsl(180, 66%, 49%)",
			},
			backgroundColor: {
				cyan: "hsl(180, 66%, 49%)",
				"dark-violet": " hsl(257, 27%, 26%)",
				"very-dark-blue": "hsl(255, 11%, 22%)",
				"very-dark-violet": "hsl(260, 8%, 14%)",
				"grayish-violet": "#EFF1F7",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [nextui()],
};
export default config;
