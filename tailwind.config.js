/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F9DB85",
        purple: "#9F8BFF",
        backPurple: "#0E0149",
        fontBlue: "#E2F4F3",
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
