'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Clicked");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");
	});
	//var button = $('.jumbotron h1')
	//button.append("Ask your own heart.")

	//$("#testjs").click()
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

console.log("Project clicked");



function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#379683");


	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
	   description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   description.fadeOut();
	}

}

