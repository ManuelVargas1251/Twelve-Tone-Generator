//creates random tone row

//globals
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

//switches based on user input to which accidental array gets used
function toggle_accidental(toggle){
	if(toggle.checked)
		_flats_on = true
	else
		_flats_on = false
}

//loads array depending on user's accidental bool preference
function load_array(){
	console.clear()	//only show the current tone row log
    var sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    var flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
	_alphabet = []	//unnecessarily cleans array
	_tone_row = []	//necessarily cleans array
	
	if(_flats_on){
		_alphabet = flats.concat()
		_alphabet_copy = flats.concat()
	}
	else{
		_alphabet = sharps.concat()
		_alphabet_copy = sharps.concat()
	}
}

function tone_row(){
	load_array()	//puts either sharps or flats in array
	while(_alphabet.length){	//loop 12 times
        
		//random int from 0 to length of array
		var random_address = Math.floor((Math.random()*_alphabet.length))	
		var note = _alphabet[random_address]	//select note based on address
		var element_id = get_element_id(_alphabet.length)	//create and store element id
		
		document.getElementById(element_id).innerHTML = note	//send note to html
		_tone_row.push(note)	//store note in final array to use later
		
		remove_note(note)	//remove note from the alphabet array
	}
	//console.log("%c::done::", "color: #009A00")
}