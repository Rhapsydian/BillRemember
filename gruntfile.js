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
            },
            application: {
                files:['server.js','app/**/*.js'],
                tasks:['develop'],
                options: { nospawn: true }
            }
        },
        develop:{
            server:{
                file: 'server.js'
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-develop');
	
	grunt.registerTask('default',['concat', 'develop']);
};