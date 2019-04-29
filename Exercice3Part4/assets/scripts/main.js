var app = angular.module('voituresApp', []);

app.controller('voituresCtrl', ['$scope','$http',function($scope, $http) {
  $http({
    method:'GET',
    url:'voitures.json'
  }).then(function successCallback(response){
    var data = response.data;
    $scope.voitures=data;

      }, function errorCallback(response){
    alert('error');
  });
}]);
