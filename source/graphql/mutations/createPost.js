/**
 * @mutation createPost
 * @description Creates a new post in the api.
 */

const { GraphQLString, GraphQLNonNull } = require('graphql')
const { CreatePost } = require('../../controllers/post.controller')
const { PostType } = require('../types')

const args = {
    title: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The title of the post',
    },
    subtitle: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The subtitle of the post',
    },
    content: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The content of the post'
    }
}

/**
 * This resolve a new post.
 */
const resolve = async (root, args) => {
    if (args.title.length > 24) throw new Error('The title is too long.')
    const newPost = await CreatePost({ title: args.title, subtitle: args.subtitle, content: args.content })
    return newPost
}

const createPost = {
    type: PostType,
    description: 'Creates a new post in the API',
    args,
    resolve
}

module.exports = createPost