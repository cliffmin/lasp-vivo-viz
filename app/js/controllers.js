'use strict';

/* Controllers */

function VIVOVizCtrl($scope, Person) {
  $scope.person = Person.query();
  $scope.orderProp = 'name';
}

