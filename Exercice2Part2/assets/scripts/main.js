var schoolApp = angular.module('schoolApp',[]);

schoolApp.controller('studentsCtrl',function($scope){
  $scope.firstName = 'Prénom : Émilie';
  $scope.lastName = 'Nom : Gérard';
  $scope.age = 'Age : 17';
  $scope.grade = 'Classe : Terminale';
});
