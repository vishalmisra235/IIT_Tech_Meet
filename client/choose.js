var myApp = angular.module('myApp',[]);
myApp.controller('govtCtrl', function ($scope) {
    $scope.showModal = false;
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
        $scope.showModal = true;
    	// var path = window.location.pathname;
     // 	var pos = path.lastIndexOf("/");
     // 	var p = path.slice(0,pos+1);
     // 	var new_path = p+'progress.html';
     // 	window.location.replace(new_path);
     // 	console.log(p);
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

myApp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });