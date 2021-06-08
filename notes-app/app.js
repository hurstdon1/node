// require is how we import a module
// For files, the ./ is important as it is providing a relative path
// const add = require("./utils.js")
// For packages, call it out by name
// const validator = require('validator')

const validator = require('validator')
const yargs = require('yargs')
const notes = require("./notes.js")
const fs = require('fs')
const chalk = require("chalk")

// Add, remove, read, list
// ------------------------
// Create add command
yargs.command({

    // Command name to be called in command line
    command: 'add',

    // Describe what the command does
    describe:'Add a new note',

    // Instantiate the elements of the command
    builder: {

        // Setting up a title for the note
        title: {
            describe: 'Note title',
            demand: true,
            type:'string'
        },

        // Setting up the body for the note
        body: {
            describe: "Body of the note",
            demand: true,
            type: 'string'
        }
    },

    // Handler explains the functionality and arguments passed
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note Title",
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: " Reads a note",
            demand: true,
            type: "string"
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler () {
        notes.listNotes()
    }
})

yargs.parse()

// console.log(process.argv)
// console.log(yargs.argv)
// console.log(myNotes)
// console.log(validator.isURL('https://www.don-hurst.com'))
// console.log(chalk.bold.red("success"))