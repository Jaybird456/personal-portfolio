/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-black' : '#161a1d',
        'light-white': '#f5f3f4',
        'brown-gray' : '#b1a7a6',
        'light-gray' : '#d3d3d3',
        'light-red' : '#e5383b'
      },
      screens:{
        'llg' : '1100px',
      },
    },
  },
  plugins: [],
}

