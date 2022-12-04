/**
 * @type PostType
 */

const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const PostType = new GraphQLObjectType({
    name: 'PostType',
    description: 'Current post type of the API',
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
        content: {
            type: GraphQLString,
            description: 'The post content',
        }
    }
})

module.exports = PostType