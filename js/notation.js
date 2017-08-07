/*
*** notation.js

using vexflow, draws the tone row on a staff
this takes place in the white panel
*/

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
//which vexflow uses to place the note in the correct spot
//bass gives a lower octave
function note_format(note, clef){
	
	if(clef == 'treble')
		return note + "/4"

	else if(clef == 'bass'){
		if(note=='B'){	//so B shows up lower in the staff
			return note + "/2"
		}
		return note + "/3"
	}
}

//main function in notation
function draw_row(tone_row, row_label){
	
	console.log(row_label+": "+tone_row)	//print current working row
	
	//vexflow init
	VF = Vex.Flow;
	// Create an SVG renderer and attach it to the DIV element named "staff".
	var div = document.getElementById("staff")
	var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

	// Configure the rendering context.
	renderer.resize(600, 130);

	var context = renderer.getContext();
	const group = context.openGroup();
	context.setFont("Crimson Text",16, "").setBackgroundFillStyle("#eed");
	
	/*
	if(_create){
		//context.svg.removeChild(group);
		//context.clearRect(0, 0, 5000, 700);
		context.svg.removeChild(group);	//clears current group
		const group = context.openGroup();
		//_create = false
	}
	_create = true
	*/
	

	
	
	

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
	var notes = []	
	
	tone_row.forEach(function(tone){
		//console.log("element 0: "+tone[0])
		//console.log("element 1: "+tone[1])
		
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
	var voice = new VF.Voice({
		num_beats: 12,
		beat_value: 4
	});
	
	voice.addTickables(notes);	//pass notes array 

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	
	
	// Render voice to index.html
	voice.draw(context, stave);
	
	context.fillText(row_label,10,50)
	// Then close the group
	//context.closeGroup();
	
	//context.svg.removeChild(group);
}

//returns the retrograde transformation of the tone row
function retrograde(){
	var temp = _tone_row.slice()
	var retrograde = []
	
	while(temp.length)
		retrograde.push(temp.pop())

	return retrograde
}

function find_interval(note_1, note_2){
	console.log(_alphabet_copy)	//I should not have a copy of alphabet; it should not be changed
	var location_1, location_2
	
	console.log("note 1: "+note_1)
	console.log("note 2: "+note_2)
	
	for (var i = 0; i < _alphabet_copy.length; i++) {
		if (_alphabet_copy[i] == note_1) {
			location_1 = i
		}
		else if (_alphabet_copy[i] == note_2) {
			location_2 = i
		}
	}
	
	console.log("loc 1: "+location_1)
	console.log("loc 2: "+location_2)
	
	
	return 5
}

//returns the inverse transformation of the tone row
function inverse(){
	var temp = _tone_row.slice()
	var inverse = []
	
	inverse[0] = temp[0]	//set first location to be the same
	var j=0
	//for(var i=1;i<11;i++){
		
		//j = i+1
		var interval = (find_interval(temp[0],temp[0]))	//find interval between notes
		
	//}
	
	return ['A','A#','A','A#','A','A#','A','A#','A','A#']
}




//draw tone row plus 3 transformations
function notation(){
	console.log("%cnotation(): \t%cstart", "color: deeppink;font-weight:bold;", "color: orange")
	
	draw_row(_tone_row, "Prime")
	draw_row(retrograde(), "Retrograde")
	//draw_row(inverse(), "Inverse")
	//draw_row(retrograde_inverse(), "Retrograde Inverse")
	
	console.log("%cnotation(): \t%cdone", "color: deeppink; font-weight:bold;", "color: limegreen")
}