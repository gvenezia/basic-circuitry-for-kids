;
(function(){
	var input1Button = document.querySelector('#input-1-button');
	var notOutput =  document.querySelector('#not-output');

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

			notCheck();
	});

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
