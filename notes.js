'use strict'; 

console.log(`starting notes.js`);

//........................
const fs = require ("fs");
const { string } = require("yargs");


//.......................................................
try{let notesString = fs.readFileSync('notes-data.json', 'utf-8');
var notes =JSON.parse(notesString);} catch(e){ var notes=[];};

//.......................................................
module.exports.addNote = (title, body) => {
     //let notes = [];
    const note = {
        title : title,
        body : body
};

notes.push(note);

fs.writeFileSync('notes-data.json', JSON.stringify(notes));
fs.writeFileSync('notes-data.text', JSON.stringify(notes));
console.log(notes);
console.log(JSON.stringify(notes));
console.log(notes[2]);
};
module.exports.getAll = (_) => { console.log (`Getting and listing all notes.`);
_.forEach( m => console.log (m));
 
}
module.exports.getNote = m => console.log(`reading title is :`, m);