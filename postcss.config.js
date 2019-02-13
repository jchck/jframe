const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    presetEnv({
      stage: 1, // 0 (experimental) to 4 (stable)
    })
  ]
};