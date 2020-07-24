module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.md'
  ],

  theme: {
    screens: {
      xs: { max: '400px' },
      sm: { max: '600px' },
      md: { max: '900px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' }
    },

    fontFamily: {
      headingFont: ['Merriweather', 'serif'],
      textFont: ['"Roboto Slab"', 'serif']
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      button: '150px'
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
