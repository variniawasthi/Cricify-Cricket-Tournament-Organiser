/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        bgSecond: "#eaebf2",
        primary: "#229799",
        primaryLight: "#48CFCB",
        accent: "#424242",
        textPrimary: "#151515",
        textSecondary: "#828282",
        textMuted: "#393939",
        linkColor: "#229799",
        success: "#4caf50",
        warning: "#ff9800",
        error: "#f44336",
        info: "#2196f3",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.s ease-in-out forwards",
        fadeOut: "fadeOut 0.3s ease-in-out forwards",
      },
      backgroundImage: {
        "dashboard-bg": "url('/Background1.jpg')",
        "tournament-bg": "url('/Background.jpg')",
      },
      screens: {
        "sm-custom": { max: "650px" },
      },
      boxShadow: {
        "smooth-red": "0 8px 20px rgba(255, 0, 0, 0.4)",
        "black-shadow": "0 8px 20px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
