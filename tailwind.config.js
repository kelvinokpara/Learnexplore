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
        footerBg:"#06061d",
        primHue: "#0AAFFF",
        borderGrey: "#BCC3D3",
        buttonText: "#495D80",
        heroColor: "#7751e9",
        

        
      },
      padding: {
        "18px": "18px",
        "30px": "30px",
      },
      
    },
  },
  plugins: [],
};
