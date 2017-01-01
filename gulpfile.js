var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minify = require('gulp-minify');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');



// =====================
// Sass Goodies
// =====================

gulp.task('build:styles', function () {
  gulp.src('./public/stylesheets/scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/stylesheets'));
});



// =====================
// Browser Sync and Nodemon
// https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e
// =====================
gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/stylesheets/*.css", "views/**/*"],
        port: 7000,
	});

	gulp.watch("public/stylesheets/scss/*.scss", ['build:styles']);
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	return nodemon({
		script: './bin/www'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


gulp.task('default', [ 'build:styles', 'browser-sync']);


