module.exports = function (eleventy) {
  eleventy.addLayoutAlias( 'base', 'layouts/base.liquid');
  return {
    dir: {
      inpit: 'src/views',
      output: 'dist'
    },
    passthroughFileCopy: true
  }
};