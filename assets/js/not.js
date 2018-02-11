;
(function(){
	// ================ Variables ==================
	// Assign all of the logic-gate buttons to variables
	var input1Button = document.querySelector('#input-1-button');
	var notOutput 	 = document.querySelector('#not-output');

	// Assign the file.txt variable that will control the Arduino response
	var arduinoCode  = 0;

	// ============= Event Listeners ===============
	// If the input button is pressed, change its color and text
	input1Button.addEventListener('click', function() {
			changeButtonStatus(this);

			notCheck();

			updateArduinoFile();
	});

	// ================ Functions ==================
	// Check the classes on the button and toggle them accordingly
	function changeButtonStatus(clicked){
		if (clicked.classList.contains('btn-danger')){
			clicked.classList.remove('btn-danger');
			clicked.classList.add('btn-success');
		} else {
			clicked.classList.remove('btn-success');
			clicked.classList.add('btn-danger');
		}
	};

	// Check whether both inputs are turned on, if so, then change the output to green
	function notCheck(){
		if ( !(input1Button.classList.contains('btn-success')) ) {
			notOutput.classList.remove('btn-danger');
			notOutput.classList.add('btn-success');

			arduinoCode = 3;
		} else {
			notOutput.classList.remove('btn-success');
			notOutput.classList.add('btn-danger');

			arduinoCode = 2;
		}
	};

	// function that writes html code with embedded php
	function updateArduinoFile(){
		// $.get("http://localhost:8080/and/" + arduinoCode);	

		// Vanilla
		var httpRequest = new XMLHttpRequest()
		httpRequest.onreadystatechange = function (data) {
		  // code
		}
		httpRequest.open('GET', "http://localhost:8080/and/" + arduinoCode);
		httpRequest.send();
	};

})();
