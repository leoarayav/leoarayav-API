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
const egql = require('express-graphql')

// Importing configuration.
const { PORT, DOMAIN } = require('./config')

// Importing the schema.
const schema = require('./graphql/schema')

// Routes
const IndexRoutes = require('./routes/index.routes')
const DataRoutes = require('./routes/data.routes')
const TestRoutes = require('./routes/test.routes')

// Initializations
const app = express()

app.use(IndexRoutes)
app.use(DataRoutes)
app.use(TestRoutes)

/**
 * Settings for the server application.
 * @params None
 */
const settings = () => {
    try {
        app.use(morgan('dev'))
        app.use(cors())
        app.use(compression())
        app.use(express.urlencoded({ extended: false }))
        app.use(express.static(path.join(__dirname, 'public')))
        app.set('views', path.join(__dirname, 'views'))
        app.set('view engine', '.hbs')
    } catch (error) {
        console.log('Error while initializing the server settings: ', error)
    }
}

/**
 * Handlebars configuration for the server application.
 * @params None
 */
const handlebars = async () => {
    try {
        await app.engine('.hbs', exphbs.engine({ extname: '.hbs', layoutsDir: path.join(app.get('views'), 'layouts'), partialsDir: path.join(app.get('views'), 'partials')}))
    } catch (error) {
        console.log('Error while initializing the handlebars configuration: ', error)
    }
}

/**
 * Main function and initialization of the server.
 * @params None
 */
const main = () => {
    try {
        settings()
        handlebars()
        app.listen(PORT, () => console.log(`Server running on ${DOMAIN}:${PORT}`))
        app.use('/graphql', egql.graphqlHTTP({ graphiql: true, schema }))
    } catch (error) {
        console.log('Error while initializing the server: ', error)
    }
}

module.exports = main