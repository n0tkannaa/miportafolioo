import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0b0e14",
          card: "#131822",
          light: "#fafaf9",
        },
        accent: {
          DEFAULT: "#f59e0b",
          secondary: "#14b8a6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
