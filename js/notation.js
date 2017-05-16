//notation
//draw the tone row on a staf using vexflow

//globals
var _bass_on = false	//option to draw on bass clef

//user toggles this for a different clef
function toggle_clef(toggle){
	if(toggle.checked)
		_bass_on = true
	else
		_bass_on = false
}

//gives back vexflow format of "note/octave"
//which vexflow using to place the note in the correct spot
//bass gives a lower octave
function note_format(note, clef){
	if(clef == 'treble')
		return note + "/4"
	
	if(clef == 'bass'){
		if(note=='B'){	//so B shows up lower in the staff
			return note + "/2"
		}
		return note + "/3"
	}
}

//main function in notation
function notation(){

	//console.log(_tone_row)
	
	VF = Vex.Flow;
	/*********************** start of setup **************************/
	//////////
	/* setup*/
	//////////
	// Create an SVG renderer and attach it to the DIV element named "staff".
	var div = document.getElementById("staff")
	var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

	// Configure the rendering context.
	renderer.resize(600, 130);
	var context = renderer.getContext();
	context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

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
	
	console.log("clef: "+clef)
		
	//stave.addClef("treble")

	// Connect it to the rendering context and draw!
	stave.setContext(context).draw();
	
	/*********************** end of setup **************************/
	
	// Create the notes
	var notes = []	//array for note objects to be pushed
	var twelve = 12		//how many notes i'm drawing
	var i = 0	//counter
	
	
	_tone_row.forEach(function(element){
		//console.log("success: "+ i)
		//console.log("tone row: " + _tone_row[i][1])
		
		//if note has either accidental, pass object with modifier
		if(_tone_row[i][1] == '#' || _tone_row[i][1] == 'b' ){
			
			//push alll that to notes[th]
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(_tone_row[i][0], clef)],	//format is given by my function
				duration: "q"	//all notes are quarter notes
			}).addAccidental(0, new VF.Accidental(_tone_row[i][1])))	//adds 'accidental' modifier
		}

		//if note has no accidental, pass object without accidental modifier
		if(_tone_row[i][1] == undefined){
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(_tone_row[i][0], clef)],
				duration: "q"
			}))
		}
		i++	//each and everyone	//could've done this with another type of loop
	})


	// Create a voice in 4/4 and add above notes
	var voice = new VF.Voice({num_beats: twelve,  beat_value: 4});
	voice.addTickables(notes);	//pass notes array 

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	
	// Render voice
	voice.draw(context, stave);
	
	//console.log(_tone_row)
}