/**
 * @fileoverview Configuration for the API.
 * @author Leo Araya
 */

require('dotenv').config()

/**
 * This exports all configuration variables to use it on the API entry point.
 * NOTE: We are gonna add more configuration variables in the future.
 */
module.exports = {
    port: process.env.PORT || 4000,
    token: {
        secret: process.env.SECRET_TOKEN
    },
    database: {
        uri: process.env.URI
    }
}