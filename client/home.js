var myApp = angular.module('MasterApplication',[]);
myApp.controller('MainControl', function ($scope) {
    $scope.government = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'govt.html';
     	window.location.replace(new_path);
     	console.log(p);
    };

    $scope.contractor = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'cont.html';
     	window.location.replace(new_path);
     	console.log(p);
    };

    $scope.user = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'user.html';
     	window.location.replace(new_path);
     	console.log(p);
    };
  });
