
function note_format(note){
	return note + "/4"
}


function notation(){
	
	//create_accidental()	//creates 
	console.log(_tone_row)
	
	VF = Vex.Flow;
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
	stave.addClef("treble").addTimeSignature("12/4");
	//stave.addClef("treble")

	// Connect it to the rendering context and draw!
	stave.setContext(context).draw();
	
	/***************************************************/
	
	// Create the notes
	var notes = []
	var twelve = 12
	var each_note = 0
	
	_tone_row.forEach(function(element){
		//console.log("success: "+ each_note)
		//console.log("tone row: " + _tone_row[each_note][1])
		
		
		if(_tone_row[each_note][1] == '#' || _tone_row[each_note][1] == 'b' ){
			//console.log('%cACCIDENTAL', 'background: #222; color: #FFF')
			//console.log("format: " + note_format(_tone_row[each_note][0]))
			notes.push(new VF.StaveNote({ keys: [note_format(_tone_row[each_note][0])], duration: "q" }).addAccidental(0, new VF.Accidental(_tone_row[each_note][1])))
			//_tone_row[each_note][1]
		}

		
		
		if(_tone_row[each_note][1] == undefined){
			notes.push(new VF.StaveNote({ keys: [note_format(_tone_row[each_note][0])], duration: "q" }))
			//console.log("myUndefined!")
		}
		
		
		each_note++
	})


	// Create a voice in 4/4 and add above notes
	var voice = new VF.Voice({num_beats: twelve,  beat_value: 4});
	voice.addTickables(notes);

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	
	// Render voice
	voice.draw(context, stave);
	
	stave = 0
}