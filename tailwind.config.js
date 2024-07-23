/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '-8px 8px 0 #000000',
      },
      translate: {
        'custom-x': '4px',
        'custom-y': '-4px',
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
      boxShadow: ['hover'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
