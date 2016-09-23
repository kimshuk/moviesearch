var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    build = require('gulp-build');
    

gulp.task('connect', function() {
    connect.server({
        root: 'dev',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./dev/*.html')
        .pipe(connect.reload());
});

gulp.task('script', function() {
    gulp.src('./dev/js/*.js')
        .pipe(connect.reload());
})

gulp.task('style', function() {
   return gulp.src('./dev/sass/*.scss')
    .pipe(autoprefixer())
    .pipe(cleanCSS({
       compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./dev/css'))
    .pipe(connect.reload());
});

gulp.task('build:html', function() {
    gulp.src('./dev/*.html').pipe(gulp.dest('dist'));
});

gulp.task('build:style', function() {
    gulp.src('./dev/css/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('build:script', function() {
    gulp.src('./dev/js/*.js').pipe(gulp.dest('dist/js'));
})

gulp.task('watch:html', function() {
    gulp.watch(['./dev/*.html'], ['html']);
});

gulp.task('watch:script', function() {
    gulp.watch(['./dev/js/*.js'], ['script']);
});

gulp.task('watch:style', function() {
    gulp.watch(['./dev/sass/*.scss'], ['style']);
});

gulp.task('build', ['build:html', 'build:script', 'build:style']);

gulp.task('default', ['connect','build', 'watch:html', 'watch:script', 'watch:style']);