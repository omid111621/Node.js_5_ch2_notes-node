const { forEach } = require("lodash");

console.log(`starting notes.js`);

//........................
module.exports.age = 25;
module.exports.addNote = (title, body) => {console.log(`"${title}"
${body}`);
return `New Note`;
};
module.exports.getAll = (_) => { console.log (`Getting and listing all notes.`);
_.forEach( m => console.log (m));
 
}