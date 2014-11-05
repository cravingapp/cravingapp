app.controller('CravingController', function($scope) { 
    
    $scope.position = 'mid';
    $scope.label = 'not okay';
    $scope.contentHide = true;
    $scope.startHide = false;
    $scope.nextHide = true;
    $scope.backHide = true;
    $scope.doneHide = true;
    $scope.currentState = 'notokay';

    $scope.indicators = {
	money: {
	    state: 'unselected',
	    controls: true,
	},
	time: {
	    state: 'unselected',
	    controls: true,
	},
	frequency: {
	    state: 'unselected',
	    controls: true,
	}
    }

    $scope.states = {
	okay : {
	    money : 5,
	    time: 15,
	    frequency: 'week'
	},
	notokay : {
	    money : 5,
	    time: 15,
	    frequency: 'week'
	}
    }
    

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

    // When next is clicked
    $scope.next = function() {
		$scope.position = 'top';
		$scope.startHide = true;
		$scope.nextHide = true;
		$scope.backHide = false;
		$scope.doneHide = false;
		$scope.label = 'okay';
		$scope.currentState = 'okay';
    }

    // When back is clicked
    $scope.back = function() {
		$scope.nextHide = false;
		$scope.backHide = true;
		$scope.doneHide = true;
		$scope.label = 'not okay';
		$scope.currentState = 'notokay';
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
    var frequencyOpts = ['week', 'weekend', 'day', 'other day', 'hour'];
    
    $scope.modify = function(action, indicator, state) {
	if (indicator == 'money') {
	    if (action == 'more') {
		$scope.states[state].money += 5;
	    }
	    else {
		if ($scope.states[state].money == 5) {
		    return;
		}
		$scope.states[state].money -= 5;
	    }
	}
	if (indicator == 'time') {
	    if (action == 'more') {
		$scope.states[state].time += 15;
	    } else  {
		if ($scope.states[state].time == 15) {
		    return;
		}
		$scope.states[state].time -= 15;
	    }
	}
	if (indicator == 'frequency') {
	    var currentIndex = frequencyOpts.indexOf($scope.states[state].frequency);
		    if (action == 'more') {
				if (currentIndex == frequencyOpts.length - 1) {
				    $scope.states[state].frequency = frequencyOpts[4];
				    return;
			}
			$scope.states[state].frequency = frequencyOpts[++currentIndex];
	    } else {
			if (currentIndex == 0) {
			    $scope.states[state].frequency = frequencyOpts[0];
			    return;
			}
			$scope.states[state].frequency = frequencyOpts[--currentIndex];
	    }
	}
    }

});
