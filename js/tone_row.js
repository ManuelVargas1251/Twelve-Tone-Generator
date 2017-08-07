/*
*** tone_row.js

this is the initial program
every other process relies on this completing 
it creates a random tone row and stores it globally in '_tone_row' array
it also gets displayed to the screen
*/

//globals
var _flats_on = false

//remove selected note from alphabet array
function remove_note(note, alphabet){
	var index = alphabet.indexOf(note)	//address of note
	if (index > -1)
		alphabet.splice(index, 1)
	//console.log(note + "%c has been removed", "color: #9A0000")
}

//returns current element id string
function get_element_id(array_length){
	str = "note_"
	num = 12-array_length
	return element_id =  str.concat(num.toString())
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
	//define both types of musical alphabets
    var sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    var flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
	
	//resets arrays so they'll be clean
	_alphabet = []
	_tone_row = []
	
	//if toggle is set to flat, load flats
	if(_flats_on)
		_alphabet = flats.concat()
	else
		_alphabet = sharps.concat()
}

//main function for tone_row
function tone_row(){
	console.log("%ctone_row(): \t%cstart", "color: blue; font-weight:bold;", "color: orange")
	
	//this loads the correct musical alphabet
	//depening on the settings, alphabet can be sharps or flats
	load_array()
	
	//makes a local copy of the alphabet to use
	//after each loop, arrays shrinks by one
	var shrinking_alphabet = _alphabet.slice()
	
	//if user input a custom row
	if(custom == true){
		//take user input and store it in the _tone_row
		console.log("%c::custom row?::", "color: #009A00")
	}
	else{
		for(var i = 12 ; i > 0 ; i--){
			//random int from 0 to length of array
			var random_address = Math.floor((Math.random()*i))	
			var note = shrinking_alphabet[random_address]	//select note based on address
			var element_id = get_element_id(i)	//create and store element id

			//send note to html
			document.getElementById(element_id).innerHTML = note	
			_tone_row.push(note)	//store note in final array to use later

			remove_note(note, shrinking_alphabet)	//remove note from the alphabet array
		}
	}
	
	console.log("%ctone_row(): \t%cdone", "color: blue; font-weight:bold;", "color: limegreen")
}