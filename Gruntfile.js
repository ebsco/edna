module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bootstrap: {
			js: [
				"bootstrap-dropdown.js"
			]
		},
		less: {
			compile: {
				options: {
					path: ["dna/, plus/, turbo/"],
					compress: true,
					yuicompress: true,
					optimization: 0,
					report: 'gzip'
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
					bases: '.',
					baseURL: '/examples'
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