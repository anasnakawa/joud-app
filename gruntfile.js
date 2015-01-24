/**
 * compile, concat and minify assets
 */

var _ = require( 'underscore' );
var loadGruntTasks = require( 'load-grunt-tasks' );
var pkg = require( './package.json' );

module.exports = function( grunt ) {

    grunt.initConfig({

        less: {
            admin: {
                files: {
                    './css/admin.css': './less/admin.less'
                }
            }
        },

        ejs: {
            all: {
                src: [ './ejs/**/*.ejs', '!./ejs/base/**/*.ejs', '!./ejs/partials/**/*.ejs' ]
                , dest: './'
                , expand: true
                , flatten: true 
                , ext: '.html'
                , options: {
                    jsFiles: []
                    , jsFilesBefore: []
                    , cssFiles: []
                }
            }
        },

        watch: {
            ejs: {
                files: [ '**/*.ejs' ],
                tasks: [ 'ejs' ]
            },
            less: {
                files: [ './less/**/*.less' ],
                tasks: [ 'less' ]
            }
        }

    })

    require( 'load-grunt-tasks' )( grunt );
}