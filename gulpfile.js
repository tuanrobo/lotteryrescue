'use strict';

const gulp = require('gulp'),
	pug = require('gulp-pug'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	del = require('del'),
	{ src, dest, series, watch } = require('gulp');

sass.compiler = require('node-sass');


const html = () => {
	return src('src/template/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest('build'))
		.pipe(connect.reload());
}

const style = () => {
	return src('src/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('build/css'))
		.pipe(connect.reload())
}


const js = () => {
	return src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(dest('build/js'))
		.pipe(connect.reload());
}

const images = () => {
	return src('src/images/**/*.*')
		.pipe(dest('build/images'))
		.pipe(connect.reload());
}


const fonts = () => {
	return gulp.src(['fonts/**/*.*'])
		.pipe(gulp.dest('build/fonts'));
}

const copyLibrary = () => {
	gulp.src(['node_modules/animate.css/animate.css'])
		.pipe(gulp.dest('build/css'));

	gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(gulp.dest('build/js'));

	gulp.src(['node_modules/popper.js/dist/umd/popper.js'])
		.pipe(gulp.dest('build/js'));

	return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest('build/js'));
}

// const connector = () => {
// 	connect.server({
// 		root: 'build',
// 		name: 'Develop Invictus',
// 		host: '0.0.0.0',
// 		port: 8080,
// 		livereload: true
// 	});
// }

const delFolder = () => {
	del.sync('build/sources')
}

const watcher = () => {
	watch('src/images/**/*.*',images);
	watch('src/js/**/*.js', js);
	watch(['src/template/*.pug','src/template/*.*/*.pug'], html);
	watch('src/scss/**/*.scss', style);
	watch('build/sources', delFolder)
}

var build = series(copyLibrary, images,js, fonts, watcher)

exports.default = build
