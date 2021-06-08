const fs = require('fs')

// const book = {
//     title: 'Never Let Me Go',
//     author: 'Kazuo Ishiguro'
// }

// // Stringify converts js object to string
// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// String not returned, we get binary buffer
// const dataBuffer = fs.readFileSync('1-json.json')

// // toString converts the buffer to a string that we can read
// const dataJSON = dataBuffer.toString()

// // Parsing the JSON data into an object
// const data = JSON.parse(dataJSON)

// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name = "Don Hurst"
data.age = "30"

const donsData = JSON.stringify(data)

fs.writeFileSync('1-json.json', donsData)