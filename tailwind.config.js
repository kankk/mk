module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        content: '800px',
      },
      opacity: {
        '45': '0.45',
        '85': '0.85',
      },
    },
  },
  plugins: [],
};
