// Define variables to load in jFrame's Gulpfile
var gulp 			= require('gulp');
var	postcss			= require('gulp-postcss');
var	cssnext			= require('cssnext');
var	precss			= require('precss');
var	autoprefixer	= require('autoprefixer');
var	atImport		= require('postcss-import');
var	mqpacker 		= require('css-mqpacker');
var	cssnano 		= require('cssnano');
var	size			= require('gulp-size')
var	watch			= require('gulp-watch');
var	cssvariables	= require('postcss-css-variables');
var	browserSync 	= require('browser-sync').create();
var	browserReload	= browserSync.reload;



// This is the Gulp task named 'css' which executes the following function
gulp.task('css', function(){
	
	// Define PostCSS plugins here, we'll pass them below
	var postcssPlugins = [
		atImport,
		cssvariables,
		cssnano,
		autoprefixer({
			browsers: ['last 2 versions']
		}),
		
		cssnext,
		mqpacker,
		precss,
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

// Init browser-sync which starts a static server & allows for browsers to reload on filesave
gulp.task('browser-sync', function(){
	browserSync.init(null, {
		server: {
			baseDir: "./"
		}
	});
});

// Call for reloading browsers
gulp.task('bs-reload', function(){
	 browserSync.reload;
});

/**
 *
 * The default task
 * 
 * + process CSS
 * + starts a server at http://localhost:3000
 * + reloads browser when change is made to css or HTML file
 *
 */

gulp.task('default', ['css', 'bs-reload', 'browser-sync'], function(){
	gulp.start(['css'], 'bs-reload');
	gulp.watch('src/*', ['css']);
	gulp.watch(['index.html'], ['bs-reload']);
});
