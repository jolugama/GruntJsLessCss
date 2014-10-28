module.exports = function(grunt) {
  //definir las tareas
  grunt.initConfig({
    jshint: { //revisor errores javascript
      all: ['js/mijs1.js','js/mijs2.js']
    },
    uglify: { //minificado javascript
      misjs: {
        files: {
          'js/union.min.js': ['js/mijs.js', 'js/mijs2.js']
        }
      }
    },

    less: {
      app: {
       files: {"css/main.css": "less/main.less"}
     }
   },
   cssmin: {  //minificado css
    minify: {
      expand: true,
      cwd: 'css/',
      src: ['*.css', '!*.min.css'],
      dest: 'css/',
      ext: '.min.css'
    }
  },
  watch: { //vigila, con grunt watch y automatiza los cambios de javascript y css y los minifica.
    styles: {
     files: ["less/**/*.less","js/**/*.js"],
     tasks: ["less:app","cssmin:minify","uglify:misjs","jshint:all"],
     options: {spawn: false}
   }
 }

});  
  //para cargar los plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  //registrar los plugins a las tareas por defecto. si ejecuto grunt ejecuta por orden los siguientes plugins.
  grunt.registerTask('default',['jshint','less','uglify','cssmin','watch']);
};