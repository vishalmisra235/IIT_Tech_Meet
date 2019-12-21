var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.home = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'first_page.html';
     	window.location.replace(new_path);
     	console.log(p);
    };
});
