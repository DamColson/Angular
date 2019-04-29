var app = angular.module('voituresApp', []);

app.controller('voituresCtrl', ['$scope','$http',function($scope, $http) {
  $http({
    method:'GET',
    url:'voitures.json'
  }).then(function successCallback(response){
    $scope.voitures=response.data;
  }, function errorCallback(response){
    alert('error');
  });
}]);
