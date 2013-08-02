'use strict';

/* App Module */
var vivoviz = angular.module("vivoviz", []) //dependencies go inside the square brackets
.config(function ($routeProvider, $httpProvider) {
$routeProvider. //this controls navigation within our app
when('/', { templateUrl: 'partials/main-page.html' }).
when('/personel_list', { controller: PersonListCtrl, templateUrl: 'partials/person-list.html' }).
when('/circles', { controller: JSONCtrl, templateUrl: 'partials/circles.html' }).
when('/lodlive', { controller: SparqlCtrl, templateUrl: 'partials/lodlive.html' }).
otherwise({ redirectTo: '/' });

//enable crossdomain requests
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
});