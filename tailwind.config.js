/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary_color: "#212121",
        text_primary: "#eeedde",
        text_secondary: "#a4a4a4",
      },
      boxShadow: {
        custom: "4px 4px 10px #141414,-4px -4px 10px #2e2e2e",
        neumorphism: "5px 5px 7px #1c1c1c, -5px -5px 7px #262626",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Poppins", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
