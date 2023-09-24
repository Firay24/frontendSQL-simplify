/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'basic-blue': '#1687A7',
        'blue-dark': '#276678',
        'basic-grey': '#2E3646',
        'grey-light': '#5F6D7E',
        'gray-soft': '#F6F5F5',
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

