const { forEach } = require("lodash");

console.log(`starting notes.js`);

//........................
const fs = require ("fs");
const { string } = require("yargs");
module.exports.addNote = (title, body) => {
    let notes = [];
    const note = {
        title : title,
        body : body
};

notes.push(note);

fs.writeFileSync('notes-data.json', JSON.stringify(notes));
fs.writeFileSync('notes-data.text', JSON.stringify(notes));
console.log(JSON.stringify(notes));
  
};
module.exports.getAll = (_) => { console.log (`Getting and listing all notes.`);
_.forEach( m => console.log (m));
 
}
module.exports.getNote = m => console.log(`reading title is :`, m);