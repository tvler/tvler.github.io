

module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),

      uncss: {
        options: {
          report: 'gzip'
        },
        dist: {
          files: {
            'test.css': ['index.html', 'about/index.html', 'kcpr/indes.html', 'pizza-club/index.html', 'pizza-club/app/index.html', 'pizza-club/hack/index.html', 'pizza-club/hack/event.html', 'pizza-club/hack/profile.html']
          }
        }
      }

   });

   grunt.loadNpmTasks('grunt-uncss');
   grunt.registerTask('default', ["uncss"]);
};
