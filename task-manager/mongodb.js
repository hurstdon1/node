// CRUD - Create, Read, Update, Delete

// Instantiate mongoDB and the mongoDB client
const mongodb = require('mongodb')

// Grabbing the client and object id
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// Destructured but does same thing as above
const { MongoClient, ObjectID} = require('mongodb')

// Connection URL for the localhost IP
const connectionURL = 'mongodb://127.0.0.1:27017'

// Database name
const databaseName = 'task-manager'

// Generate new ID
const id = new ObjectID()

// Connect to the mongoDB client
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    // Reference to db created using the database name we stored above
    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "Play with the dogs"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

    // db.collection('users').deleteMany({
    //     age: 29
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6103283450b7a4396664194e")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60fddb9c90e5ea33391ce888")}, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to fetch name")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').find({age: 30}).toArray((error, users) => {
    //     console.log(users)
    // })
    
    // db.collection('users').find({age: 30}).count((error, users) => {
    //     console.log(users)
    // })

// ----------------------------------------------------------
// The code below is used to insert information into a table
// ----------------------------------------------------------
    // Insert many to the table
    // db.collection('users').insertMany([
    //     {
    //         name: 'Rebecca',
    //         age: 27
    //     },
    //     {
    //         name: 'Ellie',
    //         age: 4
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result.ops)
    // })

        // Insert one to the table

// })