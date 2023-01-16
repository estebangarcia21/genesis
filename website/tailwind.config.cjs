/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: '"Readex Pro", sans-serif',
        paragraph: '"Karla", sans-serif',
        mono: "'Jetbrains Mono', monospace"
      },
      colors: {
        softgrayText: 'hsl(0deg, 0%, 80%)',
        softgray: 'hsl(240deg, 6%, 7%)',
        softgrayModal: 'hsl(240deg, 6%, 7%)',
        softgrayInput: 'hsl(240deg, 6%, 7.8%)',
        softgrayInputText: 'hsl(240deg, 5%, 75%)',
        softgrayInputPlaceholder: 'hsl(240deg, 5%, 15%)',
        softgrayBorder: '#1b1b1b'
      }
    }
  },
  plugins: []
};
