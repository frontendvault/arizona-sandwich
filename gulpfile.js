const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const order = require("gulp-order");
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('copyHtml', async function () {
    gulp.src('app/*.html').pipe(gulp.dest('dist'));
});

gulp.task('imageMin', async function () {
    return gulp
        .src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('minify-css', () => {
    return gulp
        .src('app/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

// SCSS Files
gulp.task('sass', async function () {
    gulp
        .src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minifyjs', async function () {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))

})

// Js files
gulp.task('scripts', async function () {
    gulp
        .src("app/js/**/*.js")
        .pipe(order([
            "app/js/a-jquery-3.5.1.slim.min.js",
            "app/js/popper.min.js",
            "app/js/bootstrap.min.js",
            "app/js/slick-slider.js",
            "app/js/custom.js"
        ]))
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task(
    'default',
    gulp.series('copyHtml', 'imageMin', 'minify-css', 'sass', 'scripts')
);