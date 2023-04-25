/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        Gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        typing: {
          '40%, 60%': {
            left: 'calc(100% + 4px)',
          },
          '100%': {
            left: '0%',
          },
        },
      },
      animation: {
        Gradient: 'Gradient 15s ease infinite',
        typing: 'typing 4s steps(12) infinite',
      },
    },
  },
  plugins: [],
}
