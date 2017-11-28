/*
*** notation.js

using vexflow, draws the tone row on a staff
this takes place in the white panel
*/


//draw tone row plus 3 transformations
function notation(){

	console.log("%cnotation()  \t%cstart", "color: deeppink;font-weight:bold;", "color: orange");

	clean_staves()	//removes content in staff divs

	draw_rows()

	console.log("%cnotation()  \t%cdone", "color: deeppink; font-weight:bold;", "color: limegreen")
}
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************


//main function in notation
function draw_row(tone_row, row_label, staff){

	//console.log(row_label+": "+tone_row)	//print current working row

	//vexflow init
	VF = Vex.Flow;
	// Create an SVG renderer and attach it to the DIV element named "staff".
	var div = document.getElementById(staff)
	var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

	// Configure the rendering context.
	renderer.resize(600, 130);

	var context = renderer.getContext();
	const group = context.openGroup();
	context.setFont("Crimson Text",16, "").setBackgroundFillStyle("#eed");

	// Create a stave of width 400 at position 10, 40 on the canvas.
	var stave = new VF.Stave(15, 30, 500);

	// Add a clef and time signature.
	if(_bass_on){
		stave.addClef("bass").addTimeSignature("12/4")
		var clef = 'bass'
		//row needs to be transposed if using bass clef
		//var t_tone_row = multi_transpose(_tone_row.slice(),-3)
		}
	else{
		stave.addClef("treble").addTimeSignature("12/4")
		var clef = 'treble'
		//var t_tone_row = _tone_row.slice()
		}

	//console.log("clef: " + clef)
	// Connect it to the rendering context and draw!
	stave.setContext(context).draw();

	/*********************** end of setup **************************/

	//creating notes array for note objects to be pushed
	let notes = []

	tone_row.forEach(function(tone){

		//if note has either accidental, pass object with modifier
		if(tone[1] == '#' || tone[1] == 'b' ){

			//push alll that to notes[th]
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(tone[0], clef)],	//format is given by my function
				duration: "q"	//all notes are quarter notes
			}).addAccidental(0, new VF.Accidental(tone[1])))	//adds 'accidental' modifier
		}

		//if note has no accidental, pass object without accidental modifier
		else if(tone[1] == undefined){
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(tone[0], clef)],
				duration: "q"
			}))
		}
	})


	// Create a voice in 4/4 and add above notes
	let voice = new VF.Voice({
		num_beats: 12,
		beat_value: 4
	});

	voice.addTickables(notes);	//pass notes array 

	// Format and justify the notes to 400 pixels.
	let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	// Render voice to index.html
	voice.draw(context, stave);

	context.fillText(row_label,10,50)
}

//remove notes from the staves
function clean_staves() {
	$("#staff_one, #staff_two, #staff_three, #staff_four").empty()
}

//returns the retrograde transformation of the tone row
function retrograde(prime){

	let retrograde = []

	while(prime.length)
		retrograde.push(prime.pop())

	return retrograde
}

//draw the notation of all four rows
function draw_rows(){

	draw_row(
		_tone_row,		//draw original row
		"Prime", 		//staff label
		"staff_one")	//which staff to draw to

	draw_row(
		retrograde(_tone_row),	//draw retrograde of original row
		"Retrograde", 
		"staff_two")

	draw_row(
		_inverse,		//draw inverse of original row
		"Inverse", 
		"staff_three")

	draw_row(
		retrograde(_inverse),	//reuse retrograde on inverse of row
		"Retrograde Inverse", 
		"staff_four")
}

//user toggles this for a different clef
function toggle_clef(toggle){
	if(toggle.checked)
		_bass_on = true
	else
		_bass_on = false
}

//gives back vexflow format of "note/octave"
//which vexflow uses to place the note in the correct spot
//bass gives a lower octave
function note_format(note, clef){

	if(clef == 'treble'){
		
		//these are exceptions so the notes don't end up on ledger lines
		if(note == 'C' || note == 'Db' || note == 'D' || note == 'C#'){
			return note + "/5"
		}
		return note + "/4"
	}
	else if(clef == 'bass'){
		if(note=='B'){	//so B shows up lower in the staff
			return note + "/2"
		}
		return note + "/3"
	}
	else{
		console.log("error: undefined clef")
	}
}
