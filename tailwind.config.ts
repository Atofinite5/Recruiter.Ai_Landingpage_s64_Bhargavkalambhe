import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        script: ['var(--font-caveat)', 'cursive'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#240029',
          'purple-light': '#3a0045',
        },
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          darker: '#1D4ED8',
        },
        accent: {
          sky: '#A5D8FF',
          lavender: '#D0BCFF',
          purple: '#B197FC',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'blue-glow': '0 4px 16px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
