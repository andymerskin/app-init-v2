'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './src',
		},
		open: false,
		online: false
	});

	gulp.watch('./src/scss/*.scss', ['sass']);
	gulp.watch('./src/**/*.html').on('change', browserSync.reload);
	gulp.watch('./src/**/*.js').on('change', browserSync.reload);
});