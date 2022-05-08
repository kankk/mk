module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        mini: '600px',
        small: '700px',
        normal: '800px',
        large: '1200px',
      },
      opacity: {
        45: '0.45',
        85: '0.85',
      },
    },
  },
  plugins: [],
};
