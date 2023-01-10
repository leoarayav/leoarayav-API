/**
 * @fileoverview Main entry point for the API.
 * @author Leo Araya
 */

const express = require('express')
const httpError = require('http-errors')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { port } = require('./config')

// Setting up the express application.
const app = express()
app.set('port', port)

// Setting up the middlewares.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Catching an error when a route is not found.
app.use((req, res, next) => {
    return next(httpError(404))
})

// Routing.
app.use('/r3', require('./routes'))

// Listening the connection.
app.listen(port, () => {
    console.log('Server is running on', port)
})