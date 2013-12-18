/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      scripts: {
        options: {},
        dist: {
          src: ['app/components/jquery/jquery.min.js', 
                'app/components/underscore/underscore.js', 
                'app/components/bootstrap/dist/js/bootstrap.min.js',
                'app/components/angular/angular.js',
                'app/components/angular-route/angular-route.js',
                'app/components/angular-cookies/angular-cookies.js',
                'app/components/angularLocalStorage/src/angularLocalStorage.js',
                'app/components/angular-underscore-module/angular-underscore-module.js',
                'app/main.js',
                'app/controllers.js',
                'app/services.js'],
          dest: 'app/dist/all.js'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          'app/dist/all.min.js': ['app/dist/all.js']
        }
      }
    },
   connect: {
     default: {
       port: 1337,
       base: 'app'
     }
   } 
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-connect');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify']);

};
