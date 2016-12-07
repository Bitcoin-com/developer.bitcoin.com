'use strict';

const autoprefixer = require('autoprefixer');
const browser = require('browser-sync');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const mq4HoverShim = require('mq4-hover-shim');
const panini = require('panini');
const postcss = require('gulp-postcss');
const rimraf = require('rimraf').sync;
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// Set options
// TODO: move this to a config.yml
var port = process.env.SERVER_PORT || 8080;
var nodepath = process.env.NODE_PATH || 'node_modules/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: nodepath
};

// Get flags
var argv = require('yargs').argv;

// Erase the dist folder
gulp.task('clean', function() {
  rimraf('dist');
});

// Copy assets
gulp.task('copy', function() {
  gulp.src(['assets/**/*']).pipe(gulp.dest('dist'));
  gulp.src(nodepath+ 'holderjs/holder.min.js').pipe(gulp.dest('dist/temp'));
});

// Compile JS
// TODO: define js files in a config.yml so unused components can be easily commented out
gulp.task('compile-js', function() {
  return gulp.src([nodepath+ 'jquery/dist/jquery.min.js', nodepath+ 'bootstrap/dist/js/bootstrap.min.js', 'js/**/*.js'])
    .pipe(gulpif(argv.production, uglify()))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});

// Compile Sass
gulp.task('compile-sass', function () {
  var processors = [
    mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
      autoprefixer({
        browsers: [
          'Chrome >= 35',
          'Firefox >= 31',
          'Edge >= 12',
          'Explorer >= 9',
          'iOS >= 8',
          'Safari >= 8',
          'Android 2.3',
          'Android >= 4',
          'Opera >= 12'
        ]
      })//,
    ];
  return gulp.src('./scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulpif(!argv.production, sourcemaps.write()))
    .pipe(gulpif(argv.production, cssnano()))
    .pipe(gulp.dest('./dist/css/'));
});

// Compile HTML
gulp.task('compile-html', function() {
  return gulp.src('html/pages/**/*.html')
    .pipe(panini({
      root: 'html/pages/',
      layouts: 'html/layouts/',
      partials: 'html/includes/',
      helpers: 'html/helpers/',
      data: 'html/data/'
    }))
    .pipe(gulp.dest('dist'))
    .on('finish', browser.reload);
});

// Start BrowerSync
gulp.task('server', ['build'], function(){
  browser.init({server: './dist', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['compile-sass', browser.reload]);
  gulp.watch('html/pages/**/*.html', ['compile-html']);
  gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset','compile-html']);
  gulp.watch('js/**/*.js', ['compile-js', browser.reload]);
});

// Refresh Panini
gulp.task('compile-html:reset', function(done) {
  panini.refresh();
  done();
});

// Primary tasks
gulp.task('default', ['server', 'watch']); 
gulp.task('build', ['clean','copy','compile-js','compile-sass','compile-html']);
