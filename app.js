console.log('starting node app...');
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const note = require('./note.js');
const command = yargs.argv;
console.log(command);

if (command._[0] === 'list') {
  console.log("List");
}
else if (command._[0] == 'add') {
note.addNote(command.title,command.body);
}
else if (command._[0] == 'remove') {
  note.removeNote(command.title);
}

else if (command._[0] =='read') {
  note.readNote(command.title);
}

else {
  console.log("command not found");
}
