/**
 * @file UserController.js
 * @version 0.0.2
 * @author Leo Araya
 */

const { User } = require('../database').models
const { ObjectId } = require('mongoose').Types

/**
 *  Creates a user
 *  @param {Object} args - Arguments of user.
 *  @param {Object} save - If true, data will save.
*/
const createUser = async (args, save = true) => 
{
    const newUser = new User(args)
    if (save) 
        await newUser.save()
    return newUser
}

/**
 * Find user by its id.
 * @param {Object} id The userid 
*/
const findUserById = async (id) => {
    if (!ObjectId.isValid(id)) 
        return null
    return await User.findById(id)
}

module.exports = {
    createUser,
    findUserById
}