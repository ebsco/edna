module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			options: {
				host: 'http://localhost',
				bases: '.',
				// server: path.resolve('./express'),

				debug: true,
				baseUrl: '.'
			},
			server: {
				options: {
					port: 8010
				}
			}
		},
		md2html: {
			dist: {
				options: {},
				files: [
					{
						src: ["*.md"],
						dest: "examples/readme.html"
					}
				]
			}
		},
		less: {
			dev: {
				options: {
					path: ["dna/", "plus/"],
					compress: false,
					dumpLineNumbers: true,
					sourceMap: true
				},
				files: {
					"edna.css": "edna.less",
					"plus/plus.css": "plus/plus.less"
				}
			},
			dist: {
				options: {
					path: ["dna/", "plus/"],
					compress: true,
					dumpLineNumbers: false,
					yuicompress: true,
					report: 'gzip'
				},
				files: {
					"edna.min.css": "edna.less",
					"plus/plus.min.css": "plus/plus.less"
				}
			}
		},
		watch: {
			dev: {
				files: ["*.less", "dna/*.less", "examples/*.html", "Gruntfile.js", "plus/*.less"],
				tasks: ["less:dev"],
				options: {
					livereload: true
				}
			},
			dist: {
				files: ["*.less", "dna/*.less", "examples/*.html", "Gruntfile.js", "plus/*.less"],
				tasks: ["less:dist"],
				options: {
					livereload: true
				}
			},
			markdown: {
				files: ["*.md"],
				tasks: ["md2html"],
				options: {
					livereload: true
				}
			}
		},

		lesslint: {
			src: ["edna.less","plus/plus.less"],
			options: {
				// imports: ["edna.less","plus/plus.less", "dna/content-styles.less","dna/forms.less"],
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
	grunt.loadNpmTasks('grunt-md2html');
	grunt.loadNpmTasks('grunt-lesslint')

	grunt.registerTask("dev", [
		"md2html",
		"less",
		"lesslint"
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
		"lesslint",
		"watch"
	]);

};