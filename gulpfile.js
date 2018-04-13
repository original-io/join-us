var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', ['sass', 'img']);

gulp.task('watch', function() {
  gulp.watch('./dev/styles/sass/*.sass', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('dev/styles/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('image', function(){
  return gulp.src('./dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('minify-css', function(){
  return gulp.src(['./dist/css/*.css', './dev/styles/css/*.css'])
    .pipe(cleanCSS({debug: true}, function(details){
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

