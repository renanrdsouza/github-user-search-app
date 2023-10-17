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
        "custom-h2.5": "18px",
        "custom-h2": "22px",
        "custom-h3": "16px",
        "custom-h4": "13px",
        "custom-body": "15px"
      },
      lineHeight: {
        "custom-line-height": "25px"
      },
      maxWidth: {
        "custom-mobile": "23.438rem",
        "custom-tablet": "35.813rem",
        "custom-desktop": "45.625rem"
      },
      maxHeight: {
        "custom-mobile": "48.563rem",
        "custom-tablet": "30.063rem",
        "custom-desktop": "27.75rem"
      },
      width: {
        "17": "4.375rem",
        "30": "7.313rem",
        "search-input": "20.438rem",
        "search-button": "5.25rem",
        "search-input-tablet": "35.813rem",
        "search-input-desktop": "45.625rem",
        "infos-card-mobile": "20.438",
        "personal-infos-desktop": "30rem"
      },
      height: {
        "17": "4.375rem",
        "30": "7.313rem",
        "search-input": "3.75rem",
        "search-button": "2.875rem",
        "infos-card-mobile": "32.313"
      },
      margin: {
        "3.5": "1.063rem",
        "7": "2.125rem"
      },
      padding: {
        "12.5": "3.063rem"
      },
      backgroundImage: {
        "search-logo": "url('./src/assets/icon-search.svg')"
      },
      transformOrigin: {
        "-translate-y-13": "3.375rem"
      },
      flexGrow: {
        "2": "2"
      },
      gap: {
        "3": "0.813rem"
      }
    },
  },
  plugins: [],
}

