const fs=require('fs');
var obj=
{
    name:'sandeep'
}
var stringObj=JSON.stringify(obj);
console.log(typeof obj);
console.log(stringObj);

var personString ='{"name":"sandeep","age":"25"}';
var person=JSON.parse(personString);
console.log(typeof personString);
console.log(person);

var originalNotes={
    title:'cricket',
    body:'stadium'
};
var originalNoteString=JSON.stringify(originalNotes);
fs.writeFileSync('notes.json',originalNoteString);
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

