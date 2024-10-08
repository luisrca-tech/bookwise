/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      black: "rgb(var(--black) / <alpha-value>)",
      green: {
        100: "rgb(var(--green-100) / <alpha-value>)",
        200: "rgb(var(--green-200) / <alpha-value>)",
        300: "rgb(var(--green-300) / <alpha-value>)",
      },
      purple: {
        100: "rgb(var(--purple-100) / <alpha-value>)",
        200: "rgb(var(--purple-200) / <alpha-value>)",
      },
      gray: {
        100: "rgb(var(--gray-100) / <alpha-value>)",
        200: "rgb(var(--gray-200) / <alpha-value>)",
        300: "rgb(var(--gray-300) / <alpha-value>)",
        400: "rgb(var(--gray-400) / <alpha-value>)",
        500: "rgb(var(--gray-500) / <alpha-value>)",
        600: "rgb(var(--gray-600) / <alpha-value>)",
        700: "rgb(var(--gray-700) / <alpha-value>)",
        800: "rgb(var(--gray-800) / <alpha-value>)",
      },
      gradient: {
        100: "rgb(var(--gradient-100) / <alpha-value>)",
        200: "rgb(var(--gradient-200) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
    },
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      screens: {
        "2xl": "87.5rem",
        "3xl": "100rem",
      },
    },
    keyframes: {
      "accordion-down": {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
