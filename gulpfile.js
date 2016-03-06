'use strict';

var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    jshint   = require('gulp-jshint'),
    minify   = require('gulp-minify-css'),
    rename   = require('gulp-rename'),
    sass     = require('gulp-sass'),
    uglify   = require('gulp-uglify'),
    neat     = require('node-neat').includePaths,
    svgmin   = require('gulp-svgmin');

var CSSDest = './static/css/',
    JSDest = './static/js/dist/';

gulp.task('styles', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        // This will output the non-minified version
    .pipe(gulp.dest(CSSDest))
    // This will minify and rename to foo.min.js
    .pipe(minify())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(CSSDest));
});

gulp.task("lint", function() {
    gulp.src("./static/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});


gulp.task('scripts', function() {
  return gulp.src( ['./static/js/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(JSDest))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(JSDest));
});

gulp.task('scripts-concat', function() {
  return gulp.src(
      [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
        './node_modules/flickity/dist/flickity.pkgd.js',
        './static/js/dist/scripts.min.js'
      ])
    .pipe(concat('scripts-concatenated.min.js')) //change this to change the script found in 'templates/global/_scripts.html'
    .pipe(gulp.dest(JSDest))
});

gulp.task('move-scripts', function(){
    return gulp.src([
        './node_modules/html5shiv/dist/html5shiv.min.js',
        './node_modules/respond.js/dest/respond.min.js',
        ])
    .pipe(gulp.dest(JSDest));
});

gulp.task('move-scripts-vivus', function() {
  return gulp.src( ['./node_modules/vivus/dist/vivus.min.js'])
    .pipe(gulp.dest(JSDest));
});


gulp.task('svgmin', function () {
    return gulp.src('./static/images-svg/*.svg')
        .pipe(svgmin({
            plugins: [ {
                cleanupIDs: false
            }]
        }))
        .pipe(gulp.dest('./static/images/'));
});


gulp.task('jekyll-stage', function (){
    require('child_process').spawn('bundle', ['exec', 'jekyll', 'build', "--config=_config.yml,_config-stage.yml"], {stdio: 'inherit'});
});

gulp.task('jekyll-production', function (){
    require('child_process').spawn('bundle', ['exec', 'jekyll', 'build', "--config=_config.yml"], {stdio: 'inherit'});
});


gulp.task('default',function(){
    gulp.start('styles', 'lint', 'scripts', 'scripts-concat', 'move-scripts', 'move-scripts-vivus');
});
