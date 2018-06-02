'use strict';

angular.module('initApp')
  .controller('mainController', function ($scope) {
    var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRAP2fFHtZFimwpXco_Lub3Y0bAp5wNiVOx3Sp9p2gwGqnsihXZchD8aoMZDtIzbVkAQh4Z27Yfpss4/pub?output=csv';
  	d3.csv(url, function(data){
      $scope.$apply(function(){
        $scope.checks = data;
      });
    });

});