angular.module('starter.controllers', [])
.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.hi = "greetings";
}])
.controller("TodoCtrl", ['$scope', function ($scope) {
	$scope.todos = [{title : 'pay rent'}, {title : 'bake a cake'}, {title : 'buy a new shirt'}];

	$scope.delete = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
	};

	$scope.newTodo = {title : ""};
	$scope.addNewTodo=function(){
		$scope.todos.push({title: $scope.newTodo.title});
	}

}])

 .controller('ExampleController', ['$scope', function($scope) {
      $scope.stuff = [{thing: "hey"}, {thing: "what"}];
     
 	  $scope.delete = function(stuff){
		var index = $scope.stuff.indexOf(stuff);
		$scope.stuff.splice(index, 1);
		};


      $scope.newStuff={thing : ""};

     

      $scope.submit = function() {
        
        		console.log($scope.newStuff.thing);
        		$scope.stuff.push({thing: $scope.newStuff.thing});
          		$scope.text = '';

      }
    }]);