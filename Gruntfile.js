module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		shell: {
			listFolders: {
				stdout: false,
				command: 'rm .git/hooks/pre-push'
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
			codeguide: {
				options: {
				},
				src: 'codeguide/styles/codeguide.less',
				dest: 'codeguide/styles/codeguide.css'
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
				}			}
		},
		csslint: {
			default: {
				src: ['edna*.css'],
				options: {
					csslintrc: '.csslintrc'
				}
			}
		},
		release: {
			main: {}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-colorguard');
	grunt.loadNpmTasks('grunt-contrib-analyze-css');
	grunt.loadNpmTasks('grunt-eis-release');

	grunt.registerTask('codeguide', [
		'express',
		'less:codeguide',
		'watch:codeguide'
	]);

	grunt.registerTask('server', [
		'express',
		'grunticon',
		'less',
		'cssmin',
		'watch'
	]);

	grunt.registerTask('server-deploy', [
		'grunticon',
		'less',
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
