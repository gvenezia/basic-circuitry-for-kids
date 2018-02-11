;
(function(){
	var input1Button = document.querySelector('#input-1-button');
	var input2Button = document.querySelector('#input-2-button');
	var andOutput =  document.querySelector('#and-output');

	input1Button.addEventListener('click', checkButtonStatus(input1Button));
	input2Button.addEventListener('click', checkButtonStatus(input2Button));

	// Check the classes on the button and toggle them accordignly
	function checkButtonStatus(clicked){
		if (clicked.classList.contains('btn-danger')){
			clicked.classList.remove('btn-danger');
			clicked.classList.add('btn-success');
		} else {
			clicked.classList.remove('btn-success');
			clicked.classList.add('btn-danger');
		}

		andCheck();
	};

	// Check whether both inputs are turned on, if so, then change the output to green
	function andCheck(){
		if (input1Button.classList.contains('btn-success') && input2Button.classList.contains('btn-success')) {
			andOutput.classList.add('btn-success');
		} else {
			andOutput.classList.add('btn-danger');
		}
	};
})();
