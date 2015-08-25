angular.module('starter', ['ngRoute', 'starter.controllers'])
.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/todo', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl',
         controller: 'ExampleController'
       }).
       otherwise({
         redirectTo: '/todo'
       });
}])


