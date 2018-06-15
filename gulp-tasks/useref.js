var gulp = require('gulp'),
	debug = require('gulp-debug'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano');

gulp.task('useref', function() {
	var stream = gulp.src('app/*.php')
		.pipe(useref())
		.pipe(debug({title: 'useref:'}))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
	return stream;
});
