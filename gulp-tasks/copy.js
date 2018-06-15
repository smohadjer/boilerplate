var gulp = require('gulp'),
	npmDist = require('gulp-npm-dist');

gulp.task('copy:assets', function() {
	var stream = gulp.src('app/_assets/**/*')
		.pipe(gulp.dest('dist/_assets'));
	return stream;
});

gulp.task('copy:includes', function() {
	var stream = gulp.src('app/includes/**/*')
		.pipe(gulp.dest('dist/includes'));
	return stream;
});

gulp.task('copy:appleIcon', function() {
	var stream = gulp.src('app/*.png')
		.pipe(gulp.dest('dist'));
	return stream;
});

gulp.task('copy:img', function() {
	var stream = gulp.src('app/resources/img/**/*')
		.pipe(gulp.dest('dist/resources/img'));
	return stream;
});

// copy package.json dependencies to .tmp
gulp.task('copy:libs', function() {
	var stream = gulp.src(npmDist({
  		"copyUnminified": true
    }), {base:'./node_modules'})
		.pipe(gulp.dest('.tmp/resources/vendor'));
	return stream;
});
