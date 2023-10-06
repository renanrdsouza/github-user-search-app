/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-mode-light-gray": "#F6F8FF",
        "light-mode-white": "#FEFEFE",
        "light-and-dark-mode-blue-one": "#0079FF",
        "light-mode-gray": "#697C9A",
        "light-mode-blue-two": "#4B6A9B",
        "light-mode-blue-three": "#2B3442",
        "dark-mode-white": "#FFFFFF",
        "dark-mode-black": "#141D2F",
        "dark-mode-dark-gray": "#1E2A47"
      },
      fontFamily: {
        "space-mono": ["space-mono"]
      },
      fontSize: {
        "custom-h1": "26px",
        "custom-h2": "22px",
        "custom-h3": "16px",
        "custom-h4": "13px",
        "custom-body": "15px"
      },
      lineHeight: {
        "custom-line-height": "25px"
      }
    },
  },
  plugins: [],
}

