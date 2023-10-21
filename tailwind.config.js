/** @type {import('tailwindcss').Config} */
export default {
  content: [".public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sansita: 'Sansita',
        inter: 'Inter', 
      },
      colors:{
        borderColor:"#e6e9f0",
        searchBg:"#f8f9fc",
        textColor:"#8392A5",
        textHover:"#0AAFFF",
        loginBg: "#0AAFFF",
        footerBg:"#06061d"
        // loginBg:"radial-gradient(107.08% 85.59% at 86.3% 87.5%, rgba(47, 43, 50, 0.23) 0%, rgba(0, 0, 0, 0.00) 86.18%), radial-gradient(83.94% 83.94% at 26.39% 20.83%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0.00) 69.79%, rgba(255, 255, 255, 0.00) 100%), #0AAFFF"

        
      }
    },
  },
  plugins: [],
};
