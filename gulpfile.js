var gulp = require('gulp')
var concat = require('gulp-concat-css')
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/styles/sass/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});


gulp.task('concat', () => {
    return gulp.src('src/styles/css/**/**/*.css')
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest('src'));
})

gulp.task('minify-css', () => {
    return gulp.src('./src/bundle.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src'));
});

gulp.task('watch', function(){
    gulp.watch('src/styles/sass/**/*.scss', gulp.series('sass', 'concat', 'minify-css'))
})
