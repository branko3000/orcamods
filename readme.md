# ORCA Mods by 3000
This repo contains mods I did on the esoteric sequencer language [Orca]() by [Hundredrabbits](https://100r.co).

All modifications were done for the unpackaged desktop variant, run within electron.js from npm (as that is how I use it).

## Operators
I have added new operators, mainly to avoid golfing for uppercase, lowercase and modulo, and to perform standard actions (like transpositions) without larger modules that would be hard to grasp for an uninformed audience. Other operators are simply added because I needed their function for some more complex plans I had. I restructured ORCA to be more similar to classic programming languages (adding standard mathematical and logical operators for instance) and also more straightforward (a "-"" is way more understandable to an uninformed viewer then a "B"). This removed the option to do mathematical opeation on bang though. Then some operators just changed their character to make room for other operators or to also be more approachable ("T" for "Track" became "A" for "Array" for example). All changes on the operators can be found in the `desktop/sources/scripts/core/library.js` folder. For the "M" operator to work there is also a small change needed that happens in the `desktop/sources/scripts/client.js`.

- **"A"** is now "Array", functions like "T"
- **"B"** outputs biggest input, works just like "L"
- **"F"** is currently not in use
- **"M"** will appear highlighted
- **"T"** transposes input into standard octave, starting at C. "0" is "0C", "1" is "0c", "2" is "0D" and so on. Will automatically up the octave, so "c" will output "1C". Takes an octave as second input, so the output will have the octave added ("1c" will output "2C")
- **"Z"** works like it did before, but the rate will become slower with higher values, not faster. Rate is now treated as module of frame
- **"°"** is now the bang operator
- **"\\"** is now the MIDI control change
- **"|"** is now MIDI monophonic
- **"§"** is now OSC message
- **"+"** sum if inputs, like "A" before
- **"-"** difference of inputs, like "B" before
- **"*"** outputs product of inputs, like "M" before
- **"/"** outputs quotient of inputs
- **"%"** outputs module of inputs
- **"="** bangs if inputs are equal, like "F" before
- **"!"** bangs if inputs are not equal
- **"("** outputs uppercase of input
- **")"** outputs lowercase if input

## Commander
An older version of ORCA had the option to have animated background graphics. I loved that, but it got removed due to reasons unknown to me. I readded this by adding 3 new commands to the ORCA commander (the internal command line interface). These can be used to set a root folder that can contain any number of images, change the currently active image and reset the background to be normal again. Changes can be found in `desktop/sources/scripts/commander.js` (new commands), `desktop/sources/scripts/core/orca.js` for background object on orca object and functions, `desktop/sources/index.html` (background div) and `desktop/sources/links/main.css` (new CSS for background div).

- **"setsrc:"** to select rootfolder
- **"setfrm:"** to select frame of animation
- **"resetsrc"** to remove background

All animations need to be folders at the directory `Oorca/backgrounds/`. Each frame of the animation need to have a number as the filename (starting from 0). All files need to be png, but I might add a command to change that later.

Using a "C", a "$" and a bang you can now have frame synced animations in the background!

I have also added a command for flashing the screen (CSS invert filter and f_high from theme as background for editor) for a given amount of milliseconds by using "flash:". Default is 30ms. Changes can be found in `desktop/sources/scripts/commander.js` (new command) and `desktop/sources/links/main.css` (new CSS for .flashed body class).

## Others
The "M" Operator is also highlighted like the cursor, changes were made in `desktop/sources/scripts/client.js`.
