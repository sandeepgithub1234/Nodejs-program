console.log("starting app.js");
var fs=require('fs');
var os=require('os');
const _=require('lodash');
var notes=require('./notes.js');
const yargs=require('yargs');
var command=yargs.argv._[0];
console.log('title '+yargs.argv.title+' body '+yargs.argv.body);
var note=notes.addNote(yargs.argv.title,yargs.argv.body);
if(note)
{
    notes.logNote(note);
}
else
{
    console.log('Note have not created');
}
if(command==='add')
{

}
else if(command==='list')
{

}
else if(command==='read')
{
    var note=notes.getNote(yargs.argv.title);
    if(note)
    {
        notes.logNote(note);
    }
    else
    {
        console.log('Not not exist');
    }

}
else if(command==='remove')
{
    var nodeRemoved=notes.removeNote(yargs.argv.title);
    var message=nodeRemoved?'node has removed':'node has not removed';
    console.log(message);
}
else
{
    console.log('command not recognised');
}
