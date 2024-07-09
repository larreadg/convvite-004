/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#948474',
          DEFAULT: '#948474',
        },
        secondary: {
          light: '#594840',
          DEFAULT: '#594840',
        },
        light: {
          background: '#FAF2E9',
        },
      },
      fontFamily: {
        howell: ['Howell', 'sans-serif'],
        brotherhood: ['Brotherhood', 'sans-serif'],
        sukar: ['Sukar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

