const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')


//Customize YARGS version
yargs.version('1.1.1')

//Add, remove, read, list 

//Add note command . Gets title and body from cmd line
yargs.command({
    command: 'add',
    describe: '--Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }

})

//Remove note command
yargs.command({
    command: 'remove',
    describe: '--Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

//Read note command
yargs.command({
    command: 'read',
    describe: '--Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

//List note command
yargs.command({
    command: 'list',
    describe: '--List notes',
    handler(){
        notes.listNotes()
    }

})

yargs.parse()