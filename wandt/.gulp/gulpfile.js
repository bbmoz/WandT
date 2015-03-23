var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    run = require('gulp-run'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    srcs, dests;

srcs = {
    lint: ['./../client/templates/**/*.js', './../lib/**/*.js', './../server/**/*.js'],
    sass: './../private/sass/**/*.{scss,sass}'
};

dests = {
    sass:  './../client/stylesheets'
};

gulp.task('lint', function () {
    return gulp.src(srcs.lint)
        .pipe(jshint())
        .pipe(jshint.reporter('default'), {
            verbose: true
        })
        .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function () {
    return gulp.src(srcs.sass)
        .pipe(sourcemaps.init())
            .pipe(sass({
                errLogToConsole: true
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dests.sass));
});

gulp.task('watch', function () {
    gulp.watch(srcs.sass, ['sass']);
    gulp.watch(srcs.lint, ['lint']);
});

gulp.task('default', ['lint', 'sass', 'watch']);