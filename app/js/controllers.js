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
	}).success(function(data) {
		$scope.persons = data;
	}).error(function(data,status) {
		$scope.error = "Fuseki returned: " + status;
	});
	
	$scope.orderProp = "name.value";
}

//read in a local json file
function JSONCtrl($scope, $http){
	$http.get('json/miserables.json').success(function(data) {
		$scope.data = data;
	});
}

//space to get and parse sparql json for use with lodlive functions
function SparqlCtrl($scope, $http){
	var properties;
	$http.get('json/properties.json').success(function(data) {
		properties = data;
	});
	//now we need to parse and return through the $scope
}

//example of how to run RESTful SPARQL Queries
function SimpleNodeCtrl($scope, $http) {
	var queryStr = "SELECT DISTINCT * WHERE {?object ?property <http://webdev1.lasp.colorado.edu:57529/vivo/individual/n3515>}"
	var queryPart = "query=" + escape(queryStr);	
	
	$http({
		method: 'POST',
		url: 'http://lasp-db-dev:3030/VIVO/query',
		data: queryPart,
		headers: {"Accept": "application/sparql-results+json", 'Content-type': 'application/x-www-form-urlencoded'}
	}).success(function(data,status) {
		$scope.subject = data;
	});
	
	queryStr = "SELECT DISTINCT * WHERE {<http://webdev1.lasp.colorado.edu:57529/vivo/individual/n3515> ?property ?object}"
	queryPart = "query=" + escape(queryStr);
	
	$http({
		method: 'POST',
		url: 'http://lasp-db-dev:3030/VIVO/query',
		data: queryPart,
		headers: {"Accept": "application/sparql-results+json", 'Content-type': 'application/x-www-form-urlencoded'}
	}).success(function(data,status) {
		$scope.object = data;
	});
}