module.exports = function (eleventy) {
  // eleventy.addLayoutAlias( 'base', 'layouts/base.liquid');
  eleventy.addLayoutAlias( 'default', 'layouts/default.liquid' );
  return {
    dir: {
      input: 'src/views',
      includes: '_includes',
      output: 'dist',
      passthroughFileCopy: true
    },
  }
};