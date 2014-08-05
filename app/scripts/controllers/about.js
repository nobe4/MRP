'use strict';

/**
 * @ngdoc function
 * @name mrpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mrpApp
 */
angular.module('mrpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
