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







