/**
 * @file schema.js
 * @brief GraphQL schema definition.
 */

const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const 
{
    hello
} = require('./queries')

const
{
    createUser
} = require('./mutations')

/**
 * Definition of the root query
 * @type GraphQLObjectType
 */
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Root query type for the GraphQL API of leoarayav",
    fields: { 
        hello 
    }
})

/**
 * Definition of the root mutation.
 * @type GraphQLObjectType
 */
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Root mutation type for the GraphQL API of leoarayav",
    fields: {
        createUser
    }
})


module.exports = new GraphQLSchema
({
    query: QueryType,
    mutation: MutationType
})