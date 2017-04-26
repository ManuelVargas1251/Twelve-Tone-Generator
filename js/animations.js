
function myanimations(){
	$(function() {
		if ( $('#1-1') ) {
			console.log("yo, up inside jquery")
		}
	});
}


//theme color switch
document.getElementById('wave').onclick = switch_wave;
document.getElementById('poupon').onclick = switch_poupon;
document.getElementById('pistacio').onclick = switch_pistacio;
document.getElementById('autumn').onclick = switch_autumn;

function switch_wave() {
	//document.getElementById("left-panel").style.backgroundColor = '#55aad1';
	$(':root').get(0).style.setProperty('--theme-color', '#55aad1');
	$(':root').get(0).style.setProperty('--theme-dark', '#3f789e');
}

function switch_poupon() {
	//document.getElementById("left-panel").style.backgroundColor = '#beb048';
	$(':root').get(0).style.setProperty('--theme-color', '#beb048');
	$(':root').get(0).style.setProperty('--theme-dark', '#80792f');
}

function switch_pistacio() {
	//document.getElementById("left-panel").style.backgroundColor = '#55b483';
	$(':root').get(0).style.setProperty('--theme-color', '#55b483');
	$(':root').get(0).style.setProperty('--theme-dark', '#397a5e');
}

function switch_autumn() {
	//document.getElementById("left-panel").style.backgroundColor = '#cd552c';
	$(':root').get(0).style.setProperty('--theme-color', '#cd552c');
	$(':root').get(0).style.setProperty('--theme-dark', '#8a3d1e');
}

//console.log("labels")

function show_labels(){
	$('#hide-1').css("display", "");
	$('#hide-2').css("display", "");
	console.log("labels")
}

