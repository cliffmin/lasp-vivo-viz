'use strict';

/* Controllers */

function PersonListCtrl($scope, $http) {
	var queryStr = "PREFIX rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#> PREFIX xsd:   <http://www.w3.org/2001/XMLSchema#> PREFIX owl:   <http://www.w3.org/2002/07/owl#> PREFIX foaf: <http://xmlns.com/foaf/0.1/> PREFIX vivo: <http://vivoweb.org/ontology/core#> PREFIX laspcms: <http://localhost:8080/laspcms#> SELECT ?name ?email ?per WHERE { ?per a foaf:Person . ?per rdfs:label ?name . ?per vivo:primaryEmail ?email .} order by ?name"
	var queryPart = "query=" + escape(queryStr);	
	
	$http({
		method: 'POST',
		url: 'http://lasp-db-dev:3030/VIVO/query',
		data: queryPart,
		headers: {"Accept": "application/sparql-results+json", 'Content-type': 'application/x-www-form-urlencoded'}
	}).success(function(data,status) {
		$scope.persons = data;
	});
	
	$scope.orderProp = "name.value";
}