/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        softorange: "#FFCE8A",
        softred: "#F15E50",
        offwhite: "#FFFDFA",
        grayishblue: "#C5C6CE",
        darkgrayishblue: "#5D5F79",
        verydarkblue: "#00001A",
      },

      fontFamily: {
        inter: "Inter",
      },

      screens: {
        mobile: "375px",
        desktop: "1440px",
      },

      fontSize: {
        p: "15px",
      },
    },
  },
  plugins: [],
};
