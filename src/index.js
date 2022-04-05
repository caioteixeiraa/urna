const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
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

  type Query {
    polls: [Poll]
  }
`

const polls = [
  {
    topic: 'Quem deve sair nesse paredão?',
    choices: [
      {
        value: 'Arthur Aguiar',
        numberOfVotes: 10
      },
      {
        value: 'Linn da Quebrada',
        numberOfVotes: 2
      },
      {
        value: 'Tiago Abravanel',
        numberOfVotes: 6
      },
    ],
    isActive: true
  },
  {
    topic: 'Quem deve sair nesse paredão?',
    choices: [
      {
        value: 'Jessi',
        numberOfVotes: 1
      },
      {
        value: 'Eslovênia',
        numberOfVotes: 20
      },
      {
        value: 'Vyni',
        numberOfVotes: 3
      },
    ],
    isActive: false
  }
]

const resolvers = {
  Query: {
    polls: () => polls
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});