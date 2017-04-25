# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Future Additions (in order of importance)
- play the notes on the tone row
- input your own tone row
- color scheme
- make current row change between sharps/flats with toggle instead of waiting for next row
- [derived rows](https://en.wikipedia.org/wiki/Derived_row)
- [combinatoriality](https://en.wikipedia.org/wiki/Combinatoriality)
- play the notes on the matrix by hovering (far off)
- decide length of notes (far off)
- redesign with bootstrap (far off)

### Fixed
- vexflow staff clears and is ready for next row


## [1.3.0] - 2017-04-25
### Added
- view your tone row on a staff using vexflow (problem loading more than 7)
- Google analytics

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
[1.3.0]: #
[1.2.5]: #
[1.2.4]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/eb5415cea952231762e518f7f5a0e3f9d386cb8a
[1.2.3]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/438fb1bd4c74ca9e281846e5f83157b7dcd0bd96
[1.2.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/36752c536ec4fbf6110b0997b17e4c9dced19c4d
[1.2.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d664ab4799661eb93b547a37559f3423c7fdab15
[1.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/2375acb863b3de644ee51cbccfd61ede348cd16d
[1.1.2]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/bef91a5db9050fb03b2066bb35d55e61f97549b4
[1.1.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/0db91e40df3422686d2aa582f4480eabac77a198
[1.1]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/d0c4135aac43f3a093704c66e2b431e81649b2ca
[1.0]: https://github.com/ManuelVargas1251/Twelve-Tone-Generator/commit/37766e2c5ae280af1d75417bde1772ebd481d83d