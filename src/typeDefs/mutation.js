const { gql } = require("apollo-server")

const mutation = gql`
  type Mutation {
    createPoll(poll: PollInput): Poll
    vote(pollId: ID, choiceId: ID): Poll
  }

  input PollInput {
    id: ID
    topic: String
    choices: [ChoiceInput]
    isActive: Boolean
  }

  input ChoiceInput {
    id: ID
    value: String
    numberOfVotes: Int
  }
`

module.exports = mutation