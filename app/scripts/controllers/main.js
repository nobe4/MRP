'use strict';

/**
 * @ngdoc function
 * @name mrpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mrpApp
 */
angular.module('mrpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
