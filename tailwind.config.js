/** @type {import('tailwindcss').Config} */
export default {
  content: [".public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "18px": "18px",
        "30px": "30px",
      },
      colors: {
        primHue: "#0AAFFF",
        borderGrey: "#BCC3D3",
        buttonText: "#495D80",
        heroColor: "#7751e9",
      },
    },
  },
  plugins: [],
};
