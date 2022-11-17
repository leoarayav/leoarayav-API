/**
 * @file server.js
 * @version 0.0.2
 * @author Leo Araya
*/

const express = require('express')
const { graphqlHTTP } = require('express-graphql')

// Required modules goes here :-)
const schema = require('./graphql/schema')
const { databaseConnection } = require('./database')

// Configuration
const port = require('./config').PORT

// Server development
const app = express()

// Main function of server development.
async function Main() {
    try {
        await databaseConnection()
        app.listen(port, () => console.log('Servidor alojado en el puerto:', port))
        app.get('/', (_req, _res) => _res.send('Bienvenido a mi API, recuerda usar la API de forma ética'))
        app.use('/graphql', graphqlHTTP({ graphiql: true, schema }))
    } catch (err) {
        console.log('Ha ocurrido un error al inicializar el servidor:', err)
    }
}

module.exports = Main