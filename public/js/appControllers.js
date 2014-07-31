angular.module('GeekCtrl', []).controller('GeekController', function($scope) {

	$scope.tagline = 'The square root of life is pi!';	

});
angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';	

});
angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

	$scope.tagline = 'Nothing beats a pocket protector!';

});