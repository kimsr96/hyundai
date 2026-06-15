import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hyundai: {
          blue: "#002C5F",
          "blue-mid": "#00438F",
          "blue-light": "#0055A5",
          silver: "#A8ACAF",
          "gray-bg": "#F4F5F7",
          "gray-border": "#E0E1E3",
        },
      },
      fontFamily: {
        sans: ["Inter", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
