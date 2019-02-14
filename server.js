const pkg = require('./package.json');
const bs = require('browser-sync').create(pkg.name);

bs.watch('./src/views/**/*', (event, file) => {
  if(event=='change') {
    require('@11ty/eleventy/cmd');
    bs.reload();
  };
});

bs.init({
  server: 'dist/',
  port: 8008,
  notify: false
});