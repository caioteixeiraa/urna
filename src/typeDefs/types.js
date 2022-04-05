const { gql } = require('apollo-server')

const types = gql`
  type Choice {
    id: ID
    value: String
    numberOfVotes: Int
  }
  
  type Poll {
    id: ID
    topic: String
    choices: [Choice]
    isActive: Boolean
  }
`

module.exports = types