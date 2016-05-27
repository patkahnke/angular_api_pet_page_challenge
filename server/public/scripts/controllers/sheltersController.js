myApp.controller('sheltersController', ['$scope', '$http', function ($scope, $http) {
    var key = '92fe96ed8057563857e54705108f9735';
    var baseURL = 'http://api.petfinder.com/';
    $scope.zip = '';

    $scope.getShelters = function () {
      var query = 'shelter.find';
      query += '?key=' + key;
      query += '&location=' + $scope.zip;
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

      console.log(request);

      $http.jsonp(request).then(
        //build a loopable array of the info to be displayed
        function (response) {
          $scope.listings = [];
          $scope.shelters = response.data.petfinder.shelters.shelter;
          for (var i = 0; i < $scope.shelters.length; i++) {
          var info = {
            id: i,
            name: $scope.shelters[i].name.$t,
            email: $scope.shelters[i].email.$t,
            phone: $scope.shelters[i].phone.$t,
          };
          $scope.listings.push(info);
        };
      }
    );
    };
  }]);
