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

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			}
		},

		lesslint: {
			src: ['edna.less'],
			options: {
				imports: ['less/*.less', '!less/_mixins.less', '!less/_normalize.less']
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

		cssusage: {
			options: {},
			files: {
				src: ['codeguide/index.html'],        
				css: ['*.css']
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
	grunt.registerTask('default', [
		'shell:greet:hello'
	]);


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