/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-taupe': '#DDD0C9',
        'sandstone-beige': '#E8E2D2',
      },
    },
  },
  plugins: [require("daisyui")],
}

