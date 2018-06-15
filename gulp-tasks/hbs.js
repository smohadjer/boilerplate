var gulp = require('gulp'),
	handlebars = require('gulp-handlebars'),
	wrap = require('gulp-wrap'),
	declare = require('gulp-declare'),
	concat = require('gulp-concat');

//precompile handlebars templates
gulp.task('hbs', function() {
	gulp.src('app/resources/hbs/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'MyApp.templates',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(concat('handlebars.templates.js'))
		.pipe(gulp.dest('.tmp/resources/js/'));
});
