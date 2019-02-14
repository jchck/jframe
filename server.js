const pkg = require('./package.json');
const bs = require('browser-sync').create(pkg.name);

/**
 * Watch the src/views directory and on
 * change, call eleventy & reload the browser
 * @see https://www.browsersync.io/docs/api#api-watch
 */
bs.watch('./src/views/**/*', (event, file) => {
  if(event=='change') {
    require('@11ty/eleventy/cmd');
    bs.reload();
  };
});

/**
 * Start the server with these configs
 * @see https://www.browsersync.io/docs
 */
bs.init({
  server: 'dist/',
  port: 8008,
  notify: false
});