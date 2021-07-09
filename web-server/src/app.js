const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// Defining paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set up app as express
const app = express()

// Setting up handlebars for express
app.set('view engine', 'hbs')

// Setting up views for templates as the directory
app.set('views', viewsPath)

// Setting up partials path
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirPath))

// Route for the home page
app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Don Hurst'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather app about page',
        name: 'Don Hurst'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Don Hurst',
        help_message: 'Here is a sample help message'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "No address found. Please provide an address."
        })
    }
    const address = req.query.address

    geocode(address, (error, {latitude, longitude, location} = {}) => {

        if (error){
        return res.send({error})
        }
        
        forecast(latitude,longitude, (error, forecastData) => {
    
            if (error) {
            console.log('Error', error)
            }

            res.send({
                forecast: forecastData,
                location,
                address: address
            })
        })
    })


})

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.send("Help article not found")
})

// Route for all non-defined routes (404 error)
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: "404. Page not found."
    })
})

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000!')
})