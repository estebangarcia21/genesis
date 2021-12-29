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
        blueA: '#200AAD',
        blueB: '#5338FF',
        blueC: '#3B1EFA',
        yellowA: '#AD9600',
        yellowB: '#FADD1E',
        blueGray: '#333'
      },
      fontFamily: {
        mono: ['"Jetbrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
