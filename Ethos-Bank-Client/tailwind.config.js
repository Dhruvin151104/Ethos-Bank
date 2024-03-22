/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main-theme':"#F4F8FF"
      },
      backgroundImage:{
        'test1':"url('./Ethos-Bank/src/assets/test1.jpg')"
      }
    },
  },
  plugins: [],
}

