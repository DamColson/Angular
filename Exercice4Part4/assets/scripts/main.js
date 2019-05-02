var app = angular.module('carsApp', []);

app.controller('carsCtrl', ['$scope','$http',function($scope, $http) {
  $http({
    method:'GET',
    url:'voitures.json'
  }).then(function successCallback(response){
    $scope.cars=response.data;
      }, function errorCallback(response){
    alert('error');
  });
}]);
