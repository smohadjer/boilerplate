var gulp = require('gulp'),
	debug = require('gulp-debug'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano');

gulp.task('useref', function() {
	var stream = gulp.src('app/include/*')
		.pipe(useref())
		.pipe(debug({title: 'useref:'}))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(gulpif('**/*.js', gulp.dest('dist')))
		.pipe(gulpif('**/*.css', gulp.dest('dist')))
		.pipe(gulpif('**/*.html', gulp.dest('dist/include')));
	return stream;
});
