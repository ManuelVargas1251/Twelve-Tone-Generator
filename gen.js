//globals
var _sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
var _flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'A']
var _alphabet = []	//empty array; will fill w/ sharps or flats 
var _accidental = "sharps"	//default is sharps
var _flats_on = false

//remove selected note from alphabet array
function remove_note(note){
	var index = _alphabet.indexOf(note);
	if (index > -1) 
		_alphabet.splice(index, 1);
	console.log(note + "%c has been popped", "color: #009A00")
}

function get_element(num_left){
	str1 = "note_"
	num1 = 12-num_left
	return element_id =  str1.concat(num1.toString())
}

function toggle_notes(cb){
	if(cb.checked){
		_flats_on=true
		console.log("You've selected flats!")
	}
	else{
		_flats_on=false
		console.log("You've selected sharps!")
	}
}

function choose_accidental(){
	if(_flats_on)
		_alphabet = _flats.concat();
	else
	_alphabet = _sharps.concat();
}

function gen(){
	var num_left = 12
	var element_id
	choose_accidental()
	
	while(num_left){	//loop 12 times
		var random_note = Math.floor((Math.random()* 12))
		var note = _alphabet[random_note]
		
		while(typeof note == 'undefined'){
			random_note = Math.floor((Math.random()* 12))
			note = _alphabet[random_note]
			console.log("loop")		//max 39 loops in my tests
			//this is not the optimal way to find the number
			//better way would be to also remove the number
			//that had been called before so random won't call it again
		}
		
		element_id = get_element(num_left)
		document.getElementById(element_id).innerHTML = note;
		//console.log("%celement: "+element_id, "color: #551188")
		//console.log("%cnote: "+note, "color: #2244f2")	
		remove_note(note)
		console.log("alpha: " + _alphabet)
		num_left -= 1	//decrement
	}
	_alphabet = []	//unnecessary
}

//create a row
function create(){
	gen()
}

function main(){
}