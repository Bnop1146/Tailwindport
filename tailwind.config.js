/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        // ...
        'primary': {
          secondary: '#FF9705',
          main: '#001023',
          darktext: '#212427',
          Git: '#333',
          In: '#0077b5',
          
          
          
        },

    },
  },
  plugins: [],
}
  // ...
}
