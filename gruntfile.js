/**
 * compile, concat and minify assets
 */

module.exports = function( grunt ) {

  grunt.initConfig({

    less: {
      admin: {
        files: {
          './css/admin.css': './less/admin.less'
        }
      }
    }

  })

  grunt.loadNpmTasks( 'grunt-contrib-less' );

}