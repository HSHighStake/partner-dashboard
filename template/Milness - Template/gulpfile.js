var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify');

gulp.task('browser-sync', ['styles'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	// .pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	// .pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/pace/pace.min.js',
		'./app/libs/superfish-master/js/superfish.min.js',
		'./app/libs/slick/slick.min.js',
		'./app/libs/sticky/jquery.sticky-min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/parallax/jquery.stellar.min.js',
		'./app/libs/magnific-popup/jquery.magnific-popup.min.js',
		'./app/libs/jquery-ui-1.12.0.custom/jquery-ui.min.js',
		'./app/libs/ytp-player/jquery.mb.YTPlayer.min.js',
		'./app/libs/googlemaps/gmap3.min.js',
		'./app/libs/jquery.matchHeigh/jquery.matchHeight-min.js',
		'./app/libs/canvas-bg/particles.min.js',
		'./app/libs/canvas-bg/demo-2.js'
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
