// top func 'task,src,dest,watch'
const gulp =require('gulp')
const sass=require('sass')
const gulpSass=require('gulp-sass')
const compile=gulpSass(sass)

gulp.task('sass', async function(){
    gulp.src('index.scss').pipe(compile()).pipe(gulp.dest('css'))
})





gulp.task('log',function(){
    console.log("gulllp");
  
})
gulp.task('move',function(){
    gulp.src('css1/*.css').pipe(gulp.dest('css2'))
})
gulp.task("watching",function(){
    gulp.watch('css1/style.css',function(){
        gulp.src('css1/*.css').pipe(gulp.dest('css2'))
    })
})