/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      content: {
        'arrow-white': 'url("/icons/arrow-white.svg")',
        'arrow-blue': 'url("/icons/arrow-blue.svg")',
      },
      colors: {
        base: {
          pure: '#E8EDF3',
          200: '#989EA7'
        },
        functional: {
          pure: '#33A6BA',
        },
        danger: {
          pure: '#FF7B92',
        },
      },
    },
  },
  plugins: [],
}
