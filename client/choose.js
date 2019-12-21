var myApp = angular.module('myApp',[]);
myApp.controller('govtCtrl', function ($scope) {
    $scope.addOfficial = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'official_signup.html';
     	window.location.replace(new_path);
     	console.log(p);
    };

    $scope.addContractor = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'contractor_signup.html';
     	window.location.replace(new_path);
     	console.log(p);
    };

    $scope.progress = function(){
    	var path = window.location.pathname;
     	var pos = path.lastIndexOf("/");
     	var p = path.slice(0,pos+1);
     	var new_path = p+'progress.html';
     	window.location.replace(new_path);
     	console.log(p);
    };
    $scope.mantainanace = function(){
        var path = window.location.pathname;
        var pos = path.lastIndexOf("/");
        var p = path.slice(0,pos+1);
        var new_path = p+'mantainanace.html';
        window.location.replace(new_path);
        console.log(p);
    };
  });