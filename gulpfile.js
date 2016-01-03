var gulp 			= require('gulp'),
	postcss			= require('gulp-postcss');

// This is the Gulp task named 'css' which executes the following function
gulp.task('css', function(){
	
	// Define PostCSS plugins here, we'll pass them below
	var processors = [

	];

	// This is where the files for processing are located (/.src/*.css)
	return gulp.src('./src/*.css')
		// PostCSS plugins (defined above) are added to the pipe here
		.pipe(postcss(processors))
		// This is where the processed files get piped to ('./dest')
		.pipe(gulp.dest('./dest'));
});