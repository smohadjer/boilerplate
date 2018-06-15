var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('app/resources/css/*.scss', ['sass']);
	gulp.watch('app/resources/templates/*.hbs', ['templates']);
	gulp.watch('app/resources/js/*.js', ['jsHint']);
	gulp.watch('.tmp/resources/css/styles.css', ['cssLint']);
});
