var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.submit = function() {

      //window.location.replace("http://stackoverflow.com/");
      alert("Submittted");
      
        
    };
    $scope.reset = function(){
      alert("Reset");
    }
});
