const gulp = require('gulp');
const clean = require('gulp-clean');
const shell = require('gulp-shell')

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task('copy', function () {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', shell.task([
  'webpack --colors -w'
]))

gulp.task('default', ['clean', 'copy', 'build']);