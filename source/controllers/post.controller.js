/**
 * @controller post
 * @brief Post controller of this API.
 */

const { Post } = require('../database').models
const { ObjectId } = require('mongoose').Types

/**
 * Post: all exportations of controllers/handlers methods.
 * @author Leo Araya
 */
module.exports = {
    CreatePost: async (args) => {
        const newPost = new Post(args)
        await newPost.save()
        return newPost
    },
    DeletePost: async (id) => {
        if (!ObjectId.isValid(id))
            return null
        return await Post.findByIdAndDelete(id)
    },
    UpdatePost: async (id, data) => { 
        await Post.findOneAndUpdate({ _id: id}, data, { new: true })
    },
    FindPost: async (query) => { 
        await Post.findOne(query).populate('title') 
    }
}