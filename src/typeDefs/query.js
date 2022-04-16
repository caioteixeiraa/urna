const { gql } = require('apollo-server')

const query = gql`
  type Query {
    polls: [Poll]
    pollById(id: ID!): Poll
  }
`

module.exports = query