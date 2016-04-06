module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            default: {
                files: ['src/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    livereload: true,
                }
            }
        },

        connect: {
             server: {
                 options: {
                     hostname: 'localhost',
                     port: 9000,
                     base: 'dist/',
                     keepalive: true,
                     open: true
                 }
             }
         },

        concat: {
          options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
          },
          dist: {
            // the files to concatenate
            src: ['src/vendor/*.js',
                  'src/app.js',
                  'src/directives/*.js',
                  'src/controllers/*.js',
                  'src/services/*.js'
                  ],
            // the location of the resulting JS file
            dest: 'dist/js/script.js'
          }
        },

        // Run all watch tasks AT THE SAME TIME!!!
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            default: {
                tasks: ['watch','connect']
            }
        },

        uglify: {
          dist: {
            files: {
              'dist/js/script.min.js': ['dist/js/script.js']
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['concurrent']);

};
