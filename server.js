const pkg = require('./package.json');
const bs = require('browser-sync').create(pkg.name);

// bs.watch('./src/views/**/*').on('change', bs.reload);
// bs.watch('./src/views/**/*', function(event, file) {
//   if ( event == 'change' ) {
//     bs.reload();
//   }
// });
bs.watch('./src/views/**/*', (event, file) => {
  event == 'change' ? bs.reload() : '';
});

bs.init({
  server: 'dist/',
  port: 8008,
  notify: false
});