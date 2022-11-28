/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1300px",
        // => @media (min-width: 1300px) { ... }

        xxl: "1600px",
        // => @media (min-width: 1600px) { ... }
      },
      colors: {
        primary: {
          DEFAULT: "#1d9bf0",
          hover: "#1bc5d4",
          light: "#41efff",
          wash: '#E4E6EB',
          icon: '#23d2e2'
        },
        secondary: {
          DEFAULT: "#615dfa",
          hover: "#5753e4",
        },
        body: "#f8f8fb",
        text: {
          alt: "#8f91ac",
          alt2: "#adafca",
        },
        error: "#fd4350"
      },
      backgroundImage: {
        'banner': "url('/src/assets/images/bg-default.png')",
      }
    },
  },
  plugins: [],
};
