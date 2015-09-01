var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      all: {
        files: [{
          expand: true,
          cwd: 'src/sass/',
          src: ['*.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    serve: {
      'path': path.join(__dirname, 'dist/')
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
};

