const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');

const config = {
	dist: 'dist/',
	src: './',
	cssin: 'assets/css/*.css',
	jsin: 'assets/js/src/',
	imgin: 'assets/images/src/**/*.{jpg,jpeg,png,gif}',
	htmlin: '*.html',
	scssin: 'assets/scss/**/*.scss',
	cssout: 'assets/css/',
	jsout: 'assets/js/',
	imgout: 'assets/images/',
	htmlout: 'dist/',
	scssout: 'assets/css/',
	cssoutname: 'style.css',
	jsoutname: 'script.js',
	cssreplaceout: 'css/style.css',
	jsreplaceout: 'js/script.js'
};


function clean() {
	return del(config.cssout);
}

// const { src, dest } = require('gulp');
function bundle() {
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

exports.clean = clean;
exports.bundle = bundle;
exports.cssMinifire = cssMinifire;
exports.default = gulp.series(clean, bundle, cssMinifire);
