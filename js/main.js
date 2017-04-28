/*
created by manuel vargas
https://github.com/ManuelVargas1251

website does twelve tone things
read the readme.md for more info
*/

//globals
var _tone_row = [] //row to be shared with all functions
var _alphabet = []	//will store the music alphabet; sharps or flats
var _alphabet_copy = []	//for use in matrix
var _hide_table = true

//load audio files
var a = new Audio("notes/A.mp3");	var b = new Audio("notes/B.mp3");
var c = new Audio("notes/C.mp3");	var d = new Audio("notes/D.mp3");
var e = new Audio("notes/E.mp3");	var f = new Audio("notes/F.mp3");
var g = new Audio("notes/G.mp3");	var as = new Audio("notes/As.mp3");
var cs = new Audio("notes/Cs.mp3");	var ds = new Audio("notes/Ds.mp3");
var fs = new Audio("notes/Fs.mp3");	var gs = new Audio("notes/Gs.mp3");
//console.log(":Loaded:")

function create(){
	//custom_row()	//user can input their own tone row instead of random
	tone_row()	//creates random row
	notation()	//draws notes onto staff
	show_labels() 	//animations.js
	matrix()	//creates/displays matrix based on row
	//myanimations() //matrix animations
	//sound()	//playes row in sequence and maybe some other stuff
}

function main(){
}