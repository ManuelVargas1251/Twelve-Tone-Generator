/*
*** main.js

created by manuel vargas
https://github.com/ManuelVargas1251

website does twelve tone things
read the readme.md for more info
*/

//globals
var _tone_row = [] //row to be shared with all functions
var _alphabet = []	//will store the music alphabet; sharps or flats
var _alphabet_copy = []	//for use in matrix / this will change!
var _hide_table = true	//wanted initial display to be clean
var _hide_keyboard = true	//wanted initial display to be clean

//runs when create button is clicked
function create(){
	console.clear()	//removes previous log if one exists
	//custom_row()	//user can input their own tone row instead of random
	tone_row()	//creates random row
	matrix()	//creates/displays matrix based on row
	notation()	//draws notes onto staff
	//sound()	//playes row in sequence and maybe some other stuff
}

function main(){
	//nothing yet
}
