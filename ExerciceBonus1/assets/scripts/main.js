var app = angular.module('mailApp',[]);
app.controller('mailCtrl', function($scope){
  $scope.mailRegex=/^([a-zA-Z1-9]+[1-9]{0,5}[.\-_]?[a-zA-Z1-9]+[1-9]{0,5})[@][a-zA-Z]+[.]?[a-z]{0,5}$/
});





// $('#mail').focusout(function(){
//   var check = function hasArobase(arobase){
//     return arobase == '@';
//   };
// var letters = $('#mail').val().split("");
// console.log(letters);
// console.log(letters.some(check))
//
//   if(letters.some(check) == true){
//     $('#mail').css('border','1px solid green');
//   }else if(letters.some(check) == false){
//     $('#mail').css('border','1px solid red');
// }
// });
