/*
*** keyboard.js

all keyboard functionality
*/





//************************************************************************************
//************************************************************************************

var custom = false	//by default custom row is off

//by default keyboard is hidden, when toggled, will show
function show_keyboard(toggle){

	if(toggle.checked){
		console.log("check")
		keyboard.style.display = 'block'	//show keyboard
		$('#user_button').toggle(function () {
			$("#user_button").addClass("active");
			}, function () {
				$("#user_button").removeClass("active");
			});

		custom = true
	}
	else{
		console.log("no check")
		keyboard.style.display = 'none';	//hide keyboard
		custom = false
	}
}


