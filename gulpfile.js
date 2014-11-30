var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')
  ;

gulp.task('default', ['watch', 'scripts', 'connect']);

gulp.task('connect', function () {
  connect.server();
});

gulp.task('scripts', function() {
  // Single entry point to browserify
  gulp.src('lib/director/browser.js')
    .pipe(browserify({
      standalone: 'Router',
      bare: true
    }))
    .pipe(rename('director.js'))
    .pipe(gulp.dest('./build/'))
    .pipe(uglify())
    .pipe(rename('director.min.js'))
    .pipe(gulp.dest('./build/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('lib/director/*.js', ['scripts']);
});
