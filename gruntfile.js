/**
 * compile, concat and minify assets
 */

var _ = require( 'underscore' );
var loadGruntTasks = require( 'load-grunt-tasks' );
var pkg = require( './package.json' );

function joaderFactory( name, price, pic ) { return { name: name, price: price, pic: pic } }

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
                    , jouderList: [
                          new joaderFactory( 'Alaa Ahmad', '20', 'avatar' )
                        , new joaderFactory( 'Samera Mahmood', '12', 'avatar2' )
                        , new joaderFactory( 'Soha Abdullah', '9', 'avatar3' )
                        , new joaderFactory( 'Ahmad Sabri', '10', 'avatar04' )
                    ]
                    , job: {
                          title: 'bring my laptop from Al Qusais'
                        , details: ''
                    }
                    , altJob: {
                        title: 'collect test result from Latifa Hospital'
                        , details: ''
                    }
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