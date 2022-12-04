/**
 * @file auth.js
 * @description This file contains the authentication middleware using JWT.
 */

const jwt = require('jsonwebtoken')
const { JWT } = require('../config')

/**
 * This method authenticates the user using JWT token as middleware too.
 */
const auth = async (req, res, next) => 
{
    const token = req.headers.auth
    const refreshToken = req.headers.refresh_token
    try {
        const decoded = jwt.verify(token, JWT.SECRET)
        req.user = decoded.user
        if (refreshToken) req.refreshToken = refreshToken
        next()
    } catch (e) {
        console.log('Error in auth middleware: ', e)
        next()
    }
}

module.exports = auth