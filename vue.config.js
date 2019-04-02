
const path = require('path');

module.exports = {

  lintOnSave: false,
// outputDir: 'dist',
//a ssetsDir: 'vest/comp/assets',
// indexPath: 'index.html',        // output as dist/index.html
// filenameHashing: false,

  pages: {
    index: {
      entry:    'vest/main.js',              // entry for the page
      template: 'vest/apps/vest/index.html',  // the source html template// output as dist/index.html
      filename: 'index.html',                 // output as dist/index.html
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ] // default includes common chunks and vendor chunks.
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@':    path.resolve('vest'),
        'vest': path.resolve('vest'),
        'comp': path.resolve('vest/comp')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: { // pass options to sass-loader
        data: `@import "@/sass/shared.scss";` // @/ is an alias to src/
      }
    }
  }
}