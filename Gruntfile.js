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
					stylesheet: 'grunticon/skin.less',
					lessprefix: 'icon-'
				}
			}
		},
		colorguard: {
			options: {},
			files: {
				src: ['edna.css'],
			}
		},
		analyzecss: {
			prod: {
				sources: ['edna.css']
			},
			options: {
				outputMetrics: 'error',
			}
		},
		csslint: {
			default: {
				src: ['edna.css'],
				options: {
					csslintrc: '.csslintrc'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-colorguard');
	grunt.loadNpmTasks('grunt-contrib-analyze-css');

	grunt.registerTask('colors', [
		'less:dev',
		'colorguard',
	]);

	grunt.registerTask('codeguide', [
		'express',
		'less:codeguide',
		'watch:codeguide'
	]);

	grunt.registerTask('build', [
		'grunticon',
		'less',
		'csslint'
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