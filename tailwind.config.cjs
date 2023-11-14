/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const {iconsPlugin, getIconCollections} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    colors: {
      primary: "#757AE9",
      positive: "#6CCB4B",
      negative: "#CB4B4B",
      warning: "#FBC61E",
      orange: "#EEB728",
      purpule: "#BF51C1",
      cyan: "#51C1C1",
      white: "#fff",
      black: "#000",
      text: "#282B42",
      title: "#6E58F1",
      border: "#E1E3EF",
      table: "#E9EBF9",
      "table-text": "#686B8A",
      "menu-active": "rgba(117, 122, 233, 0.10)",
      icon: "#8284AD",
      "dark-blue": "#00056A",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      spacing: {},
      borderRadius: {
        base: "3px",
        md: "4px",
      },
      boxShadow: {
        table: " 0px 2px 10px 0px rgba(20, 20, 20, 0.05)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(["mdi"]),
    }),
  ],
};
