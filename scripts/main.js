(function (){

  angular.module('PeopleList', ['ngRoute'])

  .constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/ngpeople/'
  })

  .config( function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'templates/list-template.html',
      controller: 'ListController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add-template.html',
      controller: 'AddController'
    });

    $routeProvider.when('/single/:pid', {
      templateUrl: 'templates/single-template.html',
      controller: 'SingleController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other-template.html',
      controller: 'OtherController'
    });

  });

}());








(function (){

  angular.module('PeopleList')

  .controller('OtherController', [ function () {

  }]);

}());
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
(function (){

  angular.module('PeopleList')
  .controller('SidebarController', ['$scope', function ($scope) {
    $scope.greeting = "Hello I am something";
  }]);

}());
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
(function () {
  
  angular.module('PeopleList')
  .controller('SingleController', 
    ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

      $http.get(appUrl + $routeParams.pid).success( function (data) {
        $scope.person = data;
      });

  }]);
  
}());