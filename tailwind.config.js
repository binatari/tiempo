/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'mid-xs': '400px',
      'sm': '480px',
      'mid-sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mid-xl': '1280px',
      'xl': '1440px',
      'xxl': '1536px',
      'xxxl': '1920px',
      'mobile': {
        min: '320px',
        max: '479px'
      },
      'lsc-mob': {
        min: '720px',
        max: '820px'
      }
    },
    extend: {
      backgroundImage: {
        paint: "url('../src/assets/HomePageImg/StrapsImg/bg.png')",
      },
    },
  },
  plugins: [],
}
