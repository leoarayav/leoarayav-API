const mongoose = require('mongoose')
const DATABASE = require('../config').DATABASE.URL
const { alerts } = require('../constants/alerts')

/**
 * This function connect our database
*/
const databaseConnection = async (url) => {
    try {
        await mongoose.connect(url || DATABASE)
        console.log(`Conectado a la base de datos: ${url || DATABASE} correctamente!`)
        console.log(alerts.databaseConnectionSuccess)
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
        User: require('./models/user')
    }
}