/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#00e5ff",
          dim: "#00e5ff80",
          faint: "#00e5ff18",
          ghost: "#00e5ff0a",
        },
      },
      fontFamily: {
        serif: ["'Fraunces'", "serif"],
        sans: ["'Outfit'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
