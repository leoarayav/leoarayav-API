/**
 * @fileoverview Main entry point for the API.
 * @author Leo Araya
 */

const express = require('express')
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

// Routing.
app.use('/last-release', require('./routes'))

// Listening the connection.
app.listen(port, () => {
    console.log('Server is running on', port)
})