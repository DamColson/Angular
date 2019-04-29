var app = angular.module('hideShow', []);

app.controller('hideShowCtrl',function($scope) {
  $scope.hidden=false;
  $scope.shown=true;
  $scope.hideTagazok=function(){
    $scope.hidden=true;
    $scope.shown=true;
  };
  $scope.showTagazok=function(){
    $scope.hidden=false;
    $scope.shown=false;
  };
});
