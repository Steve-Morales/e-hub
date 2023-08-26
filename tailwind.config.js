/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump_in: {
          '0%':    { scale: '0' },
          '33%':   { scale: '1.1' },
          // '66%':   { scale: '0.8' },
          '100%':  { scale: '1' },
        },
        jump_out: {
          '0%':    { scale: '1' },
          '25%':   { scale: '1.1' },
          '100%':  { scale: '0' },
        },
      },
      animation:{
        'jump-in' : 'jump_in 1s',
        'jump-out' : 'jump_out 1s',
      }
    },
  },
  plugins: [],
}

