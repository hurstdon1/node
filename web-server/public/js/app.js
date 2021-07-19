console.log('Client side Js File is loaded!')

// This script runs in client side JS. Not supported by NODE

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
// The # allows us to get element by the ID like . is used for class
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    // This prevents default behavior AKA reloading the page
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = "Forecast: " + data.forecast.description
                messageThree.textContent = "Temperature: " + data.forecast.temp + " degrees"
                console.log(data.forecast)
            }
        })
    })

    // console.log(location)
})