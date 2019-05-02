var app = angular.module('alertApp',[]);

app.controller('alertCtrl',['$scope','$window',function($scope,$window){
  $scope.alertAngular=function(){
    $window.alert('bouh');
  }
}]);
