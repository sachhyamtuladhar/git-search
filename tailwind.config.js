module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      HubotSans: ["'Hubot Sans'", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s both",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
      },
    },
  },
  plugins: [],
};
