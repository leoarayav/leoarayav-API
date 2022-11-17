/**
 * @file schema.js
 * @version 0.0.2
 * @author Leo Araya
 */

const { 
    GraphQLSchema, 
    GraphQLObjectType
} = require('graphql')

const 
{
    hello
} = require('./queries')

const 
{
    registerUser,
    newPost
} = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Esta es la QueryType de leoarayav API",
    fields: {
        hello
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Esta es la MutationType de leoarayav API",
    fields: {
        registerUser,
        newPost
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})