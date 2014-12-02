var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../../webpack.config');

gulp.task('watch', ['build'], function() {
  webpackConfig.watch = true;
  return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./example'));
});
