/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000112",
        gray: {
          100: "#F4F7FD",
          200: "#E4EBFA",
          300: "#828FA3",
          400: "#3E3F4E",
          500: "#2B2C37",
          600: "#20212C",
        },
        red: {
          100: "#FF9898",
          200: "#EA5555",
        },
        purple: {
          100: "#A8A4FF",
          200: "#635FC7",
        },
      },
    },
    plugins: [],
  },
};
