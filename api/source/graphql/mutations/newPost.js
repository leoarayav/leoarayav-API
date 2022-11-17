/**
 * @mutation newPost
 * @brief Create a new post in the API
*/

const { postType } = require('../types')
const { createPost } = require('../../controllers/PostController')
const {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql')

/* Arguments to object */
const args = {
    title: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Post title'
    },
    subtitle: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Post subtitle',
    },
    body: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Post body container'
    }
}

/**
 * Resolve a new post :-)
 * @param {Object} _ The unused parent object.
 * @param {Object} args Args passed to the mutation.
*/
const resolve = async (_, args) => {   
    if (args.title.length > 24 || args.title < 4) 
        throw Error('Post title must contain atleast 4 chars or up to 24')

    if (args.subtitle.length > 18 || args.subtitle.length < 4) 
        throw Error('Post subtitle must contain atleast 4 chars or up to 18')  

    if (!args.title) throw Error('Please write any title for this post')

    if (args.body.length > 100) throw Error('Post body container must contain only 100 characters!')

    const newPost = await createPost({
        title: args.title,
        subtitle: args.subtitle,
        body: args.body
    })

    return newPost
}

const newPost = {
    type: postType,
    description: 'Create a new post in the API',
    args,
    resolve
}

module.exports = newPost