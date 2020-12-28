// init modules

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const {src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// file paths vars

const files = {
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js'
}

// javascript

function jsTask() {
    return src(files.jsPath)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );

}

// sass

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist')
    );
}

// watch

function watchTask() {
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask)
    );
}

// default

exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);
exports.build = parallel(scssTask, jsTask);
