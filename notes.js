const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'Your Notes...'
}

const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNotes= notes.filter((note)=> note.title ===title)
    const duplicateNote = notes.find((note)=> note.title ===title)

    debugger
    if(!duplicateNote){

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note Added!'))
    } else{
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const validNotes= notes.filter((note)=> note.title !==title)
    if(notes.length > validNotes.length){
        console.log(chalk.green('Note Removed!'))
        saveNotes(validNotes)     
    } else{
        console.log(chalk.red('Note title does not exist!!'))
    
        
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.bold('Your Notes!'))
    notes.forEach((note)=>{
        console.log(chalk.bold(note.title))
    })

}

const readNote =(title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title ===title)
    if(note){
        console.log(chalk.bold.green(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not Found!'))
    }
}


const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}


module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}