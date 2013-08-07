module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bootstrap: {
			dest: 'examples',
			js: [
				"bootstrap-dropdown.js",
				// "bootstrap-transition.js",
				// "bootstrap-modal.js",
				// "bootstrap-dropdown.js",
				// "bootstrap-scrollspy.js",
				// "bootstrap-tab.js",
				// "bootstrap-tooltip.js",
				// "bootstrap-popover.js",
				// "bootstrap-affix.js",
				// "bootstrap-alert.js",
				// "bootstrap-button.js",
				// "bootstrap-collapse.js",
				"bootstrap-carousel.js"
				// "bootstrap-typeahead.js"

			]
		},
		less: {
			compile: {
				options: {
					path: ["dna/, plus/, turbo/"]
				},
				files: {
					"examples/dna.css": "dna/dna.less"
				}
			}
		},
		express: {
			server: {
				options: {
					port: 8001,
					bases: "examples"
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
		watch: {
			css: {
				files: ["dna/*.less", "plus/*.less", "turbo/*.less"],
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
		}


	});

	grunt.loadNpmTasks('grunt-bootstrap');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-md2html');
	
	grunt.registerTask("compile", [
		"md2html",
		"less",
		"bootstrap"
	]);

	grunt.registerTask("server", [
		"express",
		"watch"
		// "express-keepalive"
	]);
	
};