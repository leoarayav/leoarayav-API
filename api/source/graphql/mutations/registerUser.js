/**
 * @mutation registerUser
 * @brief Register a new user in the API.
*/

const { GraphQLString, GraphQLNonNull } = require('graphql')
const { createUser } = require('../../controllers/userController')

const args = {
    username: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The username of any user'
    },

    email: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The user email'
    },

    password: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The user secure password'
    }
}

/**
 * Resolve a new user.
 * @param {Object} _ Parent object
 * @param {Object} args - Arguments to the mutation.
 */
const resolve = async (_, args) => {
    await createUser(args, true)
    return 'User registered successfully'
}

const registerUser = {
    type: GraphQLString,
    description: 'Register a user in the API',
    args,
    resolve
}

module.exports = registerUser