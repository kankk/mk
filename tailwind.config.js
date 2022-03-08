module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        mini: '500px',
        small: '600px',
        normal: '800px',
        large: '1200px',
        full: '100%'
      },
      opacity: {
        '45': '0.45',
        '85': '0.85',
      },
    },
  },
  plugins: [],
};
