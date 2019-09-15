const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

sass.compiler = require('node-sass');

task( 'clean', () => {
  return src( 'dist/**/*', { read: false }).pipe(rm());
});

task( 'copy:html', () => {
  return src('src/*.html').pipe(dest('dist')).pipe(reload({stream:true}));
});

task( 'copy:svg', () => {
  return src('src/*.svg').pipe(dest('dist')).pipe(reload({stream:true}));
});

task( 'copy:img', () => {
  return src('src/img/**/*').pipe(dest('dist/img')).pipe(reload({stream:true}));
});

task( 'copy:fonts', () => {
  return src('src/fonts/**/*').pipe(dest('dist/fonts')).pipe(reload({stream:true}));
});

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/styles/main.scss'
];

task( 'styles', () => {
  return src(styles)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === 'prod', autoprefixer({cascade: false})))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(reload({stream: true}));
  });

  const libs = [
    'node_modules/jquery/dist/jquery.js',
    'src/scripts/*.js'  
  ];

  task('scripts', () => {
  return src(libs)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js', {newLine: ';'}))
    .pipe(gulpif(env === 'prod', babel({presets: ['@babel/env']})))
    .pipe(gulpif(env === 'prod',uglify()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('dist/scripts'))
    .pipe(reload({stream: true}));
  });

task('server', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      },
      browser: 'google chrome'
  });
});

task('watch', () => {
  watch('./src/styles/**/*', series('styles'));
  watch('./src/*.html', series('copy:html'));
  watch('./src/scripts/*.js', series('scripts'));
})
 
task('default', series('clean', parallel('copy:html', 'copy:svg', 'copy:img', 'copy:fonts', 'styles', 'scripts'), parallel('server', 'watch')));
task('build', series('clean', parallel('copy:html', 'copy:svg', 'copy:img', 'copy:fonts', 'styles', 'scripts')));
