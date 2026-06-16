/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          500: '#1f8fff',
          600: '#0f73d9',
          700: '#0b5daf',
        },
      },
      boxShadow: {
        soft: '0 16px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
