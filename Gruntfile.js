module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 8001
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
					dumpLineNumbers: true
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
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-md2html');

	grunt.registerTask("dev", [
	]);

	grunt.registerTask("dist", [
		"md2html",
		"less"
	]);

	grunt.registerTask("server", [
		"express",
		"md2html",
		"less:dev",
		"watch:dev"
	]);

};