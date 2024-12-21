/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4169e1",
        secondary: "#6787e7",
        dark: "#212121",
        dim: "#333333",
      },
    },
  },
  plugins: [],
};

//new #5478e4  #6787e7
//old F26739