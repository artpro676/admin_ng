var app = angular.module('admin', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/dashboard', {
      templateUrl: 'templates/dashboard.html'
    })
    .when('/tags', {
      templateUrl: 'templates/tags.html'
    })
    .when('/newarticle', {
      templateUrl: 'templates/newarticle.html'
    })
    .when('/approved', {
      templateUrl: 'templates/approved.html'
    })
    .when('/unapproved', {
      templateUrl: 'templates/unapproved.html'
    })
    .when('/viewarticle', {
      templateUrl: 'templates/viewarticle.html'
    })
    .when('/users', {
      templateUrl: 'templates/users.html',
        controller:'usersController'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html'
    })
    .otherwise('/dashboard', {
      templateUrl: 'templates/dashboard.html'
    });
}]);

app.controller('usersController',['$scope','$http',function(scope,http){
  http.get('resource/users.json').success(function(data){
    scope.users = data;
  });
}]);