const { gql } = require('apollo-server')

const query = gql`
  type Query {
    polls: [Poll]
  }
`

module.exports = query