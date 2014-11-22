/**
 * compile, concat and minify assets
 */

var _ = require( 'underscore' );
var loadGruntTasks = require( 'load-grunt-tasks' );
var pkg = require( './package.json' );

function ejsPageList() {

  var result = {};

  pkg.ejs.pages.forEach(function( page ) {
    result[ page ] = {
      src: [ 'ejs/pages/{page}.ejs'.replace( /{page}/, page ) ],
      dest: 'dist/pages/{page}.html'.replace( /{page}/, page )
    }
  });

  return result;
}

module.exports = function( grunt ) {

  grunt.initConfig({

    less: {
      admin: {
        files: {
          './css/admin.css': './less/admin.less'
        }
      }
    },

    ejs: _.extend( ejsPageList(), {})

  })

  loadGruntTasks( grunt );
}