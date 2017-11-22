/*
*** theme.js

theme colors change here
*/


//theme color switch
//when pressed, switch theme colors
//document.getElementById('wave').onclick = switch_wave;

//if there were more color options it might be better to write one switch function
//passing in the name of the color and using it as an object, color.hex?

$('li').click(function(){

	var button_id = $(this).attr("id")

	switch(button_id){
			
		case "wave":
			$(':root').get(0).style.setProperty('--theme-color', '#55aad1');	//theme color
			$(':root').get(0).style.setProperty('--theme-dark', '#3f789e');		//dark theme color
			break;
			
		case "poupon":
			$(':root').get(0).style.setProperty('--theme-color', '#beb048');
			$(':root').get(0).style.setProperty('--theme-dark', '#80792f');
			break;
			
		case "pistacio":
			$(':root').get(0).style.setProperty('--theme-color', '#55b483');
			$(':root').get(0).style.setProperty('--theme-dark', '#397a5e');
			break;
			
		case "autumn":
			$(':root').get(0).style.setProperty('--theme-color', '#cd552c');
			$(':root').get(0).style.setProperty('--theme-dark', '#8a3d1e');
			break;
	}
})