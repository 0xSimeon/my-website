module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.md'
  ],
  theme: {
    screen: {
      xs: { max: '300px' },
      sm: { max: '768px' },
      md: { max: '900px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' }
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
