myApp.controller('dogsController', ['$scope', '$http', function ($scope, $http) {
    var key = '92fe96ed8057563857e54705108f9735';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function () {
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=dog';
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
        console.log(favorite);
      });
    };

    $scope.getRandomPet();

  },
]);
