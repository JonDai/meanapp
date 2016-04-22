module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //编译less
    less:{
      //开发模式
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          './app/styles/main.css': './app/styles/main.less'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('outputcss',['less']);
};