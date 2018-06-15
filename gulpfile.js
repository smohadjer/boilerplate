var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp-tasks', { recurse: true });

gulp.task('build:dev', function(callback) {
	runSequence(
		'clean:tmp',
		'copy:libs',
		['hbs', 'sass', 'jsHint'],
		['cssLint'],
		callback);
});

gulp.task('serve', ['build:dev'], function(callback) {
	runSequence(
		'watch', callback);
});

gulp.task('build', ['clean:dist', 'build:dev'], function(callback) {
	runSequence(
		['copy:assets', 'copy:includes', 'copy:img', 'copy:appleIcon'],
		'useref',
		callback);
});
