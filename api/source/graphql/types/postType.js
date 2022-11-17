/**
 * @type Post
 * @version 0.1
*/

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql')

const { findUserById } = require('../../controllers/UserController')

/**
 * Current API post type as GraphQL Object 
*/
const postType = new GraphQLObjectType({
    name: 'postType',
    description: 'The current post type',
    fields: {
        id: {
            type: GraphQLID,
            description: 'The post id',
        },
        title: {
            type: GraphQLString,
            description: 'The post title',
        },
        subtitle: {
            type: GraphQLString,
            description: 'The post subtitle',
        },
        body: {
            type: GraphQLString,
            description: 'Body container of the post',
        }
    }
})

module.exports = postType