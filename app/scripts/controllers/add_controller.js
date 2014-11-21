(function () {

  angular.module('PeopleList')
  .controller('AddController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.person = {};

    $scope.addPerson = function () {

      $http.post(appUrl, $scope.person).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());