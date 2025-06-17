/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3BE4", 
        "primary-foreground": "#ffffff",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff", 
      },
      fontFamily: {
        sans: ["Inter", 'sans-serif'],
        sora: ["Sora", 'sans-serif'],
        anybody: ["Anybody", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
