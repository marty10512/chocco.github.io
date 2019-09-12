const { src, dest, task, series, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');

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

task( 'copy:js', () => {
  return src('src/script/*.js').pipe(dest('dist')).pipe(reload({stream:true}));
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
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem())
    .pipe(autoprefixer({cascade: false}))
    .pipe(dest('dist'));
  });

task('server', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      },
      browser: 'google chrome'
  });
});

watch('./src/styles/**/*', series('styles'));
watch('./src/*.html', series('copy:html'));
 
task('default', series('clean', 'styles', 'copy:html', 'copy:svg', 'copy:js', 'copy:img', 'copy:fonts', 'server'));