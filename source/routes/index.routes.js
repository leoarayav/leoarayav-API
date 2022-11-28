/**
 * @file index.routes.js
 * @brief Index routes file for the application.
 */

const express = require('express')
const router = express.Router()

// Index routes
router.get('/', async (req, res) => 
{
    await res.render('index', { title: 'leoarayav/API' })
})

module.exports = router