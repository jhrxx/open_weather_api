angular.module('openWeathers').factory('citiesInfo', function($http){
    	var model = {};
    	var cities = [{name: 'London', id: 2643743}, {name: 'Paris', id: 2988507}, {name: 'Berlin', id: 2950159}, {name: 'Barcelona', id: 3128760}, {name: 'Athens', id: 264371}];
		var ids = [];
		cities.forEach(function(i,v){
			ids.push(i.id)
		});
		var url = 'http://api.openweathermap.org/data/2.5/group?id=' + ids.join(',') + '&units=metric&appid='+ appid;

    	model.query = function(){
 			return $http.get(url);
    	};
    	return model;
    });