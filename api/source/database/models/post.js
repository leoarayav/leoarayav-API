/**
 * @file post.js
 * @type Schema of Post
 */

const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: false,
        },
        body: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Post', PostSchema)