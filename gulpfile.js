//引入模块
const gulp = require("gulp");//
const cleanCss = require("gulp-clean-css");//压缩css
const htmlmin = require("gulp-htmlmin");//压缩HTML
const uglify = require("gulp-uglify");//压缩js
const babel = require("gulp-babel");//ES6转ES5
const connect = require("gulp-connect");
const sass = require("gulp-sass");

//制定任务
//压缩html
gulp.task("html", function(){
	gulp.src("src/**/*.html")
		.pipe(htmlmin({
			removeComments: true,//清除HTML注释
			collapseWhitespace: true,//压缩HTML
			collapseBooleanAttributes: true
		}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());
})

//取出js文件，ES6转ES5，再压缩
gulp.task("js", function(){
	gulp.src("src/js/**/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
		
})

//编译sass
//压缩css
gulp.task("css", function(){
	gulp.src("src/scss/**/*.scss")
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
}) 

//开启服务器
gulp.task("server", function(){
	//开启服务器
	connect.server({
		port:1809,
		livereload: true,
		root: "dist"
	})
})

//移动静态资源
gulp.task("static", function(){
	gulp.src("src/static/**/*")
		.pipe(gulp.dest("dist/static"))
		.pipe(connect.reload());
})

//移动libs
gulp.task("libs", function(){
	gulp.src("src/libs/**/*")
		.pipe(gulp.dest("dist/libs"));
})

//监听文件改变
gulp.task("watch", function(){
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("src/scss/**/*.scss", ["css"]);
	gulp.watch("src/js/**/*.js", ["js"]);
	
})

gulp.task("default",["html", "css", "js", "server", "watch", "static","libs"]);
