/**
 * @fileoverview Main file of the API.
 * @author Leo Araya
 */

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import { configuration } from './configuration'


// Creating an express application.
const app = express()

// Setting up the middlewares.
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(compression())
app.use(express.urlencoded({ extended: false }))

// Listening our application.
app.listen(configuration.port, () => console.log("Server listening on", configuration.port))