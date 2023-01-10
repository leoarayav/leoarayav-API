/**
 * @fileoverview Routing for the API.
 * @author Leo Araya
 */

const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send({ message: "Welcome to leo's API 🚀" })
})

module.exports = router