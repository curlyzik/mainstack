/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["Söhne", "sans-serif"],
      },
      colors: {
        mainstackDark: "#131316",
        mainstackOrange: {
          primary: "#FF5403",
          secondary: "#FFEEE5",
        },
        mainstackGrey: "#31373D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
