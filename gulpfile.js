const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');
// const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const config = {
	dist: 'dist/',
	src: './',
	cssin: 'assets/css/*.css',
	jsin: 'assets/js-task/src/*.js',
	imgin: 'assets/images/src/**/*.{jpg,jpeg,png,gif}',
	htmlin: '*.html',
	scssin: 'assets/scss/**/*.scss',
	cssout: 'assets/css/',
	jsout: 'assets/js/',
	imgout: 'assets/images/',
	htmlout: 'dist/',
	scssout: 'assets/css/',
	cssoutname: 'style.css',
	jsoutname: 'scripts.js',
	cssreplaceout: 'css/style.css',
	jsreplaceout: 'js/script.js'
};
// Delete css file 
function cleanCss() {
	return del( config.cssout );
}
// Delete css file 
function cleanJs() {
	return del( config.jsout );
}
// Css bundle 
function cssBundle() {
	return gulp
		.src(config.scssin)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.cssout));
}
// minify css (merge + autoprefix + rename)
function cssMinifire() {
	return gulp.src(config.cssin)
		.pipe(minifyCss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(config.cssout));
}
// js processor 
function jsProcessor(){
	return gulp.src([config.jsin, 'assets/js-task/activation-script.js'])
		.pipe( babel() )
		.pipe( concat( config.jsoutname ) )
		.pipe( gulp.dest( config.jsout ) )
		.pipe( uglify() )
		.pipe( rename({ extname: '.min.js' }) )
		.pipe( gulp.dest( config.jsout ) );

}

exports.cleanCss = cleanCss;
exports.cssBundle = cssBundle;
exports.cssMinifire = cssMinifire;
exports.jsProcessor = jsProcessor;

exports.build = gulp.series( cleanCss, cssBundle, cssMinifire, cleanJs, jsProcessor );

exports.default = function() {
	gulp.watch('assets/scss/*.scss', gulp.series( cleanCss, cssBundle, cssMinifire ) ),
	gulp.watch('assets/js-task/**/*.js', gulp.series( cleanJs, jsProcessor )  )
};

