/*
*** tone_row.js

this is the initial program
every other process relies on this completing 
it creates a random tone row and stores it globally in '_tone_row' array
it also gets displayed to the screen
*/

//main function for tone_row
function tone_row(){
	console.log("%ctone_row()%c\t\tstart", "color: blue; font-weight:bold;", "color: orange")
	
	//this loads the correct musical alphabet
	//depening on the settings, alphabet can be sharps or flats
	load_array()
	
	//makes a local copy of the alphabet to use
	//after each loop, arrays shrinks by one
	let shrinking_alphabet = _alphabet.slice()
	
	//if user input a custom row
	if(custom){
		//take user input and store it in the _tone_row
		console.log("%c::custom row?::", "color: #009A00")
		
		custom_row()	//user can input their own tone row instead of random
		
		if(_flats_on == true)
			_tone_row = ['B','Bb','G','Db','Eb','C','D','A','Gb','E','Ab','F']
		else
			_tone_row = ['B','A#','G','C#','D#','C','D','A','F#','E','G#','F']
		
		console.log("tone row (inner): " + _tone_row)
	}
	else{
		for(let length_of_array = 12 ; length_of_array > 0 ; length_of_array--){
			
			//random int from 0 to length of array
			let random_address = Math.floor((Math.random()*length_of_array))
			let note = shrinking_alphabet[random_address]	//select note based on address
			
			//store note in final array to use later
			_tone_row.push(note)
			
			//remove current note from current alphabet array
			remove_note(note, shrinking_alphabet)
		}
	}
	
	//regardless of what happened, print tone row to #main-panel
	_tone_row.forEach(function(tone){
		document.getElementById(get_element_id(_tone_row.indexOf(tone))).innerHTML = tone
	})
	
	
	//console.log("tone row: " + _tone_row)
	console.log("%ctone_row()%c\t\tdone","color: blue; font-weight:bold;", "color: limegreen")
}

//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************


//remove selected note from alphabet array
function remove_note(note, alphabet){
	
	let index = alphabet.indexOf(note)	//address of note
	
	if (index > -1)
		alphabet.splice(index, 1)
	//console.log(note + "%c has been removed", "color: #9A0000")
}

//returns current element id string in correct format
function get_element_id(array_length){
	return element_id =  "note_".concat(array_length.toString())
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
    let sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    let flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
	
	//resets global arrays
	_alphabet = []
	_tone_row = []
	
	//if toggle is set to flat, load flats
	if(_flats_on)
		_alphabet = flats.concat()
	else
		_alphabet = sharps.concat()
}

