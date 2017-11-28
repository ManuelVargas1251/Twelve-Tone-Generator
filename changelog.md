# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Future Plans
- input your own tone row
- swap note stem up or down
- play the notes on the tone row
- make current row change between sharps/flats with a different toggle 
- [derived rows](https://en.wikipedia.org/wiki/Derived_row)
- [combinatoriality](https://en.wikipedia.org/wiki/Combinatoriality)
- play the notes on the matrix by hovering
- decide length of notes


## [1.6.4] - 2017-11-28

### Added
- more `let` conversions
- make `load_alphabet` return a copy of the alphabet
- added `keyboard.js` for keyboard logic
- organized css

### Changed
- updated license to it will be detected by github
- using event handler for main `click` function
- rename `load_array` to `load_alphabet`
- slimed down staff removal with jQuery
- css for main views, need more improvement!

### Removed
- `:` in console statuses
- no `custom_row.js`, moved to `tone_row.js`
- no more hotjar, it was a trial
- removed inline `onclick` for create button


## [1.6.3] - 2017-11-22

### Changed
- replaced `var` with `let` when possible
- moved all globals variables to `main.js`
- moved all my code to a new folder `generator`
- updated some base JS API with JQuery
- get table id

### Removed
- css in html tags


## [1.6.2] - 2017-11-21
### Added
- hotjar analytics

### Changed
- updated song link
- `reamdme.md` comment alignment
- minimal keyboard ui code

### Removed
- removed main() function


## [1.6.1] - 2017-10-10
### Changed
- overall UI padding
- clean up
- updated `readme.md` screenshot
- renamed my song
- trying to lowercase license file

## [1.6] - 2017-08-12
### Added
- tone row and all three transformations are notated
- inverse tone row global variable

### Changed
- `animations.js` to `theme.js` to match content; moved function to appropriate files

### Removed
- excess code from notation from failed solutions 

## [1.5.5] - 2017-08-11
### Added
- flat and sharp test rows for custom row testing

### Fixed
- staves now clear out every single time the `create()` function is called
- custom row toggle doesn't break program

### Changed
- treble clef notes will stay in the staff (less ledger lines notes)
- added staff div name as parameter to staff draw function `draw_row(row,transformation,staff)`
- renamed mp3 note files

## [1.5.4] - 2017-08-06
### Added
- my own twelve tone composition from high school as an example
- keyboard for custom row (will replace)

### Changed 
- changed how tone row uses alphbet so it is truly a reusable global variable; using `.slice()`
- console log prints start and completion of each main function
- used a `forEach` loops correctly in `notation.js`
- default theme color changed
- updated `readme.md` summary

### Removed
- duplicate alphabet array

## [1.5.3] - 2017-06-19
### Added
- google font for sheet music labelings
- retrograde and prime tone row displayed to  user

### Changed
- external css and js is now locally stored in repo

### Removed
- p5 libraries; will re-add when they are needed

## [1.5.2] - 2017-06-08
### Added
- google ads added to head

## [1.5.1] - 2017-06-06
### Added
- front keyboard interface with styles and some jquery

### Removed
- favicon.ico

### Changed
- `animation/` css folder is now `external/`


## [1.5] - 2017-05-26
### Added
- mobile @media queries
- mobile side menu css
- basic mobile UI


## [1.4.4] - 2017-05-26
### Added
- summaries for js files
- another css file for all future @media queries 

### Changed
- demo link updated
- `header.css` to `theme.css`

### Removed
- excess css in `styles.css`

## [1.4.3] - 2017-05-16
### Added
- added issues in `readme.md`
- more comments
- new `media.css` for all future size info

### Changed
- moved all sound related code to `sound.js`

## [1.4.2] - 2017-05-05
### Added
- custom row button

## [1.4.1] - 2017-04-26
### Added
- add mp3 and wav files of note audio
- load sound files

### Changed
- white accent made lighter
- minor fixes

## [1.4] - 2017-04-26
### Added
- themes made by [luke garrison](https://github.com/lag0215)
- bass clef notation toggle
- panels are cleared before creation
- 17 rows can now be viewed at once before refresh on larger screens (level 0)

## [1.3.0] - 2017-04-25
### Added
- view your tone row on a staff using vexflow (problem loading more than 7)
- Google analytics
- responsiveness (only 1 level)
### Changed
- new ui
- button animation

### Bugs
- old stave doesn't clear and new stave it's in focus

## [1.2.5] - 2017-04-24
### Changed
- interface layout: sidebar settings
- "Create" button below all future settings

## [1.2.4] - 2017-04-23
### Added
- two panels, left for info/settings, main for tone row, matrix, and future additions

### Changed
- License from MIT to GNU AGPLv3
- title to "Twelve Tone Generator by Manuel Vargas"
- "Create" button is a lot smaller

### Removed 
- extra border box on matrix
- functionality for mobile use for now

## [1.2.3] - 2017-04-22
### Added
- matrix is now striped
- migrated changelog from ``readme.md`` to its own file

## [1.2.2] - 2017-04-21
### Changed
- table hides before create button is pressed

- table now has extra border (it's not suppose to)

## [1.2.1] - 2017-04-17
### Added
- animation with animate.css

### Fixed
- messy code for clock array

## [1.2] - 2017-04-16
### Added/Fixed
- matrix generation functions properly

## [1.1.2] - 2017-04-13
### Added
- matrix is built but still debugging with correct locations

## [1.1.1] - 2017-04-08
### Fixed
- optimized tone_row() function so it always finds a correct number on it's first try

## [1.1] - 2017-04-06
### Added
- 'flats or sharps' toggle button

## [1.0] - 2017-04-06
### Added
- initial commit, only generates random tone row

[Unreleased]: #
[1.6.4]: #
[1.6.3]: #
[1.6.2]: #
[1.6.1]: #
[1.6]: #
[1.5.5]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/754f0ee1d8cf3ced8db90bb1f7bc51aa0f02bf23
[1.5.4]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/fc2406fddaa9d1d604b59b08f9cec2a378bf97d4
[1.5.3]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/3d7fecfe2e34de47ba45aa65b43f3b8eaa465ff4
[1.5.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/36236b238b9902d3d41a46e3da9e7f998aefc858
[1.5.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/68e0d4ae0b3ac408f7d959bd76bdda4f277ed041
[1.5]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/f6670c58585d4e7d5fc33428ec9f02035dcead45
[1.4.4]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/60175f13dd525c353e718290fcc0c66128c313dd
[1.4.3]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/82c6cb7a2cc54cdbdbfc0fe39567041947e14e9b
[1.4.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/6513a86890da59efe4e67a3d33ff77d0f8c5c6fa
[1.4.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d3fa8c1a9ea3b2a9bc2bec5dec10fd4f2e88fb55
[1.4]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/a70fa201fd150e6f30f5973beff5046f42202862
[1.3.0]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/884727f8dc11147e5f43ada27f148062b526a132
[1.2.5]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/27eb5752df9f6dcf6071b9999518c57d1b102aa2
[1.2.4]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/eb5415cea952231762e518f7f5a0e3f9d386cb8a
[1.2.3]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/438fb1bd4c74ca9e281846e5f83157b7dcd0bd96
[1.2.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/36752c536ec4fbf6110b0997b17e4c9dced19c4d
[1.2.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d664ab4799661eb93b547a37559f3423c7fdab15
[1.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/2375acb863b3de644ee51cbccfd61ede348cd16d
[1.1.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/bef91a5db9050fb03b2066bb35d55e61f97549b4
[1.1.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/0db91e40df3422686d2aa582f4480eabac77a198
[1.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d0c4135aac43f3a093704c66e2b431e81649b2ca
[1.0]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/37766e2c5ae280af1d75417bde1772ebd481d83d