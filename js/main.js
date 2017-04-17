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

function create(){
	tone_row()	//creates random row
	//notation()	//draws notes onto staff
	matrix()	//creates/displays matrix based on row
	//sounds()	//playes row in sequence and maybe some other stuff
}

function main(){
}