/*
*** custom_row.js

user inputs a tone row and gets passed to every other function.
*/

var custom = false	//by default custom row is off


//should I have all my toggles in one place?
function toggle_custom_row(toggle){
	if(toggle.checked)
		custom = true
	else
		custom = false
}

function custom_row(){
	//nothing yet
}