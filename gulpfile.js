var gulp = require('gulp'),
	requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp-tasks', { recurse: true });

gulp.task('serve', gulp.series(
	'clean:tmp',
	gulp.parallel('copy:libs'),
	gulp.parallel('hbs', 'sass', 'jsHint'),
	'watch'
));

gulp.task('build', gulp.series(
	gulp.parallel('clean:dist', 'clean:tmp'),
	gulp.parallel('copy:libs'),
	gulp.parallel('hbs', 'sass', 'jsHint'),
	'rollup',
	'transpile',
	gulp.parallel('copy:assets', 'copy:root', 'copy:content', 'copy:img', 'copy:appleIcon'),
	'useref'
));
