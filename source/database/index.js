/**
 * @file index.js (database point)
 * @brief Database management file.
 */

const mongoose = require('mongoose')
const DATABASE = require('../config').DATABASE.URL

/**
 * Connect to the database.
 */
const OnDatabaseConnection = async (url) => {
    try
    {
        await mongoose.connect(url || DATABASE) && console.log('leoarayav-API(2): Database connected.')
    }
    catch (error)
    {
        console.log('An error was ocurred while connecting to the database.', error)
    }
}

/**
 * Check the database
 * @params None
 */
const OnDatabaseCheckout = async () => await mongoose.connection.readyState == 1

/**
 * Close the database connection
 * @params None
 */
const OnDatabaseDisconnection = async () => await mongoose.connection.close()

module.exports = {
    OnDatabaseConnection,
    OnDatabaseCheckout,
    OnDatabaseDisconnection,
    models: {
        User: require('./models/user.model')
    }
}