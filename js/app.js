var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'CravingController',
        templateUrl: 'views/setup.html'
      })
    .otherwise({ redirectTo: '/' });
}]);

