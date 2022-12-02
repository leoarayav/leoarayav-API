/**
 * @file schema.js
 * @brief GraphQL schema definition.
 */

const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const 
{
    hello
} = require('./queries')

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

module.exports = new GraphQLSchema
({
    query: QueryType
})