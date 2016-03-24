module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
			}
		},
		cssmin: {
			default: {
				files: {
					'edna.min.css': 'edna.css'
				}
			}
		},
		grunticon: {
			options: {
				datasvgcss: 'css/icons.svg.css',
				datapngcss: 'css/icons.png.css',
				urlpngcss: 'css/icons.fallback.css',
				loader: true,
				loadersnippet: 'js/grunticon.loader.js',
				template: 'grunticon/rule.hbs', // analyze task isn't compatible with default
				defaultWidth: '100%',
				defaultHeight: '100%',
				pngfolder: 'png',
				pngpath: '../png',
				cssprefix: '.icon.svg-',
				stylesheet: 'grunticon/skin.less',
				lessprefix: 'icon-'
			},
			default: {
				files: [{
					expand: true,
					cwd: 'grunticon/raw',
					src: ['*.svg'],
					dest: 'grunticon'
				}]
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
				sources: ['edna.css', 'edna.min.css'],
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
		}

	});

	grunt.loadNpmTasks('grunt-colorguard');
	grunt.loadNpmTasks('grunt-contrib-analyze-css');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('build', function(mode) {
		var tasksToRun = [];

		tasksToRun = tasksToRun.concat([
			'less',
			'cssmin'
		]);
		if (grunt.option('grunticon')) {
			tasksToRun = tasksToRun.concat([
				'grunticon:default',
			]);
		}
		if (grunt.option('lint')) {
			tasksToRun = tasksToRun.concat([
				'csslint',
				'analyzecss'
			]);
		}
		if (grunt.option('color')) {
			tasksToRun = tasksToRun.concat([
				'colorguard'
			]);
		}

		grunt.task.run(tasksToRun);
	});

};
