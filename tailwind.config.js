/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor:'#2d3748',
        primary: '#4a5568',
        secondary: '#cbd5e0',
        accent: '#F13024',
        third: ' #a0aec0',
      },
      fontFamily: {
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
