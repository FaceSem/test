// grab our gulp packages
var gulp       = require('gulp'),
browserSync = require('browser-sync').create()






// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});


gulp.task('default', ['watch', 'reload', 'build-css']);


gulp.task('build-css', function() {
  return gulp.src('css/main.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('dist'));
});


gulp.task("reload", function(){
  browserSync.reload();
  done();
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch('*.html',['reload']);
  gulp.watch('css//**/*.scss', ['build-css']);
});