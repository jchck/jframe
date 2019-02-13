const presetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');
const iimport = require('postcss-import');
const url = require('postcss-url');

module.exports = {
  plugins: [
    iimport(),
    url({
      url: 'copy',
      // base path to search assets from
      basePath: path.resolve('node_modules/bootstrap'),
      // dir to copy assets
      assetsPath: 'img',
      useHash: true
    })
    presetEnv({
      stage: 1, // 0 (experimental) to 4 (stable)
    }),
    cssNano({
      preset: 'default',
      // or to pass options to modules ...
      // preset: ['default', {
      //   discardComments: {
      //     removeAll: true
      //   }
      // }]
    })
  ]
};