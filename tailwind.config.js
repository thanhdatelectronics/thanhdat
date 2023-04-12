module.exports = {
  content: ["./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color-basic": "#C9EEFF",
        "color-footer": "#f1f1f1",
        "text-color": "black",
        "color-title": "#6698FF",
        "color-card": "#FFF",
        "color-button": "#6698FF ",
        "text-cl": "#fff",
        "text-footer": "#205aa7",
        "color-nav": "rgba(255, 255, 255, 0.9)",
        "text-nav": "#205aa7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
