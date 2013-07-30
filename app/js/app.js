'use strict';

/* App Module */

angular.module('vivoviz', ['sparqlServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/vivo', {templateUrl: 'partials/vivo-viz.html',   controller: VIVOVizCtrl}).
      otherwise({redirectTo: '/vivo'});
}]);
