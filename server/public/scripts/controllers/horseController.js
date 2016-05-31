myApp.controller('horseController', ['$scope', '$http', function ($scope, $http) {
    var key = '92fe96ed8057563857e54705108f9735';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function () {
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=horse';
      query += '&output=basic';
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

      console.log(request);

      $http.jsonp(request).then(
        function (response) {
          console.log(response.data);
          $scope.animal = response.data.petfinder.pet;
          $scope.photo = $scope.animal.media.photos.photo[3].$t;
          favorite = {
            name: response.data.petfinder.pet.name.$t,
            description: response.data.petfinder.pet.description.$t,
            image: response.data.petfinder.pet.media.photos.photo[3].$t,
          };
        }
      );
    };

    $scope.submitFavorite = function () {
      var data = favorite;
      $http.post('/favorites', data)
        .then(function () {
          console.log('POST /favorites');
          getFavorites();
        });
    };

    function getFavorites() {
      $http.get('/favorites')
      .then(function (response) {
        $scope.favorites = response.data;
        $scope.favoriteCount = $scope.favorites.length;
        console.log('GET /favorites ', response.data, $scope.favorites[0]);

      });
    }

    $scope.getRandomPet();

  },
]);
