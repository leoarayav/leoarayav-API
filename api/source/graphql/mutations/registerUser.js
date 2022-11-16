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
 * @param {*} _ 
 * @param {*} args - Argumentos pasados a la mutación.
 */
const resolve = async (_, args) => {
    await createUser(args, true) && 'Usuario registrado correctamente'
}

const registerUser = {
    type: GraphQLString,
    description: 'Registra un usuario nuevo a la API',
    args,
    resolve
}

module.exports = registerUser