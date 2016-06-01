myApp.controller('pigsController', ['$scope', '$http', function ($scope, $http) {
    var key = '92fe96ed8057563857e54705108f9735';
    var baseURL = 'http://api.petfinder.com/';
    var favorite = {};

    $scope.getRandomPet = function () {
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=pig';
      query += '&output=basic';
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

      $http.jsonp(request).then(
        function (response) {
        $scope.animal = response.data.petfinder.pet;
        $scope.photo = $scope.animal.media.photos.photo[3].$t;
        favorite = {
          petFinderId: response.data.petfinder.pet.id.$t,
          name: response.data.petfinder.pet.name.$t,
          description: response.data.petfinder.pet.description.$t.substring(0, 100),
          image: response.data.petfinder.pet.media.photos.photo[3].$t,
          type: response.data.petfinder.pet.animal.$t,
        };
      }
    );
    };

    $scope.submitFavorite = function () {
      var data = favorite;
      $http.post('/favorites', data)
        .then(function () {
          getFavorites();
        });
    };

    function getFavorites() {
      $http.get('/favorites')
      .then(function (response) {
        $scope.favorites = response.data;
        $scope.favoriteCount = $scope.favorites.length;
      });
    }

    $scope.getRandomPet();

  },
]);
