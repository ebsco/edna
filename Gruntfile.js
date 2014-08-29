module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		shell: {
			listFolders: {
				stdout: false,
				command: [
					'./pre-push.sh'
				].join('&&')
			}
		},
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
					path: ['less'],
					compress: false,
					dumpLineNumbers: true,
					sourceMap: false
				},
				files: {
					'edna.css': 'edna.less',
					'edna.ie.css': 'edna.ie.less'
				}
			},
			dist: {
				options: {
					path: ['less'],
					compress: true,
				},
				files: {
					'edna.min.css': 'edna.less',
					'edna.min.ie.css': 'edna.ie.less'
				}
			},
			codeguide: {
				options: {
					path: ['less'],
					compile: true
				},
				files: {
					'codeguide/styles/codeguide.css': [ 'codeguide/styles/codeguide.less' ]
				}
			}
		},
		watch: {
			dev: {
				files: ['*.less', 'less/*.less', 'Gruntfile.js'],
				tasks: ['less:dev'],
				options: {
					livereload: true
				}
			},
			dist: {
				files: ['*.less', 'less/*.less', 'Gruntfile.js'],
				tasks: ['less:dist'],
				options: {
					livereload: true
				}
			},
			codeguide: {
				files: ['*.less', 'less/*.less', 'codeguide/*.html', 'codeguide/*.less', 'codeguide/styles/*.less', 'codeguide/scripts/*.js'],
				tasks: ['less:codeguide'],
				options: {
					livereload: true
				}
			}
		},
		lesslint: {
			src: ['edna.less'],
			options: {
				imports: [
					'less/*.less',
					'!less/_autocomplete.less',
					'!less/_mixins.less',
					'!less/_modal.less',
					'!less/_normalize.less'
				],
				csslint: {
					'important': true,
					'adjoining-classes': false,
					'known-properties': false,
					'box-sizing': true,
					'box-model': false,
					'overqualified-elements': true,
					'display-property-grouping': false,
					'bulletproof-font-face': false,
					'compatible-vendor-prefixes': false,
					'regex-selectors': false,
					'errors': false,
					'duplicate-background-images': false,
					'duplicate-properties': true,
					'empty-rules': false,
					'selector-max-approaching': false,
					'gradients': false,
					'fallback-colors': false,
					'font-sizes': false,
					'font-faces': false,
					'floats': true,
					'star-property-hack': false,
					'outline-none': false,
					'import': false,
					'ids': false,
					'underscore-property-hack': false,
					'rules-count': false,
					'qualified-headings': false,
					'selector-max': false,
					'shorthand': false,
					'text-indent': false,
					'unique-headings': false,
					'universal-selector': false,
					'unqualified-attributes': false,
					'vendor-prefix': true,
					'zero-units': true
				}
			}
		},
		cssmetrics: {
			dev: {
				src: [
					'edna.css',
					'edna.min.css',
					'edna.ie.css',
					'edna.min.ie.css'
				],
				options: {
					quiet: false,
					maxSelectors: 4096,
					maxFileSize: 1024000
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-lesslint');
	grunt.loadNpmTasks('grunt-css-metrics');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('lint', [
		'cssmetrics',
		'lesslint'
	]);

	grunt.registerTask('codeguide', [
		'express',
		'less:codeguide',
		'watch:codeguide'
	]);


	grunt.registerTask('build', [
		'shell',
		'lint',
		'less'
	]);

	grunt.registerTask('server', [
		'express',
		'less',
		'watch'
	]);

};