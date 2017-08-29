const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require ('gulp-concat');
const babel = require ('gulp-babel');


// a task to compile our sass
gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css')) // <-- concat-ing and compiling into a file that you specify / create
		.pipe(gulp.dest('./public/styles'))
});

// a task to compile our js
gulp.task('scripts', () => {
	return gulp.src('./dev/scripts/main.js')
		.pipe(babel({ // <-- babel method
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/scripts'))
});

// a task to watch all of my other tasks
gulp.task('watch', () => { // <-- continuously watches the files and the tasks inside it (styles / scripts)
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/main.js', ['scripts']);
});

gulp.task ('default', ['styles', 'scripts', 'watch']); // 