myApp.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $scope.petType = {};
    $scope.favorites = [];
    $scope.favoritesCount = 0;
    $scope.species = [
      { type: 'horse' },
      { type: 'cat' },
      { type: 'dog' },
      { type: 'pig' },
    ];

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
