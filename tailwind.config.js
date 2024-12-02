/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all your component files are included
  ],
  theme: {
    extend: {
      fontFamily: { 'mono': ['Space Mono', 'monospace'], },
    },
  },
  plugins: [],
}
