module.exports = function (eleventy) {
  return {
    dir: {
      inpit: 'src/views',
      output: 'dist'
    },
    passthroughFileCopy: true
  }
};