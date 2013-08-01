'use strict';

/* Services */

angular.module('sparqlServices', ['ngResource']).
    factory('Person', function($resource){
    	return $resource('http://lasp-db-dev:3030/VIVO/query', {}, {
    		query: {method:'POST', params: {query:'PREFIX rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#> PREFIX xsd:   <http://www.w3.org/2001/XMLSchema#> PREFIX owl:   <http://www.w3.org/2002/07/owl#> PREFIX foaf: <http://xmlns.com/foaf/0.1/> PREFIX vivo: <http://vivoweb.org/ontology/core#> PREFIX laspcms: <http://localhost:8080/laspcms#> SELECT ?name ?email WHERE { ?per a vivo:UndergraduateStudent . ?per rdfs:label ?name . ?per vivo:primaryEmail ?email .} order by ?name ?email'}, isArray:false}
    	});
	});
    
    
