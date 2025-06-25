/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover:   '#2a004a',
        darkTheme:   '#11001F',
      },
      fontFamily: {
        ovo:    ['Ovo', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
    },
  },
  plugins: [],
};
