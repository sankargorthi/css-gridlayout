const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const path = require('path');

gulp.task('styles', () => {
    gulp.src('css/**/*.less')
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./build'));
});


gulp.task('default', () => {
    gulp.watch('css/**/*.less', ['styles']);
});
