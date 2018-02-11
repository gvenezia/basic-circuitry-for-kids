;
(function(){
	// ================ Variables ==================
	// Assign all of the logic-gate buttons to variables
	var input1Button = document.querySelector('#input-1-button');
	var input2Button = document.querySelector('#input-2-button');
	var andOutput 	 = document.querySelector('#and-output');
	var phpContainer = document.querySelector('#php-container');

	// Assign the file.txt variable that will control the Arduino response
	var arduinoCode  = -1;

	// ============= Event Listeners ===============
	// If the input button is pressed, change its color and text
	input1Button.addEventListener('click', function() {
			changeButtonStatus(this); // 'This' references the calling click event

			andCheck();

			updateArduinoFile();

	});

	// If the second input button is pressed, change its color and text
	input2Button.addEventListener('click', function() {
			changeButtonStatus(this); 

			andCheck();

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
	function andCheck(){
		if ( input1Button.classList.contains('btn-success') ) {
				andOutput.classList.remove('btn-success');
				andOutput.classList.add('btn-danger');

				// Change the arduino code accordingly
				arduinoCode = 2;
		 } else if ( input2Button.classList.contains('btn-success') ) {
			andOutput.classList.remove('btn-success');
			andOutput.classList.add('btn-danger');

			// Change the arduino code accordingly
			arduinoCode = 4;

		} else if ( input1Button.classList.contains('btn-success') && input2Button.classList.contains('btn-success') ) {
			andOutput.classList.remove('btn-danger');
			andOutput.classList.add('btn-success');

			// Change the arduino code accordingly
			arduinoCode = 7;

		} else if ( !(input1Button.classList.contains('btn-success') && input2Button.classList.contains('btn-success')) ) {
			andOutput.classList.remove('btn-success');
			andOutput.classList.add('btn-danger');

			// Change the arduino code accordingly
			arduinoCode = 1;
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


// <?php
// 		if($_GET["action"] !="0"){
// 			$myfile = fopen("file.txt", "w") or die("Unable to open file!");

// 			if($_GET["action"] =="close"){
// 				fwrite($myfile,"1");
// 			}elseif($_GET["action"] =="open"){
// 				fwrite($myfile,"2");
// 			}

// 			fclose($myfile);

// 			sleep(5);

// 			$myfile = fopen("file.txt", "w") or ("Unable to open file!");
// 			fwrite($myfile,"0");
// 			fclose($myfile);
// 		}
// ?>




