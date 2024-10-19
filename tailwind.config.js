/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#d3e2b4',
        brown: '#363020',
        green: '#3A7D44',
        black: '#28282B',
        white: '#FAF9F6'
      },
      fontFamily: {
        kalpanaAnsi: ['KalpanaAnsi', 'sans-serif'],
        kalpanaUnicode: ['KalpanaUnicode', 'sans-serif']
      }
    },
  },
  plugins: [],
}