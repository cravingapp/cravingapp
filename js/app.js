var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/setup',
      {
        controller: 'CravingController',
        templateUrl: 'views/setup.html'
      })
    .when('/events',
      {
        controller: 'MeetupController',
        templateUrl: 'views/meetup.html'
      })
    .otherwise({ redirectTo: '/' });
}]);

