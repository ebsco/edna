module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bootstrap: {
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
					bases: 'examples'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bootstrap');
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');
	
	grunt.registerTask("compile", [
		"bootstrap",
		"less"
	]);

	grunt.registerTask("server", [
		"express",
		"express-keepalive"
	]);
	
};