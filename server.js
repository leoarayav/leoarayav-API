/**
 * @fileoverview Main file of the API.
 * @author Leo Araya
 */

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const { port } = require('./configuration')

// Creating the express aplication.
const app = express()

// Setting up the middlewares.
app.use(cors())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Reading routes.
app.use('/api', require('./routes'))

// Listening our server API.
app.listen(port, () => console.log('Listening the server API on port:', port))