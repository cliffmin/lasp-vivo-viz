'use strict';

/* App Module */
var vivoviz = angular.module("vivoviz", [])
.config(function ($routeProvider, $httpProvider) {
$routeProvider.
when('/', { templateUrl: 'partials/main-page.html' }).
when('/personel_list', { controller: PersonListCtrl, templateUrl: 'partials/person-list.html' }).
when('/circles', { controller: JSONCtrl, templateUrl: 'partials/circles.html' }).
when('/lodlive', { controller: SparqlCtrl, templateUrl: 'partials/lodlive.html' }).
otherwise({ redirectTo: '/' });
 
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
});