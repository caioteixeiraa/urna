const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
require('dotenv').config()
const mongoose = require('mongoose')

const dbUri = process.env.DATABASE_URI

mongoose.connect(dbUri)
  .then(() => {
    console.log("Database connected")
  })
  .catch((err) => {
    console.log("Database error: ", err)
  })

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});