module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                src: "sass/style.scss",
                dest: "css/style.css"
            }
        },
        watch: {
            css: {
                files: ["sass/**/*.scss"],
                tasks: ["sass"],
                options: {
                    livereload: true,
                    debounceDelay: 2000
                }
            }
        },
        concat: {
            js: {
                src:["js/*.js"],
                dest:"js/build/production.js"
            }
        },
        uglify: {
            jsMin:{
                src:"js/build/production.js",
                dest:"js/build/production.min.js"
            }
        },
        cssmin: {
            cssMin:{
                src:"css/style.css",
                dest:"css/style.min.css"
            }
        },
        imagemin:{
            dynamic: {
                files: [{
                    expand: "true",
                    cwd: "img/",
                    src: ["**/*.{png,jpg,svg}"],
                    dest: "img/compressed/"
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('server', ['sass', 'watch']);
    grunt.registerTask('production', ['concat', 'uglify', 'cssmin']);
};