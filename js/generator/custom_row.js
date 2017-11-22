/*
*** custom_row.js

user inputs a tone row and gets passed to every other function.
*/

var custom = false	//by default custom row is off

//by default keyboard is hidden, when toggled, will show
function show_keyboard(toggle){
	//$('#keyboard').css("display", "block");
	//var keyboard = document.getElementById('keyboard');
	//var keyboard = $("#keyboard");

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

$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});

function custom_row(){
	console.log("%ccustom_row()%c\tstart", "color: green; font-weight:bold;", "color: orange")

	//nothing yet

	console.log("%ccustom_row()%c\tdone", "color: green; font-weight:bold;", "color: limegreen")
}
