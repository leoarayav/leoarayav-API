/**
 * @file config.js
 * @version 0.0.1
 * @author Leo Araya
*/

// Modulo necesario para hacer una configuracion.
const config = require('dotenv').config

config()

// Exportamos nuestra configuración.
module.exports = {

    // Default port of API server
    PORT: process.env.PORT || 3000,

    // Database details :-)
    DATABASE: {
        URL: process.env.MONGO_URL || 'mongodb://localhost/leo-api',
        OPTIONS: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    }
}