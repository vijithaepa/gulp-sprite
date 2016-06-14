/**
 * Created by EPAV on 14/06/2016.
 */

var gulp                = require('gulp'),
    svgSprite           = require('gulp-svg-sprite');

// Basic configuration example
config                  = {
    mode                : {
        css             : {     // Activate the «css» mode
            render      : {
                css     : true  // Activate CSS output (with default options)
            }
        }
    }
};

gulp.task('lint', function () {
    gulp.src('**/*.svg', {cwd: 'src/svg'})
        .pipe(svgSprite(config))
        .pipe(gulp.dest('out'));
});

gulp.task('default', ['lint']);