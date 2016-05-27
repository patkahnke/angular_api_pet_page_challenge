myApp.controller('horseController', ['$scope', '$http', function ($scope, $http) {
    var key = '92fe96ed8057563857e54705108f9735';
    var baseURL = 'http://api.petfinder.com/';
    $scope.breed = '';

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
          $scope.breed = $scope.animal.animal.$t;
          $scope.photo = $scope.animal.media.photos.photo[0].$t;
          $scope.getBreeds();
        }
      );
    };

    $scope.getRandomPet();

    $scope.getBreeds = function () {
      var query = 'breed.list';
      query += '?key=' + key;
      query += '&animal=' + $scope.breed.toLowerCase();
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

      console.log(request);

      $http.jsonp(request).then(
        function (response) {
          console.log('breeds: ', response.data);
          $scope.breeds = response.data.petfinder.breeds.breed;
        }
      );
    };
  }]);
