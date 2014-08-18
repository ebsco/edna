module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 8010,
					host: 'http://localhost',
					bases: 'codeguide/',
					debug: true,
					baseUrl: '.'
				}
			}
		},
		less: {
			dev: {
				options: {
					path: ["less"],
					compress: false,
					dumpLineNumbers: true,
					sourceMap: false
				},
				files: {
					"edna.css": "edna.less",
					"edna.ie.css": "edna.ie.less"
				}
			},
			dist: {
				options: {
					path: ["less"],
					compress: true,
					dumpLineNumbers: false,
					yuicompress: true,
					report: 'gzip'
				},
				files: {
					"edna.min.css": "edna.less",
					"edna.min.ie.css": "edna.ie.less"
				}
			},
			codeguide: {
				options: {
					path: ["less"],
					compile: true
				},
				files: {
					"codeguide/styles/edna.css": [ "codeguide/styles/codeguide.less" ]
				}
			}
		},
		watch: {
			dev: {
				files: ["*.less", "less/*.less", "Gruntfile.js"],
				tasks: ["less:dev"],
				options: {
					livereload: true
				}
			},
			dist: {
				files: ["*.less", "less/*.less", "Gruntfile.js"],
				tasks: ["less:dist"],
				options: {
					livereload: true
				}
			},
			codeguide: {
				files: ["*.less", "less/*.less", "codeguide/*.html", "codeguide/*.less", "codeguide/styles/*.less", "codeguide/scripts/*.js"],
				tasks: ["less:codeguide"],
				options: {
					livereload: true
				}
			}
		},

		lesslint: {
			src: ["edna.less"],
			options: {
				formatters: {
					id: "csslint-xml",
					dest: "lesslint.xml"
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('assemble-less');


	grunt.registerTask("codeguide", [
		"less:codeguide",
		"watch:codeguide"
	]);


	grunt.registerTask("build", [
		"less"
	]);

	grunt.registerTask('goodserver', function() {
		grunt.task.run('express');
		grunt.task.run('less');
		grunt.task.run('watch');
		grunt.task.run('lesslint');
	});

	grunt.registerTask("server", [
		"express",
		"less",
		"watch"
	]);

};