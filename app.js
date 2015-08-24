angular.module('starter', [])
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
