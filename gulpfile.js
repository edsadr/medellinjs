var gulp = require('gulp'),
	connect = require('gulp-connect'),
	shell= require('gulp-shell');
 
gulp.task('init', shell.task([
  	'node _harp/_project/setup.js',
	'harp compile _harp ./',	
	'cp _harp/_project/README.md .',
	'cp _harp/_project/CNAME .'
]));

gulp.task('compile', function(){
	shell([
	'node _harp/_project/setup.js',	
  	'harp compile _harp ./'
	]).pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('_harp/**',['compile']);
})

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('default', ['webserver','watch']);