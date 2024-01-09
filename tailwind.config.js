/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#f5f7f8",
          100: "#dee3e9",
          200: "#bcc7d3",
          300: "#93a2b5",
          400: "#6d7c94",
          500: "#536179",
          600: "#404c61",
          700: "#363f4f",
          800: "#2e3541",
          900: "#2a2d37",
          950: "#0e1015",
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
