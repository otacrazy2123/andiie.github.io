
var app = angular.module("app", []).controller('Hello', function($scope, $http){
	$http.get('http://rest-service.guides.spring.io/greeting')
		.then(function(response){
			$scope.greeting = response.data;
		});
})


$(document).ready(function(){

	setTimeout(function(){
			$('body').addClass('loaded');
	},3000);

});
