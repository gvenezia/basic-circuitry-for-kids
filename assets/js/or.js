;
(function(){
	// ================ Variables ==================
	// Assign all of the logic-gate buttons to variables
	var input1Button = document.querySelector('#input-1-button');
	var input2Button = document.querySelector('#input-2-button');
	var orOutput 	 = document.querySelector('#or-output');

	// ============= Event Listeners ===============
	// If the first input button is pressed, change its color and text
	input1Button.addEventListener('click', function() {
			changeButtonStatus(this);

			orCheck();
	});

	// If the second input button is pressed, change its color and text
	input2Button.addEventListener('click', function() {
			changeButtonStatus(this);

			orCheck();
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
	function orCheck(){
		if (input1Button.classList.contains('btn-success') || input2Button.classList.contains('btn-success')) {
			orOutput.classList.remove('btn-danger');
			orOutput.classList.add('btn-success');
		} else {
			orOutput.classList.remove('btn-success');
			orOutput.classList.add('btn-danger');
		}
	};
	
})();
