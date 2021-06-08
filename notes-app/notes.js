const fs = require('fs')
const chalk = require('chalk')

// ----------------------------------------------------
// This function retrieves all your notes
// ----------------------------------------------------
const getNotes = () => {
	return "Your Notes..."
}

// ----------------------------------------------------
// This function adds a new note to the note list
// ----------------------------------------------------
const addNotes = (title, body) => {
	
	// Loading all notes
	const notes = loadNotes()

	// Function to check for duplicates
	// const duplicateNotes = notes.filter((note) => note.title === title)
	const duplicateNote = notes.find((note) => note.title === title)

	if (!duplicateNote) {
		// Pushing new note to the notes
		notes.push({
			title: title,
			body: body
		})
	}
	else {
		console.log("Note title is not valid")
	}

	// Saving the notes to the file
	saveNotes(notes)
}

const removeNote = (title) => {

	// Loading all notes
	const notes = loadNotes()

	const notesToKeep = notes.filter((note) => note.title !== title)

	if (notesToKeep.length === notes.length) {
		console.log(chalk.red("No Note Found!"))
		
	}
	else {
		console.log(chalk.green("Note Removed!"))
	}

	saveNotes(notesToKeep)

}

const listNotes = () => {
	
	const notes = loadNotes()

	console.log(chalk.green("Your Notes:"))

	notes.forEach((note) => console.log(chalk.blue(note.title)))

}

const readNote = (title) => {

	const notes = loadNotes()

	const matchingNote = notes.find((note) => note.title === title)

	if (matchingNote) {

		console.log(chalk.green("Here is your note Contents:"))
		console.log(chalk.cyan(matchingNote.title))
		console.log(matchingNote.body)
	}
	else {
		console.log(chalk.red("No Note found!"))
	}

}


const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} 
	catch(e) {
		return []
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}




module.exports = {
	getNotes: getNotes,
	addNotes: addNotes,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}