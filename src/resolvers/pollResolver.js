const Poll = require('../models/poll')

const pollResolver = {
  Query: {
    polls: async () => {
      return await Poll.find()
    },
    pollById: async (_, { id }) => {
      return await Poll.findById(id)
    }
  },
  Mutation: {
    createPoll: async(_, { poll }) => {
      const newPoll = new Poll(poll)
      return await newPoll.save()
    },
    vote: async (_, { pollId, choiceId }) => {
      await Poll.findOne({ "_id": pollId })
        .then((poll) => {
          if (poll.isActive) {
            choice = poll.choices.id(choiceId)
            choice['numberOfVotes'] += 1
            poll.save()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

module.exports = pollResolver