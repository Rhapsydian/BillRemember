angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		}); //remove semi-colon from this line when you add more routes
/*
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})
*/

	$locationProvider.html5Mode(false).hashPrefix('!');

}]);