// generated on 2015-01-26 using generator-4dev 0.1.0
// last update: 06.03.2015

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var glob = require('glob');
var del = require('del');
var $ = require('gulp-load-plugins')();
var pagespeed = require('psi');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var imageResize = require('gulp-image-resize');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var gulpBrowserify = require('gulp-browserify');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var webp = require('gulp-webp');
var rename = require('gulp-rename');
var jpegtran = require('imagemin-jpegtran');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

var site = 'http://example.com';

module.exports = gulp;


// browserify task: builds a bundle out of your scripts
gulp.task('buildBundle', function() {
  // Single entry point to browserify
  return gulp.src('./site/assets/js/scripts.js')
    .pipe(gulpBrowserify({
      insertGlobals : false
    }))
    .pipe(gulp.dest('./dist/assets/js/'));
});

// bundler
var bundler = watchify(browserify('./site/assets/js/scripts.js', watchify.args));
// add any other browserify options or transforms here
// bundler.transform(brfs);

gulp.task('bundle', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler

// browserify watch task: watches your script files for any changes and recompiles if so
function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you dont want sourcemaps
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/assets/js/'))
    .pipe(gulp.dest('./site/assets/js/'));
}


// uncss: optional task - removes all unused css selectors from a file (does not overwrite)
gulp.task('uncss', function() {
  return gulp.src(['./site/assets/css/**/*.css'])
    .pipe(concat('all.css'))
    .pipe(uncss({
        html: ['./dist/index.html'],
        ignore: [
        '.modal',
        '.fade'
       ]
    }))
    .pipe($.csso())
    .pipe(gulp.dest('./out'));
});

// styles task: concat, uglify and minify CSS
gulp.task('styles', ['sass'], function() {
  return gulp.src(['site/assets/css/**/*.css'])
    .pipe(concat('all.min.css'))
    .pipe(csso())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
      }))
    .pipe(gulp.dest('dist/assets/css'));
});


// sass task: compiles your sass files
gulp.task('sass', function () {
  return gulp.src('site/assets/css/**/*.scss')
    .pipe($.sass({
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe(gulp.dest('site/assets/css/'))
    .pipe(gulp.dest('dist/assets/css/'));
});


// jshint task: lints javascript errors
gulp.task('jshint', function () {
  return gulp.src('site/assets/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
    .pipe(reload({stream: true}));
});

// javascript: concat, minify, uglify javascript files
gulp.task('js', ['buildBundle'], function () {
    gulp.src(['site/assets/libs/**/*.js', 'dist/assets/js/bundle.js'])
      .pipe(concat('bundle.min.js')) 
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(gulp.dest('site/assets/js/'));
});

// html task: update html document
gulp.task('html', function () {
  return gulp.src('site/*.html')
    .pipe($.if('*.html', $.minifyHtml({conditionals: false, loose: true, comments: false})))
    .pipe(gulp.dest('dist'));
});

// assets task: minify html document with all its assets
gulp.task('assets', function () {
  var assets = useref.assets();

  return gulp.src('site/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', csso()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: false, loose: true, comments: false})))
    .pipe(gulp.dest('dist'));
});

// fonts task
gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')().concat('site/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/assets/fonts'));
});

// copy all files from ./site/** to ./dist/**
gulp.task('copy', function () {
  return gulp.src([
    'site/**/*',
    '!site/assets/js/*.js',
    '!site/assets/css/*.scss',
    '!site/*.html',
    ],{
     dot:true
    }).pipe(gulp.dest('dist'))
      .pipe($.size({title: 'copy'}));
});

// watch files for changes & reloads the browser 
// read comments to make this work properly 
gulp.task('serve', function () {
  // you should serve from the ./dist folder after you builded your page once
  browserSync({
    server: {
        baseDir: "./dist/"
    }
  });

  // if you have php in your project use a proxy like xampp, uncomment the next
  // line and route it through your xampp server. mysite.local is a virtualHost
  // entry for 127.0.0.1 for example. If you don't need a life browser refresh
  // you might not need this at all.
  // browserSync({
  //   proxy: "mysite.local/site"
  // });

  // watch for changes
  gulp.watch([
    'site/*.html',
    'site/assets/css/**/*.css',
    'site/assets/js/bundle.js',
    'site/php/*.php'
  ]).on('change', reload);
  
  gulp.watch('site/assets/css/**/*.scss', ['sass']); 
  gulp.watch('site/assets/images/**/*', ['images']);
  gulp.watch('site/*.html', ['html']);
  // (optional) shows js errors you can also run this by using: gulp jshint path/filename.js
//  gulp.watch('site/assets/js/*.js', ['jshint']);
});

// resize task: resize your images to a given size. 
// especially handy for creating thumbnails on the fly
gulp.task('resize', function () {
  gulp.src('site/assets/images/**/*')
    .pipe(imageResize({ 
      width : 200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist/assets/thumbs/'));
});

// image task: optimizes images / sizes
gulp.task('images', function () {
  return gulp.src('./site/assets/images/**/*')
  .pipe(jpegtran({progressive: true})())
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('./dist/assets/images'))
    .pipe(reload({stream: true, once: true}))
    .pipe($.size({title: 'images'}));
});

// webp task: creates webp image formats out of a given directory
gulp.task('webp', function(){
  gulp.src('./site/assets/images/**/*')
    .pipe(webp({
      quality: 100,
      lossless: false
    }))
    .pipe(gulp.dest('./site/assets/webp/'));
});

// Cleans the ./dist directory
gulp.task('clean', del.bind(null, ['dist']));

// default task: builds your project in the ./dist folder and creates
// production files. Just use 'gulp' from the command line
gulp.task('default', ['clean'], function (cb) {
  runSequence(['styles', 'copy', 'js'], 'assets', cb);
});

// pagespeed insight mobile task run. Specify a site first bevor executing: gulp mobile
gulp.task('mobile', function () {
    return pagespeed(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

// pagespeed insight desktop task. Specify a site first bevor executing: gulp desktop
gulp.task('desktop', function () {
    return pagespeed(site, {
        // key: key
        nokey: 'true',
        strategy: 'desktop',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});