module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		shell: {
			listFolders: {
				stdout: false,
				command: [
					'rm .git/hooks/pre-push'
				].join('&&')
			}
		},
		express: {
			server: {
				options: {
					port: 8030,
					host: 'http://localhost',
					bases: 'codeguide/',
					debug: true
				}
			}
		},
		less: {
			dev: {
				options: {
					path: ['less'],
					compress: false,
					dumpLineNumbers: true,
					sourceMap: false,
					report: 'min'
				},
				files: {
					'edna.css': 'edna.less',
					'edna.ie.css': 'edna.ie.less',
					'codeguide/edna.css': 'edna.less',
					'codeguide/edna.ie.css': 'edna.ie.less'					
				}
			},
			dist: {
				options: {
					path: ['less'],
					compress: true,
					cleancss: true
				},
				files: {
					'edna.min.css': 'edna.less',
					'edna.min.ie.css': 'edna.ie.less',
					'codeguide/edna.min.css': 'edna.less',
					'codeguide/edna.min.ie.css': 'edna.ie.less'					
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
		},
		csslint: {
			src: ['edna.css'],
			options: {
				"important": true,
				"adjoining-classes": false,
				"known-properties": true,
				"box-sizing": false,
				"box-model": false,
				"overqualified-elements": true,
				"display-property-grouping": true,
				"bulletproof-font-face": true,
				"compatible-vendor-prefixes": true,
				"regex-selectors": true,
				"errors": true,
				"duplicate-background-images": false,
				"duplicate-properties": true,
				"empty-rules": true,
				"selector-max-approaching": true,
				"gradients": true,
				"fallback-colors": true,
				"font-sizes": true,
				"font-faces": true,
				"floats": true,
				"star-property-hack": true,
				"outline-none": true,
				"import": false,
				"ids": 2,
				"underscore-property-hack": true,
				"rules-count": true,
				"qualified-headings": true,
				"selector-max": true,
				"shorthand": true,
				"text-indent": true,
				"unique-headings": true,
				"universal-selector": true,
				"unqualified-attributes": true,
				"vendor-prefix": true,
				"zero-units": true
			}
		},
		grunticon: {
			icons: {
				files: [{
					expand: true,
					cwd: 'grunticon/raw',
					src: ['*.svg', '*.png'],
					dest: 'grunticon'
				}],
				options: {
					datasvgcss: 'css/icons.svg.css',
					datapngcss: 'css/icons.png.css',
					urlpngcss: 'css/icons.fallback.css',
					loadersnippet: 'js/grunticon.loader.js',
					template: 'grunticon/default-css.hbs',
					defaultWidth: '100%',
					defaultHeight: '100%',
					pngfolder: 'png',
					pngpath: '../png',
					cssprefix: '.icon.svg-',
					colors: {
						light: '#ffffff',
						dark: '#000000'
					}
				}
			}
		},
		colorguard: {
			options: {},
			files: {
				src: ['edna.css'],
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-css-metrics');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-colorguard');

	grunt.registerTask('colors', [
		'less:dev',
		'colorguard',
		'cssmetrics'
	]);

	grunt.registerTask('lint', [
		'cssmetrics',
		'csslint'
	]);

	grunt.registerTask('codeguide', [
		'express',
		'less:codeguide',
		'watch:codeguide'
	]);

	grunt.registerTask('build', [
		'less',
		'lint',
		'grunticon'
	]);

	grunt.registerTask('server', [
		'express',
		'grunticon',
		'less',
		'watch'
	]);

	grunt.registerTask('server-deploy', [
		'grunticon',
		'less',
		'express',
		'express-keepalive'
	]);

};