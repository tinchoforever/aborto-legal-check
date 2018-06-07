'use strict';

angular.module('initApp')
  .controller('mainController', function ($scope) {
    var url = 'data.csv';

    $scope.currentGame = {
      points:0,
      remaing: 5,
    }
    $scope.lastAnswer = {
      result : false,
    }
    
    $scope.finishGame = function(){
      $scope.onQuestion = false;
      $scope.onAnswer = false;
      $scope.showResume = true;
    }
    $scope.startGame = function(){
      
      $scope.onQuestion = true;
      $scope.onAnswer = false;
      $scope.showResume = false;
      $scope.currentGame = {
        points:0,
        remaing: 5,
        questions: shuffle($scope.readyToCheck).slice(0,5)
      }
      $scope.currentCheck = $scope.currentGame.questions[$scope.currentGame.remaing-1];
    
      $scope.lastAnswer = {
        result : false,
      }
    }
    $scope.nextQuestion = function(){
      $scope.onQuestion = true;
      $scope.onAnswer = false;
      $scope.showResume = false;
      $scope.currentCheck = $scope.currentGame.questions[$scope.currentGame.remaing-1];
    }

    $scope.responder = function(c){
      var res = $scope.currentCheck['Resultado chequeo'];

      $scope.currentCheck.tuRespuesta = c;
      $scope.lastAnswer.answer = c;
      $scope.lastAnswer.result = c ===res;
      if ($scope.lastAnswer.result){
        $scope.currentGame.points++;
      }
      $scope.onQuestion =false;
      $scope.onAnswer = true;
     
      $scope.currentGame.remaing--;
       if ($scope.currentGame.remaing == 0){
        $scope.gameFinish = true;
      }
    }
  	d3.csv(url, function(data){
      $scope.$apply(function(){
        $scope.checks = data;
        $scope.readyToCheck = [];
        data.map(function(d){
          if (d['Resultado chequeo'] != ''){
            $scope.readyToCheck.push(d);
          }
        });
        
       
      });
    });

});