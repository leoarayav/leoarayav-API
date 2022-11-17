/**
 * @file PostController.js
 * @version 0.0.1
 * @author Leo Araya
 */

const { Post } = require('../database').models
const { ObjectId } = require('mongoose').Types

/**
 * Create a new post.
 * @param {Object} args Post data.
 * @param {Object} store If true, args will saved.
 * @returns
*/
const createPost = async (args, store = true) => {
    const newPost = new Post(args)
    if (store) await newPost.save()
    return newPost
}

/**
 * Update a post.
 * @param {Object} id Post id to update.
 * @param {Object} data Data to update.
 * @returns {Object} The updated post.
*/
const updatePost = async (id, data) => {
    await Post.findOneAndUpdate({ _id: id }, data, { new: true })
}

/**
 * Find a post.
 * @param {Object} query Query data of our post.
 * @returns {Object} The post found.
*/
const findPost = async (query) => { 
    await Post.findOne(query).populate('author') 
}

/**
 * Delete a post by its id
 * @param {Object} id The id of the post.
 * @returns {void} Nothing...
*/
const deletePost = async (id) => {
    if (!ObjectId.isValid(id))
        return null
    return await Post.findByIdAndDelete(id)
}

module.exports = {
    createPost,
    updatePost,
    findPost,
    deletePost
}