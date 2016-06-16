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

app.controller('usersController',['$scope','$http','$location',function($scope,$http,$location){
  $http.get('resource/users.json').success(function(data){
    $scope.users = data;
    $scope.addNewUser = function(){
      $scope.users.push({
        userName: $scope.newUserName,
        city: $scope.newUserCity

      });
      $scope.newUserName = "";
      $scope.newUserCity = "";
    };
  });
}]);

app.controller('articleController',['$scope','$http','$location',function($scope,$http,$location){
  $http.get('resource/articles.json').success(function(data){
    $scope.articles = data;

});
}]);

app.controller('viewArticleController',['$scope','$http','$location','$routeParams', function($scope,$http,$routeParams){
    $scope.content = $routeParams.articleId;
 var url = 'resource/articles.json';
 $http.get(url).success(function(data){
     $scope.articles = data;
 });

}]);

app.directive('userForm', function(){
  return{
    restrict:'E',
    templateUrl:"directives/user-form.html"
  };
});

