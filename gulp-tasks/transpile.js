var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task('transpile', function () {
	var stream = gulp.src('./dist/resources/js/main.js')
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest('./dist/resources/js'));

	return stream;
});
