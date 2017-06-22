
angular.module('openWeathers').factory('citiyInfo', function($http){
		var model = {};
    	model.query = function(id){
    		var url = 'http://api.openweathermap.org/data/2.5/forecast?cnt=5&id=' + id + '&appid='+ appid;

 			return $http.get(url);
    	};

    	return model;
    });

