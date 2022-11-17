/**
 * @type User
 * @version 0.1
*/

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = require('graphql')

/**
 * Current API user type as GraphQL Object.
 */
const userType = new GraphQLObjectType({
    name: 'userType',
    description: 'The currently user type',
    fields: {
        id: {
            type: GraphQLID,
            description: 'The user id',
        },
        username: {
            type: GraphQLString,
            description: 'The username or nickname',
        },
        email: {
            type: GraphQLString,
            description: 'The user email address',
        }
    }
})

module.exports = userType