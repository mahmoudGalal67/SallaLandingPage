/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // main_color: '#004956',
        main_color: '#086cba',
       //086cba 
        secondary_color: '#76e8cd',
        light_secondary_color: '#d4f2fc',
      },
      fontFamily: {
        Main_font: ['Cairo'],
     
      },
    },
  },
  plugins: [
    
    require('flowbite/plugin')
  ],
}