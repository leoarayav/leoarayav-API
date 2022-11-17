/**
 * @file index.js (from database)
 * @version 0.1
 * @brief Mongoose connection
 */

const mongoose = require('mongoose')
const DATABASE = require('../config').DATABASE.URL

/**
 * This function connect our database
*/
const databaseConnection = async (url) => {
    try {
        await mongoose.connect(url || DATABASE)
        console.log(`Conectado a la base de datos: ${url || DATABASE} correctamente!`)
    } catch(err) {
        throw new Error(`No se puede conectar a la base de datos: ${DATABASE}`)
    }
}

const checkDatabase = async () => {
    await mongoose.connection.readyState == 1
}

module.exports = {
    databaseConnection,
    checkDatabase,
    models: {
        User: require('./models/user'),
        Post: require('./models/post')
    }
}