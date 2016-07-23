var gulp = require("gulp");
var less = require("gulp-less");
var exec = require('child_process').exec;

gulp.task("less", function() {
    gulp.src("style.less")
    .pipe(less())
    .pipe(gulp.dest("styles/css"));
});

gulp.task('watch', function(){
  gulp.watch('styles/less/*.less', ['less']);
  gulp.watch('style.less', ['less']); 
  // Other watchers
});

gulp.task('server', function (cb) {
  exec("npm run tsc:w", function (err, stdout, stderr) {
    console.log('tsc started.');
  });
  exec("npm run lite", function (err, stdout, stderr) {
    console.log('Lite Server started');
  });
  gulp.run('less','watch');
});