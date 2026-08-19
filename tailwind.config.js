/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finova: {
          navy: '#0B1B3D',
          blue: '#1A4FBA',
          green: '#00C853',
          lightBlue: '#E8F1FF',
          lightGreen: '#E6F9EC',
          gray: '#4B5563',
          bg: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
