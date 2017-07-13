var gulp = require("gulp");
var connect = require("gulp-connect");
var less = require("gulp-less");
// gulp.task("task1",["task2"],function(){

// });
//转移html文件
gulp.task("html",function() {
    gulp.src("./src/*.html")
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist"));//管道函数吧index文件流写到里面
});

//监听文件
gulp.task("watch",function() {
    gulp.watch("./src/*.html",["html"]);
    gulp.watch("./src/css/*.less",["less"]);
    gulp.watch("./src/js/*.js",["js"])
});
//开服务器
gulp.task("server",function() {
    connect.server({
        // port:8090//更改服务器端口
        livereload:true,//实时更新
    })
});
//转换less到css
gulp.task("less",function() {
    gulp.src("./src/css/*.less")
    .pipe(less())//调用less函数
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/css"));
});
gulp.task("js",function() {
    gulp.src("./src/js/*.js")
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist/js"))
});
//触发任务
gulp.task("default",["html","js","watch","server","less"]);
