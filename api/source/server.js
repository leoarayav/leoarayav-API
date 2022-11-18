/**
 * @file server.js
 * @version 0.0.2
 * @author Leo Araya
*/

const express = require('express')
const ehbs = require('express-handlebars')
const egraphql = require('express-graphql')
const path = require('path')

// Required modules goes here :-)
const schema = require('./graphql/schema')
const { databaseConnection } = require('./database')

// Configuration
const port = require('./config').PORT

// Server development
const app = express()

/**
 * Handlebars configuration.
 * @params None
 */
const HandlebarsSettings = () => {
    app.engine('.hbs', ehbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
    app.set('view engine', 'handlebars' || '.hbs')
    app.set('views', path.join(__dirname, 'views'))
    app.use(express.urlencoded({ extended: true }))
}

// Main function of server development.
async function Main() {
    try {
        await databaseConnection()
        app.listen(port, () => console.log('Servidor alojado en el puerto:', port))
        app
            .use('/graphql', egraphql.graphqlHTTP({ graphiql: true, schema }))
            .use(require('./routes/home.routes'))
        HandlebarsSettings()
    } catch (err) {
        console.log('Ha ocurrido un error al inicializar el servidor:', err)
    }
}

module.exports = Main