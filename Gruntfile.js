module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			options: {
				host: 'http://localhost',
				bases: '.',

				debug: true,
				baseUrl: '.'
			},
			server: {
				options: {
					port: 8010
				}
			}
		},
		less: {
			dev: {
				options: {
					path: ["less/"],
					compress: false,
					dumpLineNumbers: true,
					sourceMap: true
				},
				files: {
					"edna.css": "edna.less"
				}
			},
			dist: {
				options: {
					path: ["less/"],
					compress: true,
					dumpLineNumbers: false,
					yuicompress: true,
					report: 'gzip'
				},
				files: {
					"edna.min.css": "edna.less"
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