const gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps');

var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('rollup', function() {
	return rollup({
		input: 'app/resources/js/main.js',
		name: 'main.js',
		format: 'iife',
		sourcemap: true
	})
	.pipe(source('main.js'))

	// buffer the output. most gulp plugins, including gulp-sourcemaps, don't support streams.
	.pipe(buffer())

	// tell gulp-sourcemaps to load the inline sourcemap produced by rollup-stream.
	.pipe(sourcemaps.init({loadMaps: true}))

	// write the sourcemap alongside the output file.
	.pipe(sourcemaps.write('.'))

	.pipe(gulp.dest('./dist/resources/js'));
});
