var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../../webpack.config');

gulp.task('build', function() {
  return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./example'));
});
