var sumApp = angular.module('sumApp', []);

sumApp.controller('sumCtrl', ['$scope', function ($scope) {
$scope.sum='220 + 304 = ' + (220 + 304);
}]);
