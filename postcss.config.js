const presetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

module.exports = {
  plugins: [
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