/*
*** sound.js

plays the tone row
not ready, man
*/



//load audio files and make variables global
//var a = new Audio("notes/A.mp3");	var b = new Audio("notes/B.mp3");
//var c = new Audio("notes/C.mp3");	var d = new Audio("notes/D.mp3");
//var e = new Audio("notes/E.mp3");	var f = new Audio("notes/F.mp3");
//var g = new Audio("notes/G.mp3");	var as = new Audio("notes/As.mp3");
//var cs = new Audio("notes/Cs.mp3");	var ds = new Audio("notes/Ds.mp3");
//var fs = new Audio("notes/Fs.mp3");	var gs = new Audio("notes/Gs.mp3");
//console.log(":Loaded:")



function sound(){
	for(i=0; i < 12; i++){
		console.log("at i:" + _tone_row[i])
		switch(_tone_row[i]){
			case 'A':
				setTimeout(function(){
					a.play();
				}, 0);
				break;
				
			case 'A#':
			case 'Bb':
				setTimeout(function(){
					as.play();
				}, 20);
				break;
				
			case 'B':
				setTimeout(function(){
					b.play();
				}, 40);
				break;
				
			case 'C':
				setTimeout(function(){
					c.play();
				}, 60);
				break;
				
			case 'C#':
			case 'Db':
				setTimeout(function(){
					cs.play();
				}, 80);
				break;
				
			case 'D':
				setTimeout(function(){
					d.play();
				}, 100);
				break;
				
			case 'D#':
			case 'Eb':
				setTimeout(function(){
					ds.play();
				}, 120);
				break;
				
			case 'E':
				setTimeout(function(){
					e.play();
				}, 140);
				break;
				
			case 'F':
				setTimeout(function(){
					f.play();
				}, 160);
				break;
				
			case 'F#':
			case 'Gb':
				setTimeout(function(){
					fs.play();
				}, 180);
				break;
				
			case 'G':
				setTimeout(function(){
					g.play();
				}, 200);
				break;
				
			case 'G#':
			case 'Ab':
				setTimeout(function(){
					gs.play();
				}, 110);
				break;
				
			default:
				console.log("end of switch")
		}
	}
}



//p5 implementation
//function preload() {
//	mySound = loadSound('notes/A.mp3');
//}
//
//function setup() {
//	
//	mySound.setVolume(0.1);
//	mySound.play();
//}
//

function sound(){
	console.log("hey")
	console.log("%cmatrix(): \t\t%cstart", "color: purple; font-weight:bold;", "color: orange")

	
	console.log("bye")
	preload()
	setup()
	
	console.log("%cmatrix(): \t\t%cdone", "color: purple; font-weight:bold;", "color: limegreen")
}