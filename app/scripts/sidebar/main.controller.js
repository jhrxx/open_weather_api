angular.module('openWeathers').controller('sidebarCtrl', ['$scope' , 'citiesInfo', function($scope, citiesInfo) {
  	// get data
	citiesInfo.query().then(function(data){
		$scope.data = data.data.list;
	});

	$scope.$on('initiateEvent', function(event, b) {
        $scope.$broadcast('someEvent', 'bidule');
    });

	$scope.showDetail = function(item) {
		console.log(item.id)
		$scope.$broadcast('someEvent', 'bidule');
		// $scope.$broadcast("showCityDetailById", item.id);
	}
}]);