module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'square': ['Nova Square', 'Helvetica', 'Arial', 'sans-serif'],
        'sans': ['Noto Sans TC', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: "#6F0707",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
