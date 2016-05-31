myApp.controller('favoritesPageController', ['$scope', '$http', function ($scope, $http) {
  $scope.favoriteCount = 0,
  $scope.favorites = [];

  getFavorites();

  function getFavorites() {
    $http.get('/favorites')
    .then(function (response) {
      $scope.favorites = response.data;
      $scope.favoriteCount = $scope.favorites.length;
      console.log('GET /favorites ', response.data, $scope.favorites[0]);

    });
  }
},
]);
