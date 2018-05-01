$(document).ready(function(){
	console.log("ready freddy");

	// create a function to see if accessibility is on or off

	var accessibilityOn = false;
	var updatePage = function(){
		if(accessibilityOn){
			// if accessibility is on...
			$("body").addClass("body-accessibility");
			$(".navigation").addClass("navigation-accessibility");
		}else{
			// if accessibility is off...
			$("body").removeClass("body-accessibility");
			$(".navigation").removeClass("navigation-accessibility");
		}

	}

	$("#accessibility-button").click(function(){
		accessibilityOn = !accessibilityOn;
		updatePage();
		console.log("updating index page");
	});
});