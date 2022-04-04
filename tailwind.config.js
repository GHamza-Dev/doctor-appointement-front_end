module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        gradientColorStops: theme => ({
          'white':'#ffffff',
          'blue': '#1fb6ff',
        }),
      },
      colors: {
        'white':'#ffffff',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'primary':'#496bf2',
        'secondary':'#2DD6C1',
      },
    },
  },
  plugins: [],
}
