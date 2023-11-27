/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-default": "#F9EED9",
        "primary-dark": "#D7CCB6",
        "secondary-default": "#F89726",
        "secondary-dark": "#D27D1A",
        background: "#1B1A18",
        foreground: "#DAD8D4",
        "foreground-dark": "#B5B3B1",
      },
    },
  },
  plugins: [],
};
