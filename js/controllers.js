app.controller('CravingController', function($scope) { 
	$scope.moneyState = "unselected";
	$scope.timeState = "unselected";
	$scope.frequencyState = "unselected";

	$scope.select = function(indicator){
		if (indicator === 'money') {
			$scope.moneyState = "selected";
		}
		if (indicator === 'time') {
			$scope.timeState = "selected";
		}
		if (indicator === 'frequency') {
			$scope.frequencyState = "selected";
		}
	}
});
