/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chat: {
          bg: '#1A2B5B',        /* основной глубокий синий фон */
          icon: '#2F437B',       /* фон иконки и круга микрофона */
          bar: '#B8C5D6',        /* светлый серо-синий фон поля ввода */
          barPlaceholder: '#6B7B8C',
        },
      },
    },
  },
  plugins: [],
};
