let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', async function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', async function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
