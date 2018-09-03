var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var gulpsync = require('gulp-sync')(gulp);
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var gulp = require('gulp');
var htmlPartial = require('gulp-html-partial');

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('copy', function() {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets'))
});

gulp.task('scss', function() {
  return gulp.src('./src/assets/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('scripts', function() {
  return gulp.src('./src/**/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('html', function () {
  gulp.src(['./src/*.html'])
      .pipe(htmlPartial({
          basePath: 'src/assets/partials/'
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('runsync', gulpsync.sync(['clean', 'copy', 'html','scss', 'lint', 'scripts']));

gulp.task('default', ['runsync'], function() {
  gulp.watch(['src/**/*'], ['html', 'scss', 'lint', 'scripts'])
});
