var app = angular.module('formApp', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'index.html'
      })
      .when('/formInfos/:index',{
        templateUrl: 'partials/formInfos.html',
        controller: 'formInfosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.formInfos = [];
}]);

app.controller('formInfosCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
      $scope.index = $routeParams.index;
    }
]);

app.controller('formCtrl', ['$scope','$rootScope', function($scope, $rootScope) {

  $scope.mailRegex = /^([a-zA-Z0-9 ]+[0-9]{0,5}[.\-_]?[a-zA-Z0-9 ]+[0-9]{0,5})[@][a-zA-Z]+[.]?[a-z]{0,5}$/;
  $scope.nameRegex = /^([a-zA-Zéàèùûïöëêäâîç ]+[-]?[a-zA-Zéàèùûïöëêäâîç ]+)$/;
  $scope.messageRegex = /^([a-zA-Z0-9'-çéèà€^ù$£,;:!?.()_#@ "¨]+)$/;
  $scope.topicRegex = /^([a-zA-Z0-9'-çéèà€^ù$£,;:!?.()_#@ "¨]+)$/;

  $scope.addTopic = function() {
    var name = $scope.name;
    var mail = $scope.mail;
    var topic = $scope.topic;
    var message = $scope.message;

    $rootScope.formInfos.push({
      name: name,
      mail: mail,
      topic: topic,
      message: message
    });

    $scope.name = null;
    $scope.mail = null;
    $scope.topic = null;
    $scope.message = null;
    $scope.myForm.$setPristine();

  }
}]);
