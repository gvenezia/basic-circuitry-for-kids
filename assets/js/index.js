// IIFE to control scope
;(function(){
	// Don't assign variables or events until the page is loaded
	window.onload = function() {
		var correctChoice = document.getElementById("correct-choice");
		var wrongChoice = document.getElementsByClassName("wrong-choice");

		// Assign an event listener to the correct choice
		correctChoice.addEventListener("click", function(){
			alert("that's correct!");
		});

		// Assign event listeners to all of the incorrect choices
		for (let i = 0; i < wrongChoice.length; i++){
			wrongChoice[i].addEventListener("click", function(){
				alert("incorrect");
			});			
		}

	}	

})(); // End IIFE
