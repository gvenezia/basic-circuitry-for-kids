;
(function(){
	var input1Button = document.querySelector('#input-1-button');
	var input2Button = document.querySelector('#input-2-button');
	var andOutput =  document.querySelector('#and-output');

	// If the input button is pressed, change its color and text
	// Explanation for why this isn't in a function at the bottom of this file
	input1Button.addEventListener('click', function() {
			if (this.classList.contains('btn-danger')){
				this.classList.remove('btn-danger');
				this.classList.add('btn-success');
				this.innerHTML = "Input1: ON";
			} else {
				this.classList.remove('btn-success');
				this.classList.add('btn-danger');
				this.innerHTML = "Input1: OFF";
			}

			andCheck();
	});

	input2Button.addEventListener('click', function() {
			if (this.classList.contains('btn-danger')){
				this.classList.remove('btn-danger');
				this.classList.add('btn-success');
				this.innerHTML = "Input2: ON";
			} else {
				this.classList.remove('btn-success');
				this.classList.add('btn-danger');
				this.innerHTML = "Input2: OFF";
			}

			andCheck();
	});

	// Check whether both inputs are turned on, if so, then change the output to green
	function andCheck(){
		if (input1Button.classList.contains('btn-success') && input2Button.classList.contains('btn-success')) {
			andOutput.classList.remove('btn-danger');
			andOutput.classList.add('btn-success');
		} else {
			andOutput.classList.remove('btn-success');
			andOutput.classList.add('btn-danger');
		}
	};

})();


// Using the checkButtonStatus  function returns a Uncaught type error, 
// can't do of the classList methods because clicked is undefined when passed as an argument to the event listeners above
	// Check the classes on the button and toggle them accordignly
	// function checkButtonStatus(clicked){
	// 	if (clicked.classList.contains('btn-danger')){
	// 		clicked.classList.remove('btn-danger');
	// 		clicked.classList.add('btn-success');
	// 	} else {
	// 		clicked.classList.remove('btn-success');
	// 		clicked.classList.add('btn-danger');
	// 	}

	// 	andCheck();
	// };
