var appname = "appx-template";
var devFiles = ['appx/app.js',
          'appx/controllers/**/*.js',
          'appx/directives/**/*.js',
          'appx/filters/**/*.js'
        ];
var ngTemplates = {};
ngTemplates[appname] = {
  src: ['app/templates/**/*.html'],
  dest: 'templates.js'
};

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      dev: { src: devFiles }
    },
    concat: {
      dev: {
        src: ['appx/app.js', 
          'appx/directives/**/*.js',
          'appx/filters/**/*.js',
          'appx/controllers/**/*.js', 
          'templates.js'],
        dest: appname + '.js'
      }
    },
    connect: {
      server: {
        options: {
          base: '.',
          port: 3000
        }
      }
    },
    watch: {
      dev: {
        files: devFiles,
        tasks: ['jshint', 'ngtemplates', 'concat']
      }
    },
    ngtemplates: ngTemplates,
    ngmin: {
      dist: {
         src: appname + '.js',
         dest: 'dist/' + appname + '.js'
      }
    },
    uglify: {
      dist: {
        src: 'dist/' + appname + '.js',
        dest: 'dist/' + appname + '.min.js'
      }
    },
    bump: {
      options: {
        files: ['package.json','bower.json'],
        pushTo: 'origin'
      }
    },
    karma: {
      unit: {
        options: {
          frameworks: ['jasmine'],
          files: [
            'components/angular/angular.js',
            'components/angular-mocks/angular-mocks.js', 
            appname + '.js', 'test/**/*.js'],
          singleRun: true,
          browsers: ['PhantomJS']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('default', ['jshint', 'ngtemplates', 'concat']);
  grunt.registerTask('dist', ['jshint', 'karma:unit', 'ngtemplates', 
    'concat', 'ngmin', 'uglify', 'bump']);
}