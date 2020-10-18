 

const fs = require ('fs'); //(write into the file.
var originalNote = {
     title : 'some title',
     body : 'some body'
 }
  originalNoteString = JSON.stringify(originalNote);
  fs.writeFileSync ('notes.json', originalNoteString);

  // read from the file.
 var noteString = fs.readFileSync ('notes.json', 'utf-8');
 console.log (noteString);
 var note = JSON.parse (noteString);
 console.log (note);
 console.log (typeof note);
 console.log (note.title);