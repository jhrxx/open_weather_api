angular.module('openWeathers').controller('mainCtrl', ['$scope', 'citiyInfo', function($scope, citiyInfo) {
	$scope.queryDetailById = function(id){
		citiyInfo.query(id).then(function(data){
			$scope.data = data.data.list;
			console.log($scope.data);
			var arr = [];
			data.data.list.forEach(function(value){
				var hour = new Date(value.dt_txt).getHours();
				if(hour === 9) {
					arr.push(value.pressure )
				}
			});
			// sea level
			console.log(arr)
		});
	}

	$scope.$on('showCityDetail', function(event,data) {
		$scope.queryDetailById(data);	
	});

}]);