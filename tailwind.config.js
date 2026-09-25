/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0e0f13",
        panel: "#161821",
        border: "#252836",
        accent: "#7c5cff",
        strength: "#ff6b6b",
        agility: "#54e6a4",
        intelligence: "#4d9dff",
      },
    },
  },
  plugins: [],
}
