var app = angular.module("app", []);

$(document).ready(function(){

	setTimeout(function(){
		$('body').addClass('loaded');
		$('#staggered-test').showStaggeredList('#staggered-test');
	},3000);


});


 // Horizontal staggered list
