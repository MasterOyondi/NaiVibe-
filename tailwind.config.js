/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#08080C",
        card: "#101014",
        "card-2": "#16161C",
        border: "#1F1F28",
        "border-2": "#2A2A36",
        muted: "#52526A",
        subtle: "#8A8AA8",
        "brand-purple": "#7B5CF0",
        "brand-green": "#00D97E",
        "brand-gold": "#FFB830",
        "brand-red": "#FF4567",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};