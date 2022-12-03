/**
 * @file post.model.js
 * @brief The post model of the database.
 */

const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        maxlenght: 1000
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Post', PostSchema)