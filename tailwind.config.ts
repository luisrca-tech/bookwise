import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
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
