const gulp=require('gulp')
const gulpSass= require('gulp-sass')
const sass=require('sass')
const compiler=gulpSass(sass)

// gulp.task('sass',async function(){
  
//     gulp.src('src/components/**/*.scss').pipe(compiler()).pipe(gulp.dest('src/css'))
  
// })
gulp.task("watch",async function(){
    gulp.watch('src/components/**/*.scss',async function(){
         gulp.src('src/components/**/*.scss').pipe(compiler()).pipe(gulp.dest('src/css'))})
})