/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#252525",
        ct_8888: "#888888",
      },
      backgroundImage: {
        linear_orange: "linear-gradient(180deg, #FFB469 0%, #E57709 100%)",
        linear_blue: "linear-gradient(135deg, #4EBEFF 0%, #0679BB 100%)",
        linear_green: "linear-gradient(135deg, #2891CC 0%, #0A9949 100%)",
      },
      boxShadow: {
        custom: "0px 8px 40px rgba(0, 0, 0, 0.15)",
        custom2: "0px 10px 24px rgba(40, 145, 204, 0.5)",
        custom3: "0px 0px 40px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
