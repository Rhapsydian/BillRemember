module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			controllers: {
				src: 'public/js/controllers/*.js',
				dest: 'public/js/appControllers.js'
			},
			services: {
				src: 'public/js/services/*.js',
				dest: 'public/js/appServices.js'
			}
		}	
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default',['concat']);
};