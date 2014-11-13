module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 8030,
					host: 'http://localhost',
					bases: 'kss-docs/',
					debug: true
				}
			}
		},
		less: {
			base: {
				options: {
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'edna.css.map',
					sourceMapFilename: 'edna.css.map'
				},
				src: 'edna.less',
				dest: 'edna.css'
			},
			ieStyles: {
				options: {
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'edna.ie.css.map',
					sourceMapFilename: 'edna.ie.css.map'
				},
				src: 'edna.ie.less',
				dest: 'edna.ie.css'
			},
			kss: {
				options: {
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'edna.css.map',
					sourceMapFilename: 'kss-docs/public/edna.css.map'
				},
				src: 'edna.less',
				dest: 'kss-docs/public/edna.css'
			},
			kssIEStyles: {
				options: {
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'edna.ie.css.map',
					sourceMapFilename: 'kss-docs/public/edna.ie.css.map'
				},
				src: 'edna.ie.less',
				dest: 'kss-docs/public/edna.ie.css'
			}
		},
		cssmin: {
			default: {
				files: {
					'edna.min.css': 'edna.css',
					'edna.ie.min.css': 'edna.ie.css'
				}
			}
		},
		watch: {
			dev: {
				files: ['*.less', 'less/*.less', 'Gruntfile.js'],
				tasks: ['less:base', 'less:ieStyles'],
				options: {
					livereload: true
				}
			},
			dist: {
				files: ['*.less', 'less/*.less', 'Gruntfile.js'],
				tasks: ['less:base', 'less:ieStyles', 'cssmin'],
				options: {
					livereload: true
				}
			},
			kss: {
				files: ['**/*.less', 'less/styleguide.md'],
				tasks: ['kss', 'less:kss', 'less:kssIEStyles'],
			}
		},
		grunticon: {
			icons: {
				files: [{
					expand: true,
					cwd: 'grunticon/raw',
					src: ['*.svg'],
					dest: 'grunticon'
				}],
				options: {
					datasvgcss: 'css/icons.svg.css',
					datapngcss: 'css/icons.png.css',
					urlpngcss: 'css/icons.fallback.css',
					loadersnippet: 'js/grunticon.loader.js',
					template: 'grunticon/rule.hbs', // analyzecss task isn't compatible with default
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
			default: {
				options: {},
				src: ['edna.css']
			}
		},
		analyzecss: {
			default: {
				sources: ['edna.css', 'edna.ie.css', 'edna.min.css', 'edna.ie.min.css'],
				options: {
					outputMetrics: true,
					softFail: true // still defining thresholds
				}
			}
		},
		csslint: {
			default: {
				src: ['edna*.css'],
				options: {
					csslintrc: '.csslintrc'
				}
			}
		},
		kss: {
			default: {
				options: {
					template: 'kss-template'
				},
				files: {
					'kss-docs': ['less']
				}
			}
		},
		browserSync: {
			default: {
				bsFiles: {
					src: [
						'kss-docs/public/*.css',
						'kss-docs/*.html'
					]
				},
				options: {
					server: {
						baseDir: 'kss-docs'
					},
					host: 'localhost',
					port: 8030,
					watchTask: true
				}
			}
		},
		release: {
			main: {}
		}

	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-colorguard');
	grunt.loadNpmTasks('grunt-contrib-analyze-css');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eis-release');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-kss');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('kss-build', [
		'kss',
		'grunticon',
		'less:kss',
		'less:kssIEStyles',
	]);

	grunt.registerTask('kss-dev', [
		'kss-build',
		'browserSync',
		'watch:kss',
	]);

	grunt.registerTask('server', [
		'express',
		'grunticon',
		'less',
		'cssmin',
		'watch'
	]);

	grunt.registerTask('server-deploy', [
		'kss-build',
		'express',
		'express-keepalive'
	]);

	grunt.registerTask('colors', [
		'colorguard',
	]);

	grunt.registerTask('quality-check', [
		'csslint',
		'analyzecss'
	]);

	grunt.registerTask('build', [
		'grunticon',
		'less',
		'cssmin',
		'quality-check'
	]);

	grunt.registerTask('default', ['build']);
};
