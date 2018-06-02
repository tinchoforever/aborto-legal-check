'use strict';

angular.module('initApp',['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/check/main.html',
        controller: 'mainController'
      })
      .when('/stats', {
        templateUrl: 'views/check/stats.html',
        controller: 'statsController'
      })
});
