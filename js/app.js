var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
              {
                  controller: 'CravingController',
                  templateUrl: 'views/craving.html'
              })
        .when('/notokay',
               {
                   controller: 'CravingController',
                   templateUrl: 'views/notokay.html'
               })
	.when('/okay',
	      {
		  controller: 'CravingController',
		  templateUrl: 'views/okay.html'
	      })
        .otherwise({ redirectTo: '/' });
}]);

