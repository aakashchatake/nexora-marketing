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
        "brand-black": "#0B0B0B", // Deep Void
        "brand-orange": "#FF6A00", // Nexora Orange
        "brand-gray": "#A3A3A3", // Muted Text
        "brand-surface": "#141414", // Cards
        "brand-border": "#262626", // Borders
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
