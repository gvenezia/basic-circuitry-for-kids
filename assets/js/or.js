;
(function(){
	var input1Button = document.querySelector('#input-1-button');
	var input2Button = document.querySelector('#input-2-button');
	var orOutput =  document.querySelector('#or-output');

	// If the input button is pressed, change its color and text
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

			orCheck();
	});

	// If the input button is pressed, change its color and text
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

			orCheck();
	});

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
