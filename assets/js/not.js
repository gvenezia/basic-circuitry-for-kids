;
(function(){
	// ================ Variables ==================
	// Assign all of the logic-gate buttons to variables
	var input1Button = document.querySelector('#input-1-button');
	var notOutput 	 = document.querySelector('#not-output');

	// ============= Event Listeners ===============
	// If the input button is pressed, change its color and text
	input1Button.addEventListener('click', function() {
			changeButtonStatus(this);

			notCheck();
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
		} else {
			notOutput.classList.remove('btn-success');
			notOutput.classList.add('btn-danger');
		}
	};

})();
