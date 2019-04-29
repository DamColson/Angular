var app = angular.module('hideShow', []);

app.controller('hideShowCtrl',function($scope) {
  $scope.hidden=false;
  $scope.hide=function(){
    $scope.hidden=true;
  };
  $scope.show=function(){
    $scope.hidden=false;
  };
});
