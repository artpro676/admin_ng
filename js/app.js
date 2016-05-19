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
      templateUrl: 'templates/viewarticle.html',
        controller:'articleController'
    })
      .when('/viewarticle/:articleId', {
        templateUrl: 'templates/showarticle.html',
        controller:'viewArticleController'
      })
    .when('/users', {
      templateUrl: 'templates/users.html',
        controller:'usersController'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html'
    })

    .otherwise( {
      redirectTo:'/'
    });
}]);

app.controller('usersController',['$scope','$http','$location',function(scope,http,location){
  http.get('resource/users.json').success(function(dataUsers){
    scope.users = dataUsers;
  });
}]);

app.controller('articleController',['$scope','$http','$location',function(scope,http){
  http.get('resource/articles.json').success(function(dataArticles){
    scope.articles = dataArticles;

});
}]);

app.controller('viewArticleController',['$scope','$http','$location','$routeParams', function($scope,$http,$routeParams,$location){
$scope.articleId = $routeParams.articleId;
  var url = 'resource/articles.json';
  $http.get(url).success(function(data){
    $scope.article = data;
  });
}]);
