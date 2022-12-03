/**
 * @mutation createUser
 * @description Creates a new user in the api.
 */

const { GraphQLString, GraphQLNonNull } = require('graphql')
const { RegisterUser } = require('../../controllers/user.controller')

const args = {
    username: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The username',
    },
    email: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The email of user',
    },
    password: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The password of user'
    }
}

/**
 * This resolve a new user.
 */
const resolve = async (root, args) => {
    await RegisterUser(args)
    return 'User registered in the database succesfully.'
}

const createUser = {
    type: GraphQLString,
    description: 'Creates a new user in the API',
    args,
    resolve
}

module.exports = createUser