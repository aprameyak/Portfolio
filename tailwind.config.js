/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9d4edd',
        'primary-light': '#c77dff',
        'primary-dark': '#7b2cbf',
        background: '#1a1625',
        surface: '#2d2438',
        'surface-light': '#3d3151',
        text: '#e2d9f3',
      },
    },
  },
  plugins: [],
} 