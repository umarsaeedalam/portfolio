import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		backgroundImage: {
    			'custom-gradient': 'radial-gradient(circle, #2d2d2d 0%, #1c1c1c 60%, #0f0f0f 100%)',
    			'custom-gradient-2': 'radial-gradient(circle at 50% 50%,#3C3E44, #1F2126)',
    			'custom-gradient-3': 'radial-gradient(ellipse at 50% 50%,#3A3C41, #222429)',
    			'custom-gradient-4': 'radial-gradient(circle at 50% 50%,#2A2A31, #12121E)'
    		},
    		colors: {
    			primary: {
    				'50': '#ffffff',
    				'100': '#d6d6d8',
    				'200': '#acacb1',
    				'300': '#838389',
    				'400': '#595962',
    				'500': '#595962',
    				'600': '#43434a',
    				'700': '#2d2d31',
    				'800': '#161619',
    				'900': '#000000',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				'50': '#ffffff',
    				'100': '#fefefe',
    				'200': '#fdfdfd',
    				'300': '#fcfcfc',
    				'400': '#fbfbfb',
    				'500': '#fbfbfb',
    				'600': '#bcbcbc',
    				'700': '#7e7e7e',
    				'800': '#3f3f3f',
    				'900': '#000000',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			accent: {
    				'50': '#ffffff',
    				'100': '#fdcdcc',
    				'200': '#fc9b9a',
    				'300': '#fa6867',
    				'400': '#f83634',
    				'500': '#f83634',
    				'600': '#ba2927',
    				'700': '#7c1b1a',
    				'800': '#3e0e0d',
    				'900': '#000000',
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontSize: {
    			'13': '13px',
    			'15': '15px',
    			'17': '17px',
    			'19': '19px',
    			'21': '21px',
    			'22': '22px',
    			'23': '23px',
    			'10xl': '9rem',
    			'11xl': '10rem',
    			'12xl': '11rem',
    			'13xl': '12rem',
    			'14xl': '13rem',
    			'15xl': '14rem'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [nextui()],
};

export default config;