import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#1C185F',
          600: '#3730A3',
          500: '#5454CD',
          400: '#817EDD',
          300: '#AAA8E9',
          200: '#DAD3FE',
          100: '#F0F0FB',
        },
        gray: {
          600: '#232328',
          100: '#d5d5d8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config