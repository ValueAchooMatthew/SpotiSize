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
    screens:{
      "xs": "480px",
      // => @media (min-width: 440px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '940px',
      // => @media (min-width: 940px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }


    },
    extend: {
      colors: {
        yellow: "#F9DB85",
        purple: "#9F8BFF",
        backPurple: "#0E0149",
        fontBlue: "#E2F4F3",
        lightPurple: "#9F8BFF", 
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
