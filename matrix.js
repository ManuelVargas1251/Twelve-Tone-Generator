//generates matrix

//transformations
	//inversion (denoted I)
	//retrograde (R)
	//retrograde-inversion (RI)
	//"original" or prime form (P)


function status(){
	console.log("%c::::::::matrix::::::::", 'background: #1c1c1c; color: #ffda55')
	console.log("%calpha_copy: " + _alphabet_copy, "background: #1c1c1c; color: #11ee00")
	console.log("%ctone_row: " + _tone_row, "background: #1c1c1c; color: #00aaff")
}

//creates clock array = alpha with a[0] starting with _tone_row's first letter
function create_clock(){
	var clock_array = []
	clock_array.push(_tone_row[0])	//store first element of tone row
	
	
	while(clock_array.length != 12){
		clock_array.push(transpose_note(clock_array[clock_array.length-1],1))
	}
	console.log(clock_array)
	
	return clock_array
}

//function to transpose a note
//value is an (+,-) int with max = 12 (octave)
function transpose_note(note, value){
	//address of note
	var index = _alphabet_copy.indexOf(note)	
	//console.log("index: " + index)
	
	//modulo makes location wrap around
	if(value > 0)
		index = (index += value) % 12
	else{
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

function generate_matrix(){
	
	var row_index = 0, column_index = 1

	/********** 12 rows **********/
	while(row_index != 12){
		
		var trans_array = []	//clean array after every row
		
		//get transposed row
		trans_array = multi_transpose(_tone_row.slice(), (row_index*-1))
		console.log("%ctone_row: " + _tone_row, "background: #1c1c1c; color: #dadaff")
		console.log("transposed array: " + trans_array)
		
		
		/********** 12 notes **********/
		while(column_index != 13){
			
			var table_id = get_table_id(column_index, row_index)
			var actual_index = column_index - 1
			document.getElementById(table_id).innerHTML = trans_array[actual_index]	//send note to html

			column_index++
		}
		//console.log("hey")
		row_index++
		column_index = 1
	}
}

//main matrix function
function matrix(){
	status()			//displays arrays
	var clock_array = create_clock()		//creates new alpha array based on the tone row
	generate_matrix(clock_array)	//generates and populates matrix
}