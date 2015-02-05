var fs = require('fs');

var gulp = require('gulp');
var data = require('gulp-data');
var jst = require('gulp-jst');
var template = require('gulp-template');

gulp.task('jst', function () {
  gulp.src('src/jst/*.jst')
      .pipe(jst())
      .pipe(gulp.dest('dist/jst'));
});

var defaultTasks = ['jst'];

// Define template:lean_canvas and template:kpt tasks.
['lean_canvas', 'kpt'].forEach(function (name) {
  var taskName = 'template:' + name;

  defaultTasks.push(taskName);

  gulp.task(taskName, function () {
    gulp.src('src/js/' + name + '.js')
        .pipe(data(function (file) {
          var fname = file.path.split('/').pop();
          return { template: fs.readFileSync('dist/jst/' + fname) };
        }))
        .pipe(template())
        .pipe(gulp.dest('dist/js'));
  });
});

defaultTasks.push('template:problem_solution_canvas');
gulp.task('template:problem_solution_canvas', function () {
  gulp.src('src/js/problem_solution_canvas.js')
      .pipe(data(function () {
        return {
          templateP1: fs.readFileSync('dist/jst/problem_solution_canvas_p1.js'),
          templateP2: fs.readFileSync('dist/jst/problem_solution_canvas_p2.js')
        };
      }))
      .pipe(template())
      .pipe(gulp.dest('dist/js'));
});

defaultTasks.push('template:html');
gulp.task('template:html', function () {
  gulp.src('src/html/index.html')
      .pipe(data(function () {
        return {
          leanCanvasHTML: fs.readFileSync('dist/html/lean_canvas.html'),
          leanCanvasMarkdown: fs.readFileSync('src/markdown/lean_canvas.md'),
          kptHTML: fs.readFileSync('dist/html/kpt.html'),
          kptMarkdown: fs.readFileSync('src/markdown/kpt.md'),
          pscHTML: fs.readFileSync('dist/html/problem_solution_canvas.html'),
          pscMarkdown: fs.readFileSync('src/markdown/problem_solution_canvas.md')
        };
      }))
      .pipe(template())
      .pipe(gulp.dest('./'));
});

gulp.task('default', defaultTasks);
