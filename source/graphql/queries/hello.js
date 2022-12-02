/**
 * @query hello
 * @description This is a sample query
 */

const { GraphQLString } = require('graphql')

const hello = {
    type: GraphQLString,
    description: 'Nos retorna un simple saludo',
    resolve: () => "Hello World!"
}

module.exports = hello