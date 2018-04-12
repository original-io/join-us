var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['css', 'sass', 'img']);

gulp.task('watch', function() {
  gulp.watch('./dev/styles/sass/*.sass', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('dev/styles/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('image', function(){
  return gulp.src('./dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('css', function () {
  gulp.src('./dist/css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});