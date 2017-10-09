console.log('starting note app..');
const fs = require('fs');
var SaveNote=(originalNote)=>{
  try {
    var originalNotestring = JSON.stringify(originalNote);
    console.log(originalNotestring);
    fs.writeFileSync('notes-data.json',originalNotestring);
  } catch (e) {
}
};
var FetchNote =()=>{
  try {
    var notesstring=fs.readFileSync('notes-data.json');
    return JSON.parse(notesstring);
  } catch (e) {
return [];
  }
}

var addNote=(title,body)=>{
var notes=FetchNote();
var note= {
  title:title,
  body:body
};
console.log(title);
console.log(body);
var duplicatenote = notes.filter((note)=>note.title===title);
if (duplicatenote.length===0) {
  notes.push(note);
  SaveNote(notes);
}

};

var removeNote =(title)=>{
  var getallnote=FetchNote();
  console.log(title);
  var getselectednote=getallnote.filter((note)=> note.title!==title);
  SaveNote(getselectednote);
};

var readNote=(title)=>{
  console.log(title);
};

module.exports={
  addNote,
  readNote,
  removeNote
}
