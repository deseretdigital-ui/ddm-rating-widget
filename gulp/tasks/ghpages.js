var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');

gulp.task('ghpages', ['build'], function () {
  return gulp.src('./example')
    .pipe(ghpages());
});
