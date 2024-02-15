/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#252525",
      },
      backgroundImage: {
        linear_orange: "linear-gradient(180deg,#FFB469,#E57709)",
        linear_blue: "linear-gradient(159deg,#4EBEFF,#0679BB)",
      },
    },
  },
  plugins: [],
}
