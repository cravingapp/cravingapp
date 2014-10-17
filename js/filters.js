app.filter('HrsMins', function() {
    return function(total_mins) {
	if (total_mins < 60) {
	    return total_mins + 'm';
	}
	var mins = total_mins % 60;
	if (mins == 0) {
	    return (total_mins / 60) + 'h';
	}
	var total_mins = total_mins - mins;
	var hrs = total_mins / 60;
	return hrs + 'h ' + mins + 'm';
    }
});
