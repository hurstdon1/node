const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//const url = "http://api.weatherstack.com/current?access_key=77c4ee708c5a6026327a4dcbccab8a38&query=37.702152,-121.935791&units=f"

// const geo_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaHVyc3Rkb24xIiwiYSI6ImNrcGxnNnFveDBheXMyb21lZjlkaTZjeTEifQ.0KLpDNDsQXr1ABtinZ7r_A"
// request({url: url, json: true}, (error, response) => {
//     const data = response.body
//     console.log(data.current.weather_descriptions[0])
//     console.log("Current temp is: " + (data.current.temperature))
//     console.log("It feels like: "+ data.current.feelslike)
// })


geocode("Dublin California", (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(37.702152,-121.935791, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
