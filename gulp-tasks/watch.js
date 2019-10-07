var gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('app/resources/css/**/*.scss', gulp.series('sass'));
	gulp.watch('app/resources/hbs/*.hbs', gulp.series('hbs'));
	gulp.watch('app/resources/js/*.js', gulp.parallel('jsHint', 'transpile'));
	gulp.watch('.tmp/resources/css/*.css', gulp.series('cssLint'));
});
