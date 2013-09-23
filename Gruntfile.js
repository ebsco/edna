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
			compile: {
				options: {
					path: ["dna/, plus/, turbo/"]
				},
				files: {
					"edna.css": "edna.less"
				}
			}
		},
		watch: {
			css: {
				files: ["*.less", "dna/*.less", "plus/*.less", "turbo/*.less", "examples/*.html"],
				tasks: ["less"],
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
		edna_theme_compile: {
			compile: {
				options: {
					test: true
				},
				files: {
					src: "_theme.less",
					dest: "theme.less"
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-md2html');
	grunt.loadTasks('tasks');

	grunt.registerTask("compile", [
		"md2html",
		"less"
	]);

	grunt.registerTask("server", [
		"express",
		"watch"
	]);

};