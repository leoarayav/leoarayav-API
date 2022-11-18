/**
 * @route Home
 * @version 0.0.1
 * @author Leo Araya
 */

const express = require('express')
const router = express.Router()
const response = fetch('https://api.github.com/repos/leoarayav/leoarayav-API/commits')

router
    .get('/', (_, res) => {
        res.send(response)
    })

module.exports = router