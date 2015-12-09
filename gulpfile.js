var gulp = require('gulp'),
	jshint = require ('gulp-jshint'),
	mocha = require('gulp-mocha');

gulp.task('default', function () {
	gulp.start('mocha', 'jshint');
});

gulp.task('jshint', function () {
	gulp.src(['server.js', 'app.js', 'test.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('mocha', function () {
	return gulp.src('test.js')
	.pipe(mocha({reporter:'nyan'}));
});