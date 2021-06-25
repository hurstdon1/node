const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=77c4ee708c5a6026327a4dcbccab8a38&query='+ lat + ',' + long +'&units=f'
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        }
        else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temp: body.current.temperature,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast