`use strict` ;

console.log("starting app");

//..........Node modules..................
const fs = require("fs");
const _ = require('lodash'); 
const yargs = require ("yargs");
//..........Third party modules...........
const notes = require('./notes.js');

//..........reading the command line......
let command = process.argv[2];
console.log (`command` , command);
console.log (`Process`, process.argv);
console.log (`Yargs` , yargs.argv);

//..........processing the command line...
if (command === `add`) {
    console.log (`Adding new note`);
}
else if (command === `list`) {
console.log (`Listing all notes.`);
}
else if (command === `read`) {
    console.log (`Reading note.`);
}
else if (command === `remove`) {
    console.log (`Removing note.`);
}
else if (command === undefined) {
    console.log (`Please enter a command in the command line !`);
}

else {
    console.log (`"${command}" is not a valid command!`)
}