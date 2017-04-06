//globals
var _sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var _flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'A'];
var _x = 3
var _y = 4
var _accidental = "sharps"	//default is sharps

function mypop(note){
	var index = _sharps.indexOf(note);
	
	if (index > -1) 
		_sharps.splice(index, 1);
	console.log(note + "%c has been popped", "color: #009A00")
}

function choose_accidental(){
	console.log("Want Sharps or Flats?")
	//ask what they want
	console.log("You've selected sharps!")
}
function get_element(num_left){
	str1 = "note_"
	num1 = 12-num_left
	return element_id =  str1.concat(num1.toString())
}

function find_repeat(note){
	
}

function gen(){
	var num_left = 12
	var element_id
	choose_accidental()
	
	while(num_left){
		var random_note = Math.floor((Math.random()* 12))
		var note = _sharps[random_note]
		while(typeof note == 'undefined'){
			random_note = Math.floor((Math.random()* 12))
			note = _sharps[random_note]
		}

		element_id = get_element(num_left)
		
		//console.log("%celement: "+element_id, "color: #551188")
		document.getElementById(element_id).innerHTML = note;
		//console.log("%cnote: "+note, "color: #2244f2")	
		mypop(note)
		num_left -= 1
	}
	
	//reinitialize
	_sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
	_flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'A'];
}

//button to show 
function create(){
	gen()
}

function main(){
}