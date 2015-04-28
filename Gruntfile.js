module.exports = function (grunt) {

	grunt.initConfig({
		pkg: {
			name: 'Doctor Finder'
		},
		concat: {
			vendor: {
				options: {
					separator: ';\n',
					banner: '/*==========================================\n' +
						' [ <%= pkg.name %> Vendor ] Built: <%= grunt.template.today("mmm dS, yyyy - h:MMTT") %>\n' +
						' ==========================================*/\n\n'
				},
				src: [
					'src/js/vendor/angularjs/1.3.15/angular.min.js',
					'src/js/vendor/angularjs/1.3.15/angular-animate.min.js',
					'src/js/vendor/angularjs/1.3.15/angular-route.min.js'
				],
				dest: 'wwwroot/js/vendor.min.js'
			},
			vitals_components: {
				options: {
					separator: ';\n'
				},
				src: [
					'src/js/vitals/components/module.js',
					'src/js/vitals/components/*.js',
					'src/js/vitals/components/*/*.js'
				],
				dest: 'temp/vitals.components'
			},
			vitals_apps_doctor_finder: {
				options: {
					separator: ';\n'
				},
				src: [
					'src/js/vitals/apps/doctor-finder/module.js',
					'src/js/vitals/apps/doctor-finder/*.js',
					'src/js/vitals/apps/doctor-finder/*/*.js'
				],
				dest: 'temp/vitals.apps.doctor-finder'
			}
		},
		uglify: {
			options: {
				banner: '/*==========================================\n' +
					' [ <%= pkg.name %> JS ] Built: <%= grunt.template.today("mmm dS, yyyy - h:MMTT") %>\n' +
					' ==========================================*/\n\n'
			},
			vitals_components: {
				src: 'temp/vitals.components',
				dest: 'wwwroot/js/vitals.components.min.js'
			},
			vitals_apps_doctor_finder: {
				src: 'temp/vitals.apps.doctor-finder',
				dest: 'wwwroot/js/vitals.apps.doctor-finder.min.js'
			}
		},
		cssmin: {
			add_banner: {
				options: {
					banner: '/* Vitals Doctor Finder CSS */'
				},
				files: {
					'wwwroot/css/styles.min.css': [
						'src/css/normalize.css',
						'src/css/styles.css'
					]
				}
			}
		},
		clean: {
			min_js: ['wwwroot/js/*.min.js'],
			temp:['temp']
		},
		autoprefixer: {
			options: {
				// more at https://github.com/ai/autoprefixer#browsers
				browsers: ['last 3 versions']
			},
			dist: {
				files: [{
					src: 'wwwroot/css/styles.min.css',
					dest: 'wwwroot/css/styles.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ssh');

	/**
	 * Default task: grunt
	 */
	grunt.registerTask('default', [
		'clean:min_js',
		'concat',
		'uglify:vitals_components',
		'uglify:vitals_apps_doctor_finder',
		'cssmin',
		'autoprefixer',
		'clean:temp'
	]);
};