console.log('Starting notes.js');
const fs=require('fs');


var fetchNote=()=>{
    try{
        var noteString=fs.readFileSync('./notes.json');
        return JSON.parse(noteString);
        }
        catch(e)
        {
            return [];
        }
}


var saveNote=(notes)=>{
    fs.writeFileSync('./notes.json',JSON.stringify(notes));
}


var addNote=(title1,body1)=>{
    var notes=fetchNote();
    var note={
        title:title1,
        body:body1
    };
   
    var duplicateNote=notes.filter((note)=> note.title===title1);
    if(duplicateNote.length===0)
    {
        notes.push(note);
        saveNote(notes);
        return notes;
    }
    
};



var getAll=()=>{
    console.log('Getting all notes');
};

var getNote=(title1) =>{
    var notes=fetchNote();
    var filteredNote=notes.filter((note)=> note.title===title1);
    return filteredNote[0];
};

var logNote=(note)=>{
    console.log('Note exist');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
var removeNote = (title1) =>{
    var notes=fetchNote();
    var filteredNote=notes.filter((note)=> note.title!==title1);
    saveNote(filteredNote);
    return notes.length!==filteredNote.length;
};
module.exports =
{   
    fetchNote,
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

