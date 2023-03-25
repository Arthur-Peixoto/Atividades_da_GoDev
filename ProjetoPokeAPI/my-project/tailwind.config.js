/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        primary:'var(--color-bg-primary)',
        btn:'var(--color-bg-btn)',
      },
      textColor:{
        primary: 'var(--color-text-primary)',
      },

    },
  },
  plugins: [],
}
