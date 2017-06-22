angular.module('openWeathers').controller('mainCtrl', ['$scope', 'citiyInfo', function($scope, citiyInfo) {
	var showSeaLevel = function(time,data){
		console.log(time,data)
		var myChart = echarts.init(document.getElementById('chart'));
		var option = {
			title: {
				text: ' sea level in the next 5 days'
			},
			tootip:{},
			legend: {
				data: ['Sea level']
			},
			xAxis: {
				data: time
			},
			yAxis: {},
			series:[{
				name: 'sea level',
				type: 'bar',
				data: data
			}]
		}
		myChart.setOption(option);
	};

	$scope.queryDetailById = function(id){
		citiyInfo.query(id).then(function(data){
			$scope.data = data.data.list;
			console.log($scope.data);
			var date = [];
			var seaLevel = [];
			data.data.list.forEach(function(value){
				var hour = new Date(value.dt_txt).getHours();
				if(hour === 9) {
					console.log(value.dt_txt)
					date.push(value.dt_txt)
					console.log(value.main.sea_level)
					seaLevel.push(value.main.sea_level)
				}
			});
			// sea level
			showSeaLevel(date, seaLevel)
		});
	};

	$scope.$on('showCityDetail', function(event,data) {
		$scope.queryDetailById(data);	
	});

}]);