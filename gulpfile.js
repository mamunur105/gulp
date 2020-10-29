const {src, series, parallel } = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const htmlReplace = require('gulp-html-replace');
const htmlMin = require('gulp-htmlmin');
const del = require('del');
const sequence = require('run-sequence');

const config = {
  dist: 'dist/',
  src: './',
  cssin: 'assets/css/**/*.css',
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



function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

function build(cb) {
  // body omitted
  cb();
}


exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);

exports.default = series(clean, build);
