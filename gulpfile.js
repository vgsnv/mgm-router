const gulp = require('gulp');
const clean = require('gulp-clean');
const shell = require('gulp-shell');
const newer = require('gulp-newer');

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task('copy', function () {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('webpack', shell.task([
  'webpack --colors -w'
]))

gulp.task('build', ['webpack', 'copy', 'copy-react', 'copy-react-dom'])

gulp.task('copy-react', function() {
  return gulp.src('node_modules/react/dist/react.min.js')
    .pipe(gulp.dest('dist/vendor/'));
});

gulp.task('copy-react-dom', function() {
  return gulp.src('node_modules/react-dom/dist/react-dom.min.js')
    .pipe(gulp.dest('dist/vendor/'));
});

gulp.task('default', ['clean'], () =>{
  gulp.run('build')
});