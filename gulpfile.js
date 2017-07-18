const gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps'),
	gutil = require('gulp-util');

const paths = {
	js: ['js/modules/*.js', 'js/*.js'],
	css: ['css/**/*.scss'],
	img: ['img/*.svg', 'img/*.png', 'img/*.jpg', 'img/*.ico', 'img/*.gif'],
	html: ['views/*.html', 'index.html']
}

gulp.task('sass', function() {
  return gulp.src('css/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
	.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src(paths.js)
	.pipe(sourcemaps.init())
		.pipe(babel({ presets: ['es2015'] }))
		.on('error', gutil.log)
		.pipe(concat('app.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/js'))
	.pipe(connect.reload());
});

gulp.task('clean', function() {
 	return gulp.src('build')
 	.pipe(clean());
});

gulp.task('watch', function() {
  	gulp.watch(paths.js, ['js']);
  	gulp.watch(paths.css, ['sass']);
  	gulp.watch(paths.html, ['html']);
  	gulp.watch(paths.img, ['images']);
});

gulp.task('html', function(){
	gulp.src('index.html')
	.pipe(gulp.dest('build'))
	gulp.src('views/**/*.html')
		.pipe(gulp.dest('build/views'))
	.pipe(connect.reload());
});

gulp.task('images', function(){
	gulp.src(paths.img)
		.pipe(gulp.dest('build/img'));
});

gulp.task('serve', function(){
	connect.server({
		root:'build',
		port: process.env.PORT || 3030,
		livereload:true,
		fallback:'build/index.html'
	})
});

gulp.task('prod-serve', function(){
	connect.server({
		root:'build',
		port: process.env.PORT || 3030,
		fallback:'build/index.html'
	})
});

gulp.task('start', ['serve','watch', 'html', 'js', 'images']);
