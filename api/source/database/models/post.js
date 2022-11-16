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
        }
    }
)