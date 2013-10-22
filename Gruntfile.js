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
			one_file: {
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
					path: ["dna/"],
					compress: false,
					dumpLineNumbers: true
				},
				files: {
					"edna.css": "edna.less"
				}
			},
			edna: {
				options: {
					path: ["dna/"],
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
			edna: {
				files: ["*.less", "dna/*.less", "examples/*.html"],
				tasks: ["less:edna"],
				options: {
					livereload: true
				}
			},
			plus: {
				files: ["*.less", "plus/*.less","examples/*.html"],
				tasks: ["less:plus"],
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

	grunt.registerTask("compile", [
		"md2html",
		"less"
	]);

	grunt.registerTask("server", [
		"express",
		"watch"
	]);

	grunt.registerTask("min", [
		"less:edna"
	]);

};