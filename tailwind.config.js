/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'primary': '#007dff',
            'secondary': '#004377',
            'accent': '#fdbe00',
            'custom-black': '#101010',
            'custom-white': '#fcfeff',
            'custom-navy': '#141d32',
        },
        backgroundImage: {
            'hero-pattern': "url('../images/background.png')",
            'bg-2': "url('../images/background-2.png')",
            'bg-3': "url('../images/background-3.png')",
            'primary-gradient': "linear-gradient(to right, #fdbe00, #007dff)",
            'primary-gradient-hover': "linear-gradient(to right, #007dff, #fdbe00)",
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        fontSize: {
            'heading-64': ['64px', 'auto'],
            'heading-30': ['30px', 'auto'],
            'heading-35': ['35px', '24px'],
            'heading-20': ['20px', '24px'],
            'para-16': ['16px', '24px'],
            'para-14': ['14px', '24px'],
            'para-29': ['29px', 'auto'],
        },
    },
},
  plugins: [],
} 