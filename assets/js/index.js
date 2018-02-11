// IIFE to control scope
;(function(){
	// Don't assign variables or events until the page is loaded
	window.onload = function() {
		var correctChoice = document.getElementById("correct-choice");
		var wrongChoice = document.getElementsByClassName("wrong-choice");

		correctChoice.addEventListener("click", function(){
			alert("that's correct!");
		});

		for (let i = 0; i < wrongChoice.length; i++){
			wrongChoice[i].addEventListener("click", function(){
				alert("incorrect");
			});			
		}

	}	

}()); // End IIFE
