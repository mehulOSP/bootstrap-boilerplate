var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('style', function() {
	//Min CSS and CONCATINATION
	gulp.src([
        'assets/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'assets/bower_components/font-awesome/css/font-awesome.min.css',
        'assets/css/style.css',
		'assets/css/media-query.css',
	])
    // .pipe(cleanCSS())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('min'));

});

gulp.task('header-script',function(){
    // Min JS and CONCATINATION
    gulp.src([
        'assets/bower_components/jquery/dist/jquery.min.js',
        'assets/bower_components/bootstrap/dist/js/bootstrap.js',
    ])
    .pipe(uglify())
    .pipe(concat('header-script.js'))
    .pipe(gulp.dest('min'));
});

gulp.task('footer-script',function(){
    // Min JS and CONCATINATION
    gulp.src([
        'assets/js/app.js',
    ])
    .pipe(uglify())
    .pipe(concat('footer-script.js'))
    .pipe(gulp.dest('min'));
});

gulp.task('watch', function () {
    return  gulp.watch(
            [
                'assets/css/style.css',
                'assets/css/media-queries.css',
            ], 

            ['style', 'header-script', 'footer-script']);
});

gulp.task('default', ['style', 'header-script', 'footer-script', 'watch']);