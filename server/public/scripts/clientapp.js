var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'homeController',
    })
    .when('/dog', {
      templateUrl: '/views/dogs.html',
      controller: 'dogsController',
    })
    .when('/cat', {
      templateUrl: '/views/cats.html',
      controller: 'catsController',
    })
    .when('/horse', {
      templateUrl: '/views/horse.html',
      controller: 'horseController',
    })
    .when('/pig', {
      templateUrl: '/views/pigs.html',
      controller: 'pigsController',
    })
    .when('/shelters', {
      templateUrl: '/views/shelters.html',
      controller: 'sheltersController',
    })
    .when('/favoritesPage', {
      templateUrl: '/views/favoritesPage.html',
      controller: 'favoritesPageController',
    })
    .otherwise({
      redirectTo: 'home',
    });
},
]);
