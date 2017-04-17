function notation(){
	
	//create_accidental()	//creates 
	
	
	
	VF = Vex.Flow;

	// Create an SVG renderer and attach it to the DIV element named "staff".
	var div = document.getElementById("staff")
	var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

	// Configure the rendering context.
	renderer.resize(500, 500);
	var context = renderer.getContext();
	context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

	// Create a stave of width 400 at position 10, 40 on the canvas.
	var stave = new VF.Stave(10, 40, 400);

	// Add a clef and time signature.
	//stave.addClef("treble").addTimeSignature("4/4");
	stave.addClef("treble")

	// Connect it to the rendering context and draw!
	stave.setContext(context).draw();

/////////////////////////////////////////////////////
	
	
	
	var accidental = '#'
	
	// Create the notes
	var notes = [
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental(accidental)),
		
		new VF.StaveNote({ keys: ["c/4"], duration: "q" }).addAccidental(0, new VF.Accidental()),

	];

	// Create a voice in 4/4 and add above notes
	var voice = new VF.Voice({num_beats: 12,  beat_value: 4});
	voice.addTickables(notes);

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	// Render voice
	voice.draw(context, stave);

	
}