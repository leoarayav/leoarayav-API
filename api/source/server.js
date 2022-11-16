/**
 * 
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
        app.listen(port, () => 'Servidor iniciado en el puerto:', port)
        app.get('/', (_req, _res) => _res.send('Bienvenido a mi API, recuerda usar la API de forma ética'))
        app.use('/graphql', (_req, _res) => graphqlHTTP({ graphiql: true, schema }))
    } catch (err) {
        console.log('Ha ocurrido un error al inicializar el servidor:', err)
    }
}

module.exports = Main