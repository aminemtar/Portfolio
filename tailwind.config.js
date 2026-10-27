/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#edf5ff",
      secondary: "#536d88",
      tertiary: "#ffffff",
      "black-100": "#dcecff",
      "black-200": "#cfe4fa",
      "white-100": "#36516e",
    },
    boxShadow: {
      card: "0px 20px 55px -18px #7198c255",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];