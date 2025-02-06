import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      screens: {
        xs: "480px",
        xxs: "320px",
      },
      animation: {
        wave: "wave 1.5s infinite ease-in-out",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
