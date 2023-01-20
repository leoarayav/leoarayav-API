/**
 * @fileoverview Main file of the API.
 * @author Leo Araya
 */

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const path = require('path')
const { engine } = require('express-handlebars')

// Project importations.
const { port } = require('./configuration')
const { database } = require('./database')

// Creating the express aplication.
const app = express()

// Setting up the middlewares.
app.use(cors())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Setting up the handlebars configuration.
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')
app.engine('.hbs', engine({
    extname: '.hbs', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}))

// Setting up our database.
database.start()

// Reading routes.
app.use('/api', require('./routes'))

// Listening our server API.
app.listen(port, () => console.log('Listening the server API on port:', port))