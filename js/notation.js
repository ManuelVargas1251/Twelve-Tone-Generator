//notation

//globals
var _bass_on = false

//user toggles this for a different clef
function toggle_clef(toggle){
	if(toggle.checked)
		_bass_on = true
	else
		_bass_on = false
}

//gives back vexflow format of "note/octave"
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

function notation(){
	
	//create_accidental()	//creates 
	//console.log(_tone_row)
	
	VF = Vex.Flow;
	/***************************************************/
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
	
	/***************************************************/
	
	// Create the notes
	var notes = []
	var twelve = 12		//yum
	var each_note = 0	
	
	
	_tone_row.forEach(function(element){
		//console.log("success: "+ each_note)
		//console.log("tone row: " + _tone_row[each_note][1])
		
		//if note has either accidental, pass object with modifier
		if(_tone_row[each_note][1] == '#' || _tone_row[each_note][1] == 'b' ){
			//push alll that to notes[th]
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(_tone_row[each_note][0], clef)], 
				duration: "q"
			}).addAccidental(0, new VF.Accidental(_tone_row[each_note][1])))
		}

		//if note has no accidental, pass object without accidental modifier
		if(_tone_row[each_note][1] == undefined){
			notes.push(new VF.StaveNote({
				clef: clef, 
				keys: [note_format(_tone_row[each_note][0], clef)],
				duration: "q"
			}))
		}
		each_note++	//each and everyone
	})


	// Create a voice in 4/4 and add above notes
	var voice = new VF.Voice({num_beats: twelve,  beat_value: 4});
	voice.addTickables(notes);

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	
	// Render voice
	voice.draw(context, stave);
	
	//console.log(_tone_row)
}