angular.module('openWeathers').controller('sidebarCtrl', ['$scope', 'citiesInfo', function($scope, citiesInfo) {
  	// get data
	citiesInfo.query().then(function(data){
		$scope.data = data.data.list;
	});

	$scope.showDetail = function(item) {
		console.log(item.id)
		$scope.$emit('showCityDetail', item.id);
	}
}]);