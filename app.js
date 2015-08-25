angular.module('starter', ['ngRoute', 'starter.controllers'])
.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/todo', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl',
         controller: 'ExampleController'
       }).
       when('/about-us', {
       	  templateUrl: 'templates/about-us.html',

       }).
       when('/lists', {
       	  templateUrl: 'templates/list-index.html',
       	  controller: 'ListIndexCtrl',

       }).
       otherwise({
         redirectTo: '/todo'
       });
}])


