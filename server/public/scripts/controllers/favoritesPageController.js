myApp.controller('favoritesPageController', ['$scope', '$http', function ($scope, $http) {
  $scope.favoriteCount = 0,
  $scope.favorites = [];

  getFavorites();

  function getFavorites() {
    $http.get('/favorites')
    .then(function (response) {
      $scope.favorites = _(response.data).sortBy('type').value();
      $scope.favoriteCount = $scope.favorites.length;

    });
  }

  $scope.deleteFavorite = function (id) {
    $http.delete('/favorites/' + id)
      .then(function (response) {
        console.log('DELETE /favorites ', id);
        getFavorites();
      });
  };

},
]);
