var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.desst('./css'));
});

gulp.tas('css', function() {
    gulp.src('./css/*css')
    .pipe(uglifycss({
        uglifyComment: true
    }))
    .pipe(gulp.dest('./dest/'));
});

gulp.task('run', ['sass', 'css']);

gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./css/*.css', ['css']);
});

gulp.task('default', ['run', 'watch']);

/*
steps

> npm install gulp-cli -g
> npm install gulp-sass
> npm istall gulp --save-dev
> npm install --save gulp-uglifycss

create gulpfile.css in root folder.
to run gulp type gulp in cmd prompt and enter.

*/
