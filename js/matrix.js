/*
*** matrix.js

this figures out the correct format of note rows and 
places them in the matrix in the main panel.
*/

//prints state of variables before proceeding to create the matrix
function status(){
	console.log("%c::::::::matrix::::::::", 'background: #1c1c1c; color: #ffda55')
	console.log("%calpha_copy: " + _alphabet_copy, "background: #1c1c1c; color: #11ee00")
	console.log("%ctone_row: " + _tone_row, "background: #1c1c1c; color: #00aaff")
}

//creates clock array = alphabet[] with a[0] starting with _tone_row's first letter
//this is needed to find out the order of the rows in the matrix
function create_clock(){
    
	var clock_array = []
	clock_array.push(_tone_row[0])	//store first note of tone row
	
	while(clock_array.length != 12){
        //push the next chromatic note to the clock array
        //gives me an excuse to reuse my transpose_note() function
		clock_array.push(transpose_note(clock_array[clock_array.length-1],1))
	}
	//console.log(clock_array)
	return clock_array
}

//function to transpose a note
//value is an (+,-) int with max = 12 (octave)
function transpose_note(note, value){
    
	//address of note in the alphabet array
	var index = _alphabet_copy.indexOf(note)	
	//console.log("index: " + index)
	
	//modulo makes location wrap around
	if(value > 0)  //positive values
		index = (index += value) % 12
	else{          //negative values
		value += 12
		index = (index += value) % 12
	}

	//console.log("new index: " + index)
	return note = _alphabet_copy[index]
}

//transpose an array of notes all by the same value
//not just for chords but entire pieces
function multi_transpose(note_array, value){
	new_array = []	//store transposed array
	
	while(note_array.length){
		//console.log("note_array: "+note_array)
		var note = note_array.shift()	//pop from front of array
		//console.log("note: "+note)
		
		note = transpose_note(note, value)	//call my note transpose function
		new_array.push(note)
		//console.log("new array:" + new_array)
	}
	return new_array
}

function get_table_id(column, row){
	var x = 1, y = 1, dash = "-" 
	
	x = column++
	y += row
	
	var id = x.toString()	//attach x value
	id = id.concat(dash)	//attach dash
	id = id.concat(y.toString())	//attach y value
	
	//console.log("id: "+ id)
	return id	//return string for note location id in html
}

//get address number
function get_letter_address(clock_array, letter){
    for(var i = 0; i < 12;i++ ){
        if (letter == clock_array[i])
            return i
    }
}

function generate_matrix(clock_array){
	
	var row_index = 0, column_index = 1

	/********** 12 rows **********/
	while(row_index != 12){
		var trans_array = []	//clean array after every row

        //in order to get the correct order of transpositions in the matrix,
        //we have to calulate the order in which the tranposed arrays are printed
        //we do this by going in the order of the tone row notes and finding it's location
        //according to the clock array which is just a tranposed version of the alphabet array
        //once we know the address for the note, we can subtract it from 12 and that will
        //give us which tranposition array we should compute
        //do this for the entire tone row
        var letter = _tone_row[row_index]
        var letter_address = get_letter_address(clock_array.slice(), letter)
        var y_letter = 12 - letter_address
        //y_letter represents how many half steps we must tranpose the original tone row
        //inorder receive the correct tranposition
        
        //console.log("letter: " + letter)
        //console.log("letter address: " + letter_address)
        //console.log("y_letter : " + y_letter)
        
		//get transposed row according to the y_letter
		trans_array = multi_transpose(_tone_row.slice(), y_letter)
		//console.log("%ctone_row: " + _tone_row, "background: #1c1c1c; color: #dadaff")
		//console.log("transposed array: " + trans_array)
		
		
		/********** 12 notes **********/
		while(column_index != 13){
			
			var table_id = get_table_id(column_index, row_index)
			var actual_index = column_index - 1
			

			document.getElementById(table_id).innerHTML = trans_array[actual_index]	//send note to html
			
			//document.getElementById(table_id).addClass('animated tada')
			$(table_id).toggleClass('animated tada');

			console.log("sending:")
			column_index++
		}
		//console.log("hey")
		row_index++
		column_index = 1
	}
}


//shows matrix after row is created but before matrix data is generated
function show_matrix(){

	var matrix = document.getElementById('matrix');
	
	
	if(_hide_table == true){
		matrix.style.display = 'block'
		_hide_table = false	//toggle the state
	}
		
}

//main matrix function
function matrix(){
	//status()			//displays arrays
	
	show_matrix()	//unhide the matrix
	
    //creates new alpha array based on the tone row and pass
	generate_matrix(create_clock())	//generates and populates matrix
}