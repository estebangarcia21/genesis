/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: '"Poppins", sans-serif',
        paragraph: '"Karla", sans-serif',
        mono: "'Jetbrains Mono', monospace"
      }
    }
  },
  plugins: []
};
