// This must be revisited
// The input text should dynamically become wider when the user types and become narrower when Backspace
var width = 250;
app.directive("dynamicInput", function() {
    return function(scope, element){
		element.bind("keydown", function(event) {
		    if (event.which != 8) {
			width += 15;
			element.css('width', width + 'px');
		    }
		    else {
				if (Number(element.css('width').slice(0, -2)) != 250) {
				    width -= 15;
				    element.css('width', width + 'px');
				}
		    }
		    // FIX interaction, on 'enter' display container and move craving class to top center
		});
    };

});
