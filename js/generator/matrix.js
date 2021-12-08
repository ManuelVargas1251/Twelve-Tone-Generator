/*
*** matrix.js

this figures out the correct format of note rows and 
places them in the matrix in the main panel.
*/


//main matrix function
let edo = 12;
function matrix(){

	console.log("%cmatrix() \t\t%cstart", "color: purple; font-weight:bold;", "color: orange")

	show_labels() 	//show matrix labels
	show_matrix()	//unhide the matrix

	//creates new alpha array based on the tone row and pass
	generate_matrix(create_clock())	//generates and populates matrix

	console.log("%cmatrix() \t\t%cdone", "color: purple; font-weight:bold;", "color: limegreen")
}
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************


//creates clock array = alphabet[] with a[0] starting with _tone_row's first letter
//this is needed to find out the order of the rows in the matrix
function create_clock(){

	let clock_array = []

	clock_array.push(_tone_row[0])	//store first note of tone row

	while(clock_array.length != edo){
		//push the next chromatic note to the clock array
		//gives me an excuse to reuse my transpose_note() function
		clock_array.push(transpose_note(clock_array[clock_array.length-1], 1))
	}

	//console.log(clock_array)
	return clock_array
}

//function to transpose a note
//value is an (+,-) int with max = edo (octave)
function transpose_note(note, value){

	//address of note in the alphabet array
	let index = _alphabet.indexOf(note)	

	//console.log("index: " + index)

	//modulo makes location wrap around
	if(value > 0)  //positive values
		index = (index += value) % edo
	else{          //negative values
		value += edo
		index = (index += value) % edo
	}

	//console.log("new index: " + index)
	return note = _alphabet[index]
}

//transpose an array of notes all by the same value
//not just for chords but entire pieces
function multi_transpose(note_array, value){

	let new_array = []	//store transposed array

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

//get table id in correct format
function get_table_id(column, row){
	
	let x = 1, y = 1

	x = column++
	y += row

	//returmed joined string for note location id in html
	return "#".concat(x.toString()).concat("-").concat(y.toString())	
}

//get address number
function get_letter_address(clock_array, letter){
	for(let i = 0; i < edo;i++ ){
		if (letter == clock_array[i])
			return i
	}
}


function generate_matrix(clock_array){

	let row_index = 0, column_index = 1

	/********** edo rows **********/
	while(row_index != edo){
		let trans_array = []	//clean array after every row

		//in order to get the correct order of transpositions in the matrix,
		//we have to calulate the order in which the tranposed arrays are printed
		//we do this by going in the order of the tone row notes and finding it's location
		//according to the clock array which is just a tranposed version of the alphabet array
		//once we know the address for the note, we can subtract it from edo and that will
		//give us which tranposition array we should compute
		//do this for the entire tone row
		//these variables all need to be given better names
		let letter = _tone_row[row_index]
		let letter_address = get_letter_address(clock_array.slice(), letter)
		let y_letter = edo - letter_address
		//y_letter represents how many half steps we must tranpose the original tone row
		//inorder receive the correct tranposition

		//console.log("letter: " + letter)
		//console.log("letter address: " + letter_address)
		//console.log("y_letter : " + y_letter)

		//get transposed row according to the y_letter
		trans_array = multi_transpose(_tone_row.slice(), y_letter)
		//console.log("%ctone_row: " + _tone_row, "background: #1c1c1c; color: #dadaff")
		//console.log("transposed array: " + trans_array)

		//inverse row gets loaded from first index of every transposed row
		_inverse.push(trans_array[0]);

		/********** edo notes **********/
		while(column_index != 13){

			let table_id = get_table_id(column_index, row_index)
			let actual_index = column_index - 1

			$(table_id).html(trans_array[actual_index])	//send note to html

			column_index++
		}
		row_index++
		column_index = 1
	}
	//console.log("inverse: "+_inverse)
}

//shows matrix after row is created but before matrix data is generated
function show_matrix(){
	
	if(_hide_table == true){
		
		$("#matrix").css("display","block")
		_hide_table = false	//toggle the state
	}
}

//hides main-panel initially
//should move to matrix function
function show_labels(){
	$("#hide-1, #hide-2").css("display", "")
}

