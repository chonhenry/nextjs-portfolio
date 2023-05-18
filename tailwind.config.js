/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "810px",
        lg: "1440px",
        // xl: "1440px",
      },
      colors: {
        black: "#141414",
        "light-yellow": "#FFFCEF",
        orange: "#FE8E1C",
        white: "#FFFFFF",
        "light-brown": "#ECE5CC",
        "light-green": "#D2DFD4",
        "light-orange": "#FFD466",
      },
      fontFamily: {
        // sans: ["Graphik", "sans-serif"],
        // serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        // width: "width",
      },
      keyframes: {
        move: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        move: "move 20s linear infinite",
      },
    },
  },
  plugins: [],
};
