(function (){

  angular.module('PeopleList')

  .controller('ListController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $http.get(appUrl).success( function (results){
      $scope.people = results;
    });

    $scope.viewMore = function (person) {
      $location.path('/single/' + person._id);
    };


  }]);

}());