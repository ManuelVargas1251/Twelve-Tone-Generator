/*
created by manuel vargas
https://github.com/ManuelVargas1251

website does twelve tone things
read the readme.md for more info
*/

//globals
var _tone_row = [] //row to be shared with all functions
var _alphabet = []	//empty array; will fill w/ sharps or flats
var _alphabet_copy = []	//for use in matrix
var _hide_table = true

function create(){
	//custom_row()	//user can input their own tone row instead of random
	tone_row()	//creates random row
	notation()	//draws notes onto staff
	show_labels() 	//animations.js
	matrix()	//creates/displays matrix based on row
	myanimations() //matrix animations
	//sounds()	//playes row in sequence and maybe some other stuff
}

function about(){
	console.log("Hello")
}

function main(){
}