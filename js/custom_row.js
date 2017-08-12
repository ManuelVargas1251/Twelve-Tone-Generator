/*
*** custom_row.js

user inputs a tone row and gets passed to every other function.
*/

var custom = false	//by default custom row is off

//by default keyboard is hidden, when toggled, will show
function show_keyboard(toggle){
	//$('#keyboard').css("display", "block");
	var keyboard = document.getElementById('keyboard');

	if(toggle.checked){
		console.log("check")
		keyboard.style.display = 'block'	//show keyboard
		_hide_table = false	//toggle the state
	}
	else{
		console.log("no check")
		keyboard.style.display = 'none';	//hide keyboard
		_hide_table = true	//toggle the state
	}

}

//should I have all my toggles in one place?
function toggle_custom_row(toggle){
	if(toggle.checked)
		custom = true
	else
		custom = false
	console.log("custom: " + custom)
}

function custom_row(){
	//nothing yet
}