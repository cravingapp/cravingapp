app.controller('CravingController', function($scope) { 
    
    $scope.position = 'mid';
    $scope.contentHide = true;
    $scope.startHide = false;
    $scope.nextHide = true;
    $scope.backHide = true;
    $scope.doneHide = true;

    // When the user types in the craving input
    $scope.cravingWidth = 250;
    $scope.cravingInput = function(event) {
		if (event.keyCode == 13) {
			$scope.position = 'top';
			$scope.contentHide = false;
			$scope.startHide = true;
			$scope.nextHide = false;
		}
		else if (event.keyCode == 8){
			if ($scope.cravingWidth >= 250){
				$scope.cravingWidth -= 10;
			}
		} 
		else if (event.keyCode >= 65 && event.keyCode <= 90) {
			$scope.cravingWidth += 10;
		}
    }

    // When start is clicked
    $scope.start = function() {
		$scope.position = 'top';
		$scope.contentHide = false;
		$scope.startHide = true;
		$scope.nextHide = false;
    }
    
    // When an indicator image is clicked
    $scope.indicators = {
	money: { state: 'unselected', controls: true },
	time: { state: 'unselected', controls: true },
	frequency: { state: 'unselected', controls: true }
    }
    $scope.select = function(indicator) {
	if ($scope.indicators[indicator].state == 'selected') {
	    $scope.indicators[indicator].state = 'unselected';
	    $scope.indicators[indicator].controls = true;
	} else {
	    $scope.indicators[indicator].state = 'selected';
	    $scope.indicators[indicator].controls = false;
	}
    }

    // When controls (plus, minus) are clicked
    $scope.money = 5;
    $scope.time = 15;
    $scope.frequency = 'week';
    var frequencyOpts = ['week', 'weekend', 'day', 'other day', 'hour'];
    
    $scope.modify = function(action, indicator) {
	if (indicator == 'money') {
	    if (action == 'more') {
		$scope.money += 5;
	    }
	    else {
		if ($scope.money == 5) {
		    return;
		}
		$scope.money -= 5;
	    }
	}
	if (indicator == 'time') {
	    if (action == 'more') {
		$scope.time += 15;
	    } else  {
		if ($scope.time == 15) {
		    return;
		}
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
