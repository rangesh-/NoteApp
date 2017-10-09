const fs = require('fs');
var originalNote={
  title:'MyTitle',
  body:'My Body'
}
var originalNotestring = JSON.stringify(originalNote);
console.log(originalNotestring);
fs.writeFileSync('notes.json',originalNotestring);
var notesstring=fs.readFileSync('notes.json');
var notejson=JSON.parse(notesstring);
console.log(notejson.body);
