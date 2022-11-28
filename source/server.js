/**
 * @file server.js
 * @brief Server file for the application.
 */

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const exphbs = require('express-handlebars')
const path = require('path')

// Importing configuration.
const { PORT, DOMAIN } = require('./config')

// Routes
const IndexRoutes = require('./routes/index.routes')
const DataRoutes = require('./routes/data.routes')

// Initializations
const app = express()

// Settings
app.use(morgan('dev'))
app.use(cors())
app.use(compression())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')

app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'), 
}))

app.use(IndexRoutes)
app.use(DataRoutes)

/**
 * Main function and initialization of the server.
 * @params None
 */
const main = () => {
    app.listen(PORT, () => console.log(`Server running on port ${DOMAIN}:${PORT}`))
}

module.exports = main