var gulp = require('gulp'),
    gls = require('gulp-live-server');
 
gulp.task('serve', () => {
 
    var server = gls.static('.', 9900);
    server.start();
});
 
gulp.task('default', ['serve']);