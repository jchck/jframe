// Define variables to load in jFrame's Gulpfile
var gulp 			= require('gulp'),
	postcss			= require('gulp-postcss'),
	cssnext			= require('cssnext'),
	precss			= require('precss'),
	autoprefixer	= require('autoprefixer');

// This is the Gulp task named 'css' which executes the following function
gulp.task('css', function(){
	
	// Define PostCSS plugins here, we'll pass them below
	var processors = [
		autoprefixer({
			browsers: ['last 2 versions']
		}),
		cssnext,
		precss
	];

	// This is where the files for processing are located (/.src/*.css)
	return gulp.src('./src/*.css')
		// PostCSS plugins (defined above) are added to the pipe here
		.pipe(postcss(processors))
		// This is where the processed files get piped to ('./dest')
		.pipe(gulp.dest('./dest'));
});