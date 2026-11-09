/** @type {import('tailwindcss').Config} */
// 70/20/10 palette: paper (70%), blue (20%), red (10%). Ink is the neutral for text/outlines.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#f7efdc", deep: "#efe3c6" },
        comic: { DEFAULT: "#1e4fd6", dark: "#123599", light: "#dfe8ff" },
        pop: { DEFAULT: "#e0202b", dark: "#b3141d" },
        ink: "#16131f",
      },
      fontFamily: {
        display: ['"Bangers"', "Impact", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        comic: "6px 6px 0 0 #16131f",
        "comic-lg": "10px 10px 0 0 #16131f",
        "comic-sm": "3px 3px 0 0 #16131f",
      },
    },
  },
  plugins: [],
};
