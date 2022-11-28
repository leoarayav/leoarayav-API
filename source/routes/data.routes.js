/**
 * @file data.routes.js
 * @brief Data routes file for the application.
 */

const express = require('express')
const router = express.Router()

const { user, group } = require('../data/data')

// Data routes.
router.get('/api/data', async (req, res) => {
    try {
        await res.render('data', { title: "leoarayav-API/data" })
    } catch (e) {
        res.send({ message: "error", error: e })
    }
})

router.get('/api/data/user', async (req, res) => {
    try {
        await res.json({
            id: user.map(u => u.id),
            usernames: user.map(u => u.name),
            ages: user.map(u => u.age),
        })
    } catch (e) {
        return res.send({ message: "error", error: e })
    }
})

router.get('/api/data/group', async (req, res) => {
    try {
        await res.json({
          name: group.name,
          subject: group.subject,
          members: group.members,        
        })
    } catch (e) {
        return res.send(["error", e])
    }
})

module.exports = router