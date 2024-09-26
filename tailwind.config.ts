import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      white: 'rgb(var(--white) / <alpha-value>)',
      black: 'rgb(var(--black) / <alpha-value>)',
      green: {
        100: 'rgb(var(--green-100) / <alpha-value>)',
        200: 'rgb(var(--green-200) / <alpha-value>)',
        300: 'rgb(var(--green-300) / <alpha-value>)',
      },
      purple: {
        100: 'rgb(var(--purple-100) / <alpha-value>)',
        200: 'rgb(var(--purple-200) / <alpha-value>)',
      },
      gray: {
        100: 'rgb(var(--gray-100) / <alpha-value>)',
        200: 'rgb(var(--gray-200) / <alpha-value>)',
        300: 'rgb(var(--gray-300) / <alpha-value>)',
        400: 'rgb(var(--gray-400) / <alpha-value>)',
        500: 'rgb(var(--gray-500) / <alpha-value>)',
        600: 'rgb(var(--gray-600) / <alpha-value>)',
        700: 'rgb(var(--gray-700) / <alpha-value>)',
        800: 'rgb(var(--gray-800) / <alpha-value>)',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)']
      },
      screens: {
        '2xl': '87.5rem',
        '3xl': '100rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
