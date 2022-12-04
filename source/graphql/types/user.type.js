/**
 * @type User
 * @version 0.0.1
 */

const { GraphQLObjectType, GraphQLString, GraphQLID,} = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'User type of API',
    fields: {
        id: {
            type: GraphQLID,
            description: 'The user id',
        },
        name: {
            type: GraphQLString,
            description: 'The user name',
        },
        email: {
            type: GraphQLString,
            description: 'The user email'
        }
    }
})

module.exports = UserType