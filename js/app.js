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
      templateUrl: 'templates/users.html'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html'
    })
    .otherwise('/dashboard', {
      templateUrl: 'templates/dashboard.html'
    });
}]);
