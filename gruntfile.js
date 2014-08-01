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
		},
        watch:{
            scripts:{
                files:['public/js/controllers/*.js','public/js/services/*.js'],
                tasks:['concat']
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['concat', 'watch']);
};