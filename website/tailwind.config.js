const colors = require('tailwindcss/colors');
const screenBreakpoints = require('./utils/screenBreakpoints');

module.exports = {
  mode: 'JIT',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss,sass}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        blueA: '#200AAD',
        blueB: '#5338FF',
        blueC: '#3B1EFA',
        yellowA: '#AD9600',
        yellowB: '#FADD1E',
        blueGray: '#333'
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace']
      }
    },
    screens: transformScreenBreakPoints(screenBreakpoints)
  },
  plugins: []
};

function transformScreenBreakPoints(bps) {
  const transformed = {};

  for (const key of Object.keys(bps)) {
    transformed[key] = `${bps[key]}px`;
  }

  return transformed;
}
