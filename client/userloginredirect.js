var myApp = angular.module('myApp',[]);
myApp.controller('userCtrl', function ($scope) {
    $scope.register = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'user_signup.html';
     	window.location.replace(new_path);
     	console.log(p);
    };
  });