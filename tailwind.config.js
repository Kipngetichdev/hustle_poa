module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006A4E",
        accent: "#F9C80E",
        foreground: "#1A1A1A",
        background: "#FFFFFF",
        secondary: "#F5F5F5",
        "muted-foreground": "#4B5563",
        "accent-foreground": "#1A1A1A",
        "primary-foreground": "#FFFFFF",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
};