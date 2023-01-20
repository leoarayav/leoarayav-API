/**
 * @fileoverview This file contains all database logic.
 * @author Leo Araya
 */

const mongo = require('mongoose')
const { db } = require('../configuration')

mongo.set('strictQuery', false)

module.exports.database = {
    start: async (uri) => await mongo.connect(db.url || uri),
    checkout: async () => await mongo.connection.readyState == 1,
    disconnect: async () => await mongo.connection.close()
}