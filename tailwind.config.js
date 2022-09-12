module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#1b1c1d'
      },
      minWidth: {
        'story': '4.25rem'
      },
      height: {
        'story': '4.25rem',
        'categ': '5.4rem'
      },
      maxWidth: {
        'story': '4.25rem',
        'categ': '5.4rem'
      }
    },
  },
  plugins: [],
}
