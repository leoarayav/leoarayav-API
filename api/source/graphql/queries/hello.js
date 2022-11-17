/**
 * @query hello
 * @version 0.0.1 (static)
 */

const { GraphQLString } = require('graphql')

const hello = {
    type: GraphQLString,
    description: 'Nos retorna simplemente un saludo',
    resolve: () => 'Hola!'
}

module.exports = hello