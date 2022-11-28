/**
 * @file config.js
 * @brief Configuration file for the application.
 */

const config = {
    PORT: process.env.PORT || 4500,
    TOKEN: process.env.PERSONAL_TOKEN,
    DOMAIN: process.env.DOMAIN || 'localhost',

    DATABASE: {
        URL: process.env.MONGO_URL || 'mongodb://localhost:27017/leoarayav-api-second',
        OPTIONS: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
    },
    
    JWT: {
        SECRET: process.env.JWT_SECRET || 'secret',
        EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d'
    }
}

module.exports = config