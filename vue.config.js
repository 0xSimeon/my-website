module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/sass/main.scss"`
      },
      scss: {
        prependData: `@import "~@/assets/sass/main.scss";`
      }
    }
  }
};
