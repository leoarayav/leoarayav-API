/**
 * @controller user
 * @brief User controller of this API.
 */

const { User } = require('../database').models
const { ObjectId } = require('mongoose').Types

/**
 * NEW: Here we exports all user controller/handling methods instead.
 * @author Leo Araya
 */
module.exports = {
    CreateUser: async (args) => {
        const newUser = new User(args)
        await newUser.save()
        return newUser
    },
    FindUserById: async (id) => {
        if (!ObjectId.isValid(id))
            return null
        return await User.findById(id) || Error('User not found')
    }
}