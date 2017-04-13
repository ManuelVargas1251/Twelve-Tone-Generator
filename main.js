/*
created by manuel vargas
website does twelve tone things
read the readme.md for more info
*/

//globals
var _tone_row = [] //row to be shared with all functions
var _sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
var _flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
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