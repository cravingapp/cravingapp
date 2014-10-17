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

    $scope.money = 5;
    $scope.time = 15;
    $scope.frequency = 'hour';
    var frequencyOpts = ['hour', 'day', 'other day', 'weekend', 'week'];
    
    $scope.modify = function(action, indicator) {
	if (indicator == 'money') {
	    if (action == 'more') {
		$scope.money += 5;
	    }
	    else {
		$scope.money -= 5;
	    }
	}
	if (indicator == 'time') {
	    if (action == 'more') {
		$scope.time += 15;
	    } else  {
		$scope.time -= 15;
	    }
	}
	if (indicator == 'frequency') {
	    var currentIndex = frequencyOpts.indexOf($scope.frequency);
	    if (action == 'more') {
		if (currentIndex == frequencyOpts.length - 1) {
		    $scope.frequency = frequencyOpts[4];
		    return;
		}
		$scope.frequency = frequencyOpts[++currentIndex];
	    } else {
		if (currentIndex == 0) {
		    $scope.frequency = frequencyOpts[0];
		    return;
		}
		$scope.frequency = frequencyOpts[--currentIndex];
	    }
	}
    }

});
