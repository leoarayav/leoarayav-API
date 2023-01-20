/**
 * @fileoverview Main routes for the application.
 * @author Leo Araya
 * NOTE: Here we export all routes existents.
 */

const { Router } = require('express')

// We define our router.
const router = Router()

// Main endpoint.
router.get('/', (req, res) => {
    res.render('home')
})

// Here we'll exports all routes availables soon.


module.exports = router