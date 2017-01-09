'use strict';

// Node File System
const fs = require('fs');

// Installed modules
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
const uncss = require('gulp-uncss');
const yaml = require('js-yaml');

// Get flags
var argv = require('yargs').argv;

// Load settings from config.yml
const { BROWSERS, FILENAME, INCLUDE_HOLDER, PATHS, PORT, SASS_OPTIONS, UNCSS_ON, UNCSS_OPTIONS } = loadConfig();

function loadConfig() {
  let ymlConfig = fs.readFileSync('config/config.yml', 'utf8');
  return yaml.load(ymlConfig);
}

// Function returns build or site directory, depending on argv.production
function outPath() {
  if (argv.production) {
    return PATHS.build;
  } else {
    return PATHS.site;
  }
}

// Erase the output folder
gulp.task('clean', function() {
  rimraf(outPath());
});

// Copy assets
gulp.task('copy', function() {
  gulp.src(['assets/**/*']).pipe(gulp.dest(outPath()));
  if (INCLUDE_HOLDER) {
    gulp.src('node_modules/holderjs/holder.min.js').pipe(gulp.dest(outPath()+ '/temp'));
  }
});

// Compile JS
gulp.task('compile-js', function() {
  return gulp.src(PATHS.js)
    .pipe(gulpif(argv.production, uglify()))
    .pipe(concat(FILENAME + '.js'))
    .pipe(gulp.dest(outPath()+ '/js/'));
});

// Compile Sass
gulp.task('compile-sass', function () {
  var processors = [
    mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
    autoprefixer({browsers: BROWSERS})
  ];
  return gulp.src(['./scss/app.scss', './scss/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass(SASS_OPTIONS).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(concat(FILENAME + '.css'))
    .pipe(gulpif(!argv.production, sourcemaps.write()))
    .pipe(gulpif((argv.production & UNCSS_ON), uncss(UNCSS_OPTIONS)))
    .pipe(gulpif(argv.production, cssnano()))
    .pipe(gulp.dest(outPath()+ '/css/'));
});

// Compile HTML
gulp.task('compile-html', function() {
  return gulp.src('html/pages/**/*.html')
    .pipe(panini({
      root: 'html/pages/',
      layouts: 'html/layouts/',
      partials: 'html/includes/',
      helpers: 'html/helpers/',
      data: ['html/data/','config/']
    }))
    .pipe(gulp.dest(outPath()))
    .on('finish', browser.reload);
});

// Start BrowerSync
gulp.task('server', ['build'], function(){
  browser.init({server: outPath(), port: PORT});
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
