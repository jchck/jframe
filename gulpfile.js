// Define variables to load in jFrame's Gulpfile
var gulp 			= require('gulp'),
	postcss			= require('gulp-postcss'),
	cssnext			= require('cssnext'),
	precss			= require('precss'),
	autoprefixer	= require('autoprefixer'),
	atImport		= require('postcss-import'),
	mqpacker 		= require('css-mqpacker'),
	cssnano 		= require('cssnano'),
	size			= require('gulp-size')


// This is the Gulp task named 'css' which executes the following function
gulp.task('css', function(){
	
	// Define PostCSS plugins here, we'll pass them below
	var postcssPlugins = [
		atImport,
		autoprefixer({
			browsers: ['last 2 versions']
		}),
		cssnano,
		cssnext,
		mqpacker,
		precss
	];

	// This is where the files for processing are located (/.src/jFrame.css)
	return gulp.src('./src/jFrame.css')
		// PostCSS plugins (defined above) are added to the pipe here
		.pipe(postcss(postcssPlugins))
		// Print processed file size to terminal
		.pipe(size({gzip: false, showFiles: true, title:'Processed!'}))
		.pipe(size({gzip: true, showFiles: true, title:'Processed & gZipped!'}))
		// This is where the processed files get piped to ('./dest')
		.pipe(gulp.dest('./dest'));
});