const mongoose = require('mongoose')

// Connection URL for the localhost IP
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'


mongoose.connect(connectionURL, {
    useNewURLParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, completed: {
        type: Boolean
    }
})

const newTask = new Task({
    description: "Node Js Practice",
    completed: false
})

newTask.save().then((newTask) => {
    console.log(newTask)
}).catch((error) => {
    console.log("ERROR", error)
})

// Defining the model
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// // Creating a new user
// const me = new User({
//     name: 'Donald',
//     age: 30
// })

// // Save new user to database
// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })