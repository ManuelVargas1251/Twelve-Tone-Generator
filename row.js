//globals
var _sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
var _flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
var _alphabet = []	//empty array; will fill w/ sharps or flats 
var _flats_on = false

//remove selected note from alphabet array
function remove_note(note){
	var index = _alphabet.indexOf(note)	//address of note
	if (index > -1)
		_alphabet.splice(index, 1)
	//console.log(note + "%c has been removed", "color: #9A0000")
}

//returns current element id string
function get_element_id(array_length){
	str1 = "note_"
	num1 = 12-array_length
	return element_id =  str1.concat(num1.toString())
}

//switches bool to which accidental array gets used
function toggle_accidental(toggle){
	if(toggle.checked){
		_flats_on = true
		//console.log("You've selected flats!")
	}
	else{
		_flats_on = false
		//console.log("You've selected sharps!")
	}
}

//loads array depending on user's accidental bool preference
function load_array(){
	_alphabet = []	//unnecessarily cleans array
	
	if(_flats_on)
		_alphabet = _flats.concat()
	else
		_alphabet = _sharps.concat()
}

function row(){
	//console.clear()	
	load_array()	//puts either sharps or flats in array
	
	while(_alphabet.length){	//loop 12 times
		//random int from 0 to length of array
		var random_address = Math.floor((Math.random()*_alphabet.length))	
		var note = _alphabet[random_address]	//select note based on address
		var element_id = get_element_id(_alphabet.length)	//create and store element id
		
		document.getElementById(element_id).innerHTML = note	//send note to html
		remove_note(note)	//remove note from array
	}
	//console.log("%c::done::", "color: #009A00")
}


function create(){
	row()	//creates random row
	//matrix()	//creates and displays twelve tone matrix based on row
	//sounds()	//played row in sequence and maybe some other stuff
}

function main(){
}