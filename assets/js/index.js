// IIFE to control scope
;(function(){
	// Don't assign variables or events until the page is loaded
	window.onload = function() {
		var correctChoice = document.getElementById("correct-choice");
		var wrongChoice = document.getElementById("wrong-choice");

		correctChoice.addEventListener("click", function(){


		});

		wrongChoice.addEventListener("click", function(){


		});
	}	

}()); // End IIFE
