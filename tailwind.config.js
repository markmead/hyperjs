/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.jsx', './src/**/*.jsx', './public/**/*.html'],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.15s ease-in forwards',
        'slide-out': 'slide-out 0.15s ease-in forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
}
